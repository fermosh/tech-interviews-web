import { Component, OnInit, AfterViewInit, OnDestroy, ViewChildren, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';
import { ActivatedRoute, Router  } from '@angular/router';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Exercise } from './../shared/classes/exercise';
import { ExerciseService } from './../shared/services/exercise.service';
import { NumberValidator } from './../shared/validators/number.validator';
import { GenericValidator } from './../shared//validators/generic.validator';
import { SkillMatrixService } from './../shared/services/skill-matrix.service';
import { CompetencyService } from './../shared/services/competency.service';
import { Tag } from './../shared/classes/tag';
import { SkillMatrix } from './../shared/classes/skill-matrix';
import { ICompetency } from './../shared/classes/competency';

declare var jQuery: any;

@Component({
    templateUrl: './exercise-edit.component.html',
    styleUrls: ['./exercise-edit.component.css']
})
export class ExerciseEditComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

    title: string = 'Exercise Edit';
    tags: Tag[];
    availableTags: Tag[];
    competencies: ICompetency[];
    isPageRendered: boolean;
    errorMessage: string;
    exerciseForm: FormGroup;
    exercise: Exercise;
    private sub: Subscription;

    // Use with the generic validation message class
    displayMessage: { [key: string]: string } = {};
    private validationMessages: { [key: string]: { [key: string]: string } };
    private genericValidator: GenericValidator;

    constructor(private fb: FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
                private exerciseService: ExerciseService,
                private skillMatrixService: SkillMatrixService,
                private competencyService: CompetencyService) {

        // Defines all of the validation messages for the form.
        // These could instead be retrieved from a file or database.
        this.validationMessages = {
            title: {
                required: 'Exercise title is required.',
                minlength: 'Exercise title must be at least ten characters long.',
                maxlength: 'Exercise title cannot exceed 200 characters.'
            },
            body: {
                maxlength: 'Exercise body cannot exceed 200 characters.'
            },
            solution: {
                maxlength: 'Solution cannot exceed 4000 characters.'
            }
        };

        // Define an instance of the validator for use with this form,
        // passing in this form's set of validation messages.
        this.genericValidator = new GenericValidator(this.validationMessages);
    }

    ngOnInit(): void {
        this.exerciseForm = this.fb.group({
            title: ['', [Validators.required,
                        Validators.minLength(10),
                        Validators.maxLength(200)]],
            body: ['', [ Validators.maxLength(400)]],
            solution: ['', [ Validators.maxLength(4000)]],
            competencyId: 0
        });

        // Read the exercise Id from the route parameter
        this.sub = this.route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getExercise(id);
            }
        );

        this.getTags(14);
        this.getCompetencies();
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    fillAutocomplete(tags: Tag[], availableTags: Tag[]): void {
        let addEvent = function(text) {
            tags.push(availableTags.find(t => t.name === text));
        };

        let removeEvent = function(text) {
            tags = tags.filter(t => t.name !== text);
        };

        let control = jQuery('#tagIt');
        control.uui_tagit(
            {
                'autocomplete': {
                    delay: 0,
                    minLength: 2,
                    source: availableTags.map(skill => skill.name)
                },
                afterTagAdded: function(evt, ui) {
                    if (!ui.duringInitialization) {
                        addEvent(control.tagit('tagLabel', ui.tag));
                    }
                },
                afterTagRemoved: function(evt, ui) {
                    if (!ui.duringInitialization) {
                        removeEvent(control.tagit('tagLabel', ui.tag));
                    }
                }
            }
        );
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

    getTags(id: number): void {
        this.skillMatrixService.getSkillMatrix(id)
            .subscribe(
                (skillMatrix: SkillMatrix) => {
                    this.availableTags = skillMatrix.skills;
                    this.fillAutocomplete(this.tags, this.availableTags);
                },
                (error: any) => this.errorMessage = <any>error
            );
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

    getExercise(id: number): void {
        this.exerciseService.getExercise(id)
            .subscribe(
                (exercise: Exercise) => this.onExerciseRetrieved(exercise),
                (error: any) => this.errorMessage = <any>error
            );
    }

    onExerciseRetrieved(exercise: Exercise): void {
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
            title: this.exercise.title,
            body: this.exercise.body,
            solution: this.exercise.solution,
            competencyId: this.exercise.competency.id
        });

        this.tags = this.exercise.tags;
    }

    deleteExercise(): void {
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
        this.router.navigate(['/exercises']);
    }
}
