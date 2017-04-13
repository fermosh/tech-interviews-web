import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { Exercise } from './../classes/exercise';
import { BaseService } from './base.service';

@Injectable()
export class ExerciseService extends BaseService {
    private exerciseUrl = `${this.baseUrl}exercises/`;
    private exercisesBankUrl = `${this.baseUrl}templates/`;

    getExercises(): Observable<Exercise[]> {
        return this.http.get(this.exerciseUrl)
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
        if (id === '0') {
            return Observable.of(this.initializeExercise());
        // return Observable.create((observer: any) => {
        //     observer.next(this.initializeQuestion());
        //     observer.complete();
        // });
        };
        
        const url = `${this.exerciseUrl}${id}`;
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    deleteExercise(id: string): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        const url = `${this.exerciseUrl}${id}`;
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
        return this.http.post(this.exerciseUrl, exercise, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private updateExercise(exercise: Exercise, options: RequestOptions): Observable<Exercise> {
        return this.http.put(this.exerciseUrl, exercise, options)
            .map(() => exercise)
            .catch(this.handleError);
    }

    initializeExercise(): Exercise {
        // Return an initialized object
        return {
            id: '',
            title: '',
            body: '',
            competency: {
                id: 0,
                name: ''
            }
        };
    }
}
