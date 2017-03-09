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
import { SkillMatrixService } from './../entryPoint/skill-matrix.service';

declare var jQuery: any;

@Component({
    templateUrl: './question-edit.component.html',
    styleUrls: ['./question-edit.component.css']
})
export class QuestionEditComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

    title: string = 'Question Edit';
    isPageRendered: boolean;
    errorMessage: string;
    questionForm: FormGroup;
    question: IQuestion;
    private sub: Subscription;

    // Use with the generic validation message class
    displayMessage: { [key: string]: string } = {};
    private validationMessages: { [key: string]: { [key: string]: string } };
    private genericValidator: GenericValidator;

    constructor(private fb: FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
                private questionService: QuestionService,
                private skillMatrixService: SkillMatrixService) {

        // Defines all of the validation messages for the form.
        // These could instead be retrieved from a file or database.
        this.validationMessages = {
            questionText: {
                required: 'Question text is required.',
                minlength: 'Question text must be at least twenty characters.',
                maxlength: 'Question text cannot exceed 200 characters.'
            },
            questionTags: {
                required: 'Question tag is required',
                minlength: 'You can select at least 1 Question tag',
                maxlength: 'You can select at most 1 Question tag',
            }
        };

        // Define an instance of the validator for use with this form,
        // passing in this form's set of validation messages.
        this.genericValidator = new GenericValidator(this.validationMessages);
    }

    ngOnInit(): void {
        this.questionForm = this.fb.group({
            questionText: ['', [Validators.required,
                               Validators.minLength(20),
                               Validators.maxLength(200)]],
            questionAnswer: '',
            questionTags: ['', [Validators.required,
                               Validators.minLength(1),
                               Validators.maxLength(1)]],
        });

        // Read the question Id from the route parameter
        this.sub = this.route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getQuestion(id);
            }
        );
    }

    fillAutocomplete(tags: string[]): void {
        jQuery('#tagIt').uui_tagit({'autocomplete': {
            'delay': 0,
            'minLength': 2,
            'source': tags
        }});
    }

    ngAfterViewChecked(): void {
        if (this.question && !this.isPageRendered) {

            this.skillMatrixService.getSkillMatrix(13).subscribe(
                skillMatrix => { this.fillAutocomplete(skillMatrix.skills.map(skill => skill.name));
            },
            error => console.log(<any>error));

            this.isPageRendered = true;
        }
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
            this.title = 'Add Question';
        } else {
            this.title = `Edit Question: ${this.question.text}`;
        }

        // Update the data on the form
        this.questionForm.patchValue({
            questionText: this.question.text,
            questionAnswer: this.question.answer,
        });
        this.questionForm.setControl('questionTags', this.fb.array(['Java', 'JavaScript']));
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
        this.router.navigate(['/question-list']);
    }
}
