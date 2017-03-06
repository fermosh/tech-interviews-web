import { Component, OnInit }  from '@angular/core';
import { IExercise } from './exercise';
import { ExerciseService } from './exercise.service';

declare var jQuery: any;

@Component({
    templateUrl: './exercise-list.component.html',
    styleUrls: ['./exercise-list.component.css']
})
export class ExerciseListComponent implements OnInit {
    title: string = 'Exercise List';
    private isPageRendered: boolean;
    listFilter: string;
    errorMessage: string;

    exercises: IExercise[];

    constructor(private exerciseService: ExerciseService) { }

    ngOnInit(): void {
        this.exerciseService.getExercises()
                .subscribe(exercises => this.exercises = exercises,
                           error => this.errorMessage = <any>error);
    }

    ngAfterViewChecked(): void {
        if (this.exercises && this.exercises.length > 0 && !this.isPageRendered) {
            jQuery('.uui-table.dynamic').dataTable({'dom': 'lf<t>ip'});

            this.isPageRendered = true;
        }
    }
}
