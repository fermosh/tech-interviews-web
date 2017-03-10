import { Component, OnInit, AfterViewInit, OnDestroy, ViewChildren, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';
import { ActivatedRoute, Router  } from '@angular/router';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { IExercise } from './exercise';
import { ExerciseService } from './exercise.service';
import { NumberValidator } from '../shared/number.validator';
import { GenericValidator } from '../shared/generic.validator';
import { SkillMatrixService } from './../entryPoint/skill-matrix.service';

declare var jQuery: any;

@Component({
    templateUrl: './exercise-edit.component.html',
    styleUrls: ['./exercise-edit.component.css']
})
export class ExerciseEditComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

    title: string = 'Exercise Edit';
    isPageRendered: boolean;
    errorMessage: string;
    exerciseForm: FormGroup;
    exercise: IExercise;
    private sub: Subscription;

    // Use with the generic validation message class
    displayMessage: { [key: string]: string } = {};
    private validationMessages: { [key: string]: { [key: string]: string } };
    private genericValidator: GenericValidator;

    constructor(private fb: FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
                private exerciseService: ExerciseService,
                private skillMatrixService: SkillMatrixService) {

        // Defines all of the validation messages for the form.
        // These could instead be retrieved from a file or database.
        this.validationMessages = {
            exerciseTitle: {
                required: 'Exercise title is required.',
                minlength: 'Exercise title must be at least five characters.',
                maxlength: 'Exercise title cannot exceed 2000 characters.'
            },
            exerciseBody: {
                required: 'Exercise body is required.',
                minlength: 'Exercise body must be at least twenty characters.',
                maxlength: 'Exercise body cannot exceed 200 characters.'
            },
            exerciseTags: {
                required: 'Exercise tag is required',
                minlength: 'You can select at least 1 Exercise tag',
                maxlength: 'You can select at most 1 Exercise tag',
            }
        };

        // Define an instance of the validator for use with this form,
        // passing in this form's set of validation messages.
        this.genericValidator = new GenericValidator(this.validationMessages);
    }

    ngOnInit(): void {
        this.exerciseForm = this.fb.group({
            exerciseTitle: ['', [Validators.required,
                               Validators.minLength(5),
                               Validators.maxLength(200)]],
            exerciseBody: ['', [Validators.required,
                               Validators.minLength(20),
                               Validators.maxLength(2000)]],
            exerciseAnswer: '',
            exerciseTags: ['', [Validators.required,
                               Validators.minLength(1),
                               Validators.maxLength(1)]],
        });

        // Read the exercise Id from the route parameter
        this.sub = this.route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getExercise(id);
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
        if (this.exercise && !this.isPageRendered) {

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
        Observable.merge(this.exerciseForm.valueChanges, ...controlBlurs).debounceTime(800).subscribe(value => {
            this.displayMessage = this.genericValidator.processMessages(this.exerciseForm);
        });
    }

    getExercise(id: number): void {
        this.exerciseService.getExercise(id)
            .subscribe(
                (exercise: IExercise) => this.onExerciseRetrieved(exercise),
                (error: any) => this.errorMessage = <any>error
            );
    }

    onExerciseRetrieved(exercise: IExercise): void {
        if (this.exerciseForm) {
            this.exerciseForm.reset();
        }
        this.exercise = exercise;

        if (this.exercise.id === 0) {
            this.title = 'Add Exercise';
        } else {
            this.title = `Edit Exercise: ${this.exercise.title}`;
        }

        // Update the data on the form
        this.exerciseForm.patchValue({
            exerciseTitle: this.exercise.title,
            exerciseBody: this.exercise.text,
            exerciseAnswer: this.exercise.solution,
        });
        this.exerciseForm.setControl('exerciseTags', this.fb.array(['Java', 'JavaScript']));
    }

    deleteQuestion(): void {
        if (this.exercise.id === 0) {
            // Don't delete, it was never saved.
            this.onSaveComplete();
       } else {
            if (confirm(`Really delete the exercise: ${this.exercise.title}?`)) {
                this.exerciseService.deleteExercise(this.exercise.id)
                    .subscribe(
                        () => this.onSaveComplete(),
                        (error: any) => this.errorMessage = <any>error
                    );
            }
        }
    }

    saveExercise(): void {
        if (this.exerciseForm.dirty && this.exerciseForm.valid) {
            // Copy the form values over the exercise object values
            let q = Object.assign({}, this.exercise, this.exerciseForm.value);

            this.exerciseService.saveExercise(q)
                .subscribe(
                    () => this.onSaveComplete(),
                    (error: any) => this.errorMessage = <any>error
                );
        } else if (!this.exerciseForm.dirty) {
            this.onSaveComplete();
        }
    }

    onSaveComplete(): void {
        // Reset the form to clear the flags
        this.exerciseForm.reset();
        this.router.navigate(['/exercise-list']);
    }
}
