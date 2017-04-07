import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { environment } from './../../../environments/environment';
import { Exercise } from './../classes/exercise';

@Injectable()
export class ExerciseService {
    private baseUrl = `${environment.host}exercises/`;
    private exercisesBankUrl = `${environment.host}templates/`;

    constructor(private http: Http) { }

    getExercises(): Observable<Exercise[]> {
        return this.http.get(this.baseUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getExercisesByTemplateId(id: string): Observable<Exercise[]> {
        const url = `${this.exercisesBankUrl}${id}/exercises`;
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getExercise(id: string): Observable<Exercise> {
        if (id === '') {
            return Observable.of(this.initializeExercise());
        // return Observable.create((observer: any) => {
        //     observer.next(this.initializeQuestion());
        //     observer.complete();
        // });
        };
        const url = `${this.baseUrl}${id}`;
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    deleteExercise(id: string): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        const url = `${this.baseUrl}${id}`;
        return this.http.delete(url, options)
            .catch(this.handleError);
    }

    saveExercise(exercise: Exercise): Observable<Exercise> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        if (exercise.id === '') {
            return this.createExercise(exercise, options);
        }
        return this.updateExercise(exercise, options);
    }

    private createExercise(exercise: Exercise, options: RequestOptions): Observable<Exercise> {
        exercise.id = undefined;
        return this.http.post(this.baseUrl, exercise, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private updateExercise(exercise: Exercise, options: RequestOptions): Observable<Exercise> {
        const url = `${this.baseUrl}${exercise.id}`;
        return this.http.put(url, exercise, options)
            .map(() => exercise)
            .catch(this.handleError);
    }

    private extractData(response: Response) {
        let body = response.json();
        return body || body.data || {};
    }

    private handleError(error: Response): Observable<any> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    initializeExercise(): Exercise {
        // Return an initialized object
        return {
            id: '',
            title: '',
            body: '',
            tags: [],
            competency: {
                id: 0,
                name: ''
            }
        };
    }
}
