import { Component, OnInit, AfterViewInit, OnDestroy, ViewChildren, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';
import { ActivatedRoute, Router  } from '@angular/router';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Question } from './../shared/classes/question';
import { QuestionService } from './../shared/services/question.service';
import { NumberValidator } from '../shared//validators/number.validator';
import { GenericValidator } from '../shared//validators/generic.validator';
import { SkillMatrixService } from './../shared/services/skill-matrix.service';
import { CompetencyService } from './../shared/services/competency.service';
import { ICompetency } from './../shared/classes/competency';
import { Tag } from './../shared/classes/tag';
import { ISkillMatrix } from './../shared/classes/skill-matrix';


declare var jQuery: any;

@Component({
    templateUrl: './question-edit.component.html',
    styleUrls: ['./question-edit.component.css']
})
export class QuestionEditComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

    title: string = 'Question Edit';
    tags: Tag[];
    competencies: ICompetency[];
    isPageRendered: boolean;
    errorMessage: string;
    questionForm: FormGroup;
    question: Question;
    private sub: Subscription;

    // Use with the generic validation message class
    displayMessage: { [key: string]: string } = {};
    private validationMessages: { [key: string]: { [key: string]: string } };
    private genericValidator: GenericValidator;

    constructor(private fb: FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
                private questionService: QuestionService,
                private skillMatrixService: SkillMatrixService,
                private competencyService: CompetencyService) {

        // Defines all of the validation messages for the form.
        // These could instead be retrieved from a file or database.
        this.validationMessages = {
            body: {
                required: 'Question body is required.',
                minlength: 'Question body must be at least twenty characters.',
                maxlength: 'Question body cannot exceed 200 characters.'
            },
            answer: {
                maxlength: 'Solution cannot exceed 4000 characters.'
            }
        };

        // Define an instance of the validator for use with this form,
        // passing in this form's set of validation messages.
        this.genericValidator = new GenericValidator(this.validationMessages);
    }

    ngOnInit(): void {
        this.questionForm = this.fb.group({
            body: ['', [Validators.required,
                        Validators.minLength(20),
                        Validators.maxLength(200)]],
            answer: ['', [ Validators.maxLength(4000)]],
            skillId: 0,
            competencyId: 0
        });

        // Read the question Id from the route parameter
        this.sub = this.route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getQuestion(id);
            }
        );

        this.getTags(13);
        this.getCompetencies();
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

    getTags(id: number): void {
        this.skillMatrixService.getSkillMatrix(id)
            .subscribe(
                (skillMatrix: ISkillMatrix) => this.onTagsRetrieved(skillMatrix.skills),
                (error: any) => this.errorMessage = <any>error
            );
    }

    onTagsRetrieved(tags: Tag[]): void {
        this.tags = tags;
    }

    getCompetencies(): void {
        this.competencyService.getCompetencies()
            .subscribe(
                (competencies: ICompetency[]) => this.onCompetenciesRetrieved(competencies),
                (error: any) => this.errorMessage = <any>error
            );
    }

    onCompetenciesRetrieved(competencies: ICompetency[]): void {
        this.competencies = competencies;
    }

    getQuestion(id: number): void {
        this.questionService.getQuestion(id)
            .subscribe(
                (question: Question) => this.onQuestionRetrieved(question),
                (error: any) => this.errorMessage = <any>error
            );
    }

    onQuestionRetrieved(question: Question): void {
        if (this.questionForm) {
            this.questionForm.reset();
        }
        this.question = question;

        if (this.question.id === 0) {
            this.title = 'Add Question';
        } else {
            this.title = `Edit Question: ${this.question.body}`;
        }

        // Update the data on the form
        this.questionForm.patchValue({
            body: this.question.body,
            answer: this.question.answer,
            skillId: this.question.tag.id,
            competencyId: this.question.competency.id
        });
    }

    deleteQuestion(): void {
        if (this.question.id === 0) {
            // Don't delete, it was never saved.
            this.onSaveComplete();
       } else {
            if (confirm(`Really delete the question: ${this.question.body}?`)) {
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
