import { Component, OnInit }  from '@angular/core';
import { Exercise } from './../shared/classes/exercise';
import { ExerciseService } from './../shared/services/exercise.service';

declare var $: any;

@Component({
    templateUrl: './exercise-list.component.html',
    styleUrls: ['./exercise-list.component.css']
})
export class ExerciseListComponent implements OnInit {
    title: string = 'Exercise List';
    private isPageRendered: boolean;
    listFilter: string;
    errorMessage: string;
    exercises: Exercise[];

    constructor(private exerciseService: ExerciseService) { }

    ngOnInit(): void {
        this.exerciseService.getExercises()
                .subscribe(exercises => this.exercises = exercises,
                           error => this.errorMessage = <any>error);
    }

    ngAfterViewChecked(): void {
        if (this.exercises && this.exercises.length > 0 && !this.isPageRendered) {
            $('.uui-table.dynamic').dataTable({'dom': 'lf<t>ip'});

            this.isPageRendered = true;
        }
    }
}
