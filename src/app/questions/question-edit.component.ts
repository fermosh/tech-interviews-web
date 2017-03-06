import { Component, OnInit, AfterViewInit, OnDestroy, ViewChildren, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';
import { ActivatedRoute, Router  } from '@angular/router';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { IQuestion } from './question';
import { QuestionService } from './question.service';

import { NumberValidator } from '../shared/number.validator';
import { GenericValidator } from '../shared/generic.validator';

@Component({
    templateUrl: './question-edit.component.html'
})
export class QuestionEditComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

    pageTitle: string = 'Question Edit';
    errorMessage: string;
    questionForm: FormGroup;

    question: IQuestion;
    private sub: Subscription;

    // Use with the generic validation message class
    displayMessage: { [key: string]: string } = {};
    private validationMessages: { [key: string]: { [key: string]: string } };
    private genericValidator: GenericValidator;

    get skills(): FormArray {
        return <FormArray>this.questionForm.get('skills');
    }

    constructor(private fb: FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
                private questionService: QuestionService) {

        // Defines all of the validation messages for the form.
        // These could instead be retrieved from a file or database.
        this.validationMessages = {
            productName: {
                required: 'Question text is required.',
                minlength: 'Question text be at least twenty characters.',
                maxlength: 'Question text cannot exceed 256 characters.'
            }
        };

        // Define an instance of the validator for use with this form, 
        // passing in this form's set of validation messages.
        this.genericValidator = new GenericValidator(this.validationMessages);
    }

    ngOnInit(): void {
        this.questionForm = this.fb.group({
            questionText: ['', [Validators.required,
                               Validators.minLength(3),
                               Validators.maxLength(50)]],
            tags: this.fb.array([]),
            questionAnswer: ''
        });

        // Read the question Id from the route parameter
        this.sub = this.route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getQuestion(id);
            }
        );
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    ngAfterViewInit(): void {
        // Watch for the blur event from any input element on the form.
        let controlBlurs: Observable<any>[] = this.formInputElements
            .map((formControl: ElementRef) => Observable.fromEvent(formControl.nativeElement, 'blur'));

        // Merge the blur event observable with the valueChanges observable
        Observable.merge(this.questionForm.valueChanges, ...controlBlurs).debounceTime(800).subscribe(value => {
            this.displayMessage = this.genericValidator.processMessages(this.questionForm);
        });
    }

    addTag(): void {
        this.skills.push(new FormControl());
    }

    getQuestion(id: number): void {
        this.questionService.getQuestion(id)
            .subscribe(
                (question: IQuestion) => this.onQuestionRetrieved(question),
                (error: any) => this.errorMessage = <any>error
            );
    }

    onQuestionRetrieved(question: IQuestion): void {
        if (this.questionForm) {
            this.questionForm.reset();
        }
        this.question = question;

        if (this.question.id === 0) {
            this.pageTitle = 'Add Question';
        } else {
            this.pageTitle = `Edit Question: ${this.question.text}`;
        }

        // Update the data on the form
        this.questionForm.patchValue({
            questionText: this.question.text,
            questionAnswer: this.question.answer,
        });
        this.questionForm.setControl('tags', this.fb.array(this.question.tags || []));
    }

    deleteQuestion(): void {
        if (this.question.id === 0) {
            // Don't delete, it was never saved.
            this.onSaveComplete();
       } else {
            if (confirm(`Really delete the question: ${this.question.text}?`)) {
                this.questionService.deleteQuestion(this.question.id)
                    .subscribe(
                        () => this.onSaveComplete(),
                        (error: any) => this.errorMessage = <any>error
                    );
            }
        }
    }

    saveQuestion(): void {
        if (this.questionForm.dirty && this.questionForm.valid) {
            // Copy the form values over the question object values
            let q = Object.assign({}, this.question, this.questionForm.value);

            this.questionService.saveQuestion(q)
                .subscribe(
                    () => this.onSaveComplete(),
                    (error: any) => this.errorMessage = <any>error
                );
        } else if (!this.questionForm.dirty) {
            this.onSaveComplete();
        }
    }

    onSaveComplete(): void {
        // Reset the form to clear the flags
        this.questionForm.reset();
        this.router.navigate(['/questions']);
    }
}
