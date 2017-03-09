import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { IExercise } from './exercise';

@Injectable()
export class ExerciseService {
    private baseUrl = 'api/exercises';

    constructor(private http: Http) { }

    getExercises(): Observable<IExercise[]> {
        return this.http.get(this.baseUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getExercise(id: number): Observable<IExercise> {
        if (id === 0) {
        return Observable.of(this.initializeExercise());
        // return Observable.create((observer: any) => {
        //     observer.next(this.initializeQuestion());
        //     observer.complete();
        // });
        };
        const url = `${this.baseUrl}/${id}`;
        return this.http.get(url)
            .map(this.extractData)
            .do(data => console.log('getExercise: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    deleteExercise(id: number): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        const url = `${this.baseUrl}/${id}`;
        return this.http.delete(url, options)
            .do(data => console.log('deleteExercise: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    saveExercise(question: IExercise): Observable<IExercise> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        if (question.id === 0) {
            return this.createExercise(question, options);
        }
        return this.updateExercise(question, options);
    }

    private createExercise(exercise: IExercise, options: RequestOptions): Observable<IExercise> {
        exercise.id = undefined;
        return this.http.post(this.baseUrl, exercise, options)
            .map(this.extractData)
            .do(data => console.log('createExercise: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private updateExercise(exercise: IExercise, options: RequestOptions): Observable<IExercise> {
        const url = `${this.baseUrl}/${exercise.id}`;
        return this.http.put(url, exercise, options)
            .map(() => exercise)
            .do(data => console.log('updateExercise: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private extractData(response: Response) {
        let body = response.json();
        return body.data || {};
    }

    private handleError(error: Response): Observable<any> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    initializeExercise(): IExercise {
        // Return an initialized object
        return {
            id: 0,
            title: '',
            text: ''
        };
    }
}
