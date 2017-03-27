import { Response, ResponseOptions } from '@angular/http';

import { ExerciseService } from '../../../../src/app/shared/services/exercise.service';
import { Exercise } from '../../../../src/app/shared/classes/exercise';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export class MockExerciseService extends ExerciseService {

    // array to mock http requests
    private exercises: Exercise[] = [
            {
                id: 1,
                title: 'Palindrome',
                body: `A palindrome is a word, phrase, number, or other
                    sequence of characters which reads the same backward or forward,
                    such as madam or kayak. Write an function that receives an string
                    parameters and return true if it is a palindrome.`,
                solution: '',
                tag: { id: 973, name: 'Development' },
                competency: { id: 1, name: '.Net' }
            },
            {
                id: 2,
                title: 'Balanced Brakets',
                body: `Type of Brackets: () Round brackets or parentheses, {}
                    Curly brackets or braces, [] Square brackets. Implement an algorithm
                    to resolve the balanced brackets problems, ie. \'{([])}\' is balanced.`,
                solution: '',
                tag: { id: 973, name: 'Development' },
                competency: { id: 1, name: '.Net' }
            }
        ];

    constructor() {
        super(null);
    }

    getExercises(): Observable<Exercise[]> {
        return Observable.of(this.exercises);
    }

    getExercisesByTemplateId(id: number): Observable<Exercise[]> {
        return Observable.of(this.exercises);
    }

    getExercise(id: number): Observable<Exercise> {
        return Observable.of(this.exercises[0]);
    }

    deleteExercise(id: number): Observable<Response> {
        let response = new Response(new ResponseOptions({ body: null, status: 204, type: null, statusText: 'No Content' }));
        return Observable.of(response);
    }

    saveExercise(question: Exercise): Observable<Exercise> {
        if (question.id === 0) {
            question.id = 1;
        }

        return Observable.of(question);
    }
}
