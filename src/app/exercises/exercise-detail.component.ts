import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { IExercise } from './exercise';
import { ExerciseService } from './exercise.service';

@Component({
    templateUrl: './exercise-detail.component.html'
})
export class ExerciseDetailComponent implements OnInit, OnDestroy {
    title: string = 'Exercise Detail';
    exercise: IExercise;
    errorMessage: string;
    private sub: Subscription;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private exerciseService: ExerciseService) {
    }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getExercise(id);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getExercise(id: number) {
        this.exerciseService.getExercise(id).subscribe(
            exercise => this.exercise = exercise,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this.router.navigate(['/exercises']);
    }

    onRatingClicked(message: string): void {
        this.title = 'Exercise Detail: ' + message;
    }
}
