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

@Component({
    templateUrl: './Exercise-edit.component.html'
})
export class ExerciseEditComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

    pageTitle: string = 'Exercise Edit';
    errorMessage: string;
    exerciseForm: FormGroup;
    exercise: IExercise;
    private sub: Subscription;

    // Use with the generic validation message class
    displayMessage: { [key: string]: string } = {};
    private validationMessages: { [key: string]: { [key: string]: string } };
    private genericValidator: GenericValidator;

    get tags(): FormArray {
        return <FormArray>this.exerciseForm.get('tags');
    }

    constructor(private fb: FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
                private exerciseService: ExerciseService) {

        // Defines all of the validation messages for the form.
        // These could instead be retrieved from a file or database.
        this.validationMessages = {
            productName: {
                required: 'Exercise title is required.',
                minlength: 'Exercise title be at least twenty characters.',
                maxlength: 'Exercise title cannot exceed 256 characters.'
            }
        };

        // Define an instance of the validator for use with this form, 
        // passing in this form's set of validation messages.
        this.genericValidator = new GenericValidator(this.validationMessages);
    }

    ngOnInit(): void {
        this.exerciseForm = this.fb.group({
            ExerciseText: ['', [Validators.required,
                               Validators.minLength(3),
                               Validators.maxLength(50)]],
            tags: this.fb.array([]),
            ExerciseAnswer: ''
        });

        // Read the Exercise Id from the route parameter
        this.sub = this.route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getExercise(id);
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
        Observable.merge(this.exerciseForm.valueChanges, ...controlBlurs).debounceTime(800).subscribe(value => {
            this.displayMessage = this.genericValidator.processMessages(this.exerciseForm);
        });
    }

    addTag(): void {
        this.tags.push(new FormControl());
    }

    getExercise(id: number): void {
        this.exerciseService.getExercise(id)
            .subscribe(
                (Exercise: IExercise) => this.onExerciseRetrieved(Exercise),
                (error: any) => this.errorMessage = <any>error
            );
    }

    onExerciseRetrieved(exercise: IExercise): void {
        if (this.exerciseForm) {
            this.exerciseForm.reset();
        }
        this.exercise = exercise;

        if (this.exercise.id === 0) {
            this.pageTitle = 'Add Exercise';
        } else {
            this.pageTitle = `Edit Exercise: ${this.exercise.title}`;
        }

        // Update the data on the form
        this.exerciseForm.patchValue({
            ExerciseTitle: this.exercise.title,
            ExerciseText: this.exercise.text,
            ExerciseAnswer: this.exercise.solution,
        });
        this.exerciseForm.setControl('tags', this.fb.array(this.exercise.tags || []));
    }

    deleteExercise(): void {
        if (this.exercise.id === 0) {
            // Don't delete, it was never saved.
            this.onSaveComplete();
       } else {
            if (confirm(`Really delete the exercise: ${this.exercise.text}?`)) {
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
            // Copy the form values over the Exercise object values
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
        this.router.navigate(['/exercises']);
    }
}
