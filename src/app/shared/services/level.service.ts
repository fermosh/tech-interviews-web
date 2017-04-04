import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/of';

import { environment } from './../../../environments/environment';
import { ILevel } from './../classes/level';

@Injectable()
export class LevelService {
    private baseUrl = `${environment.host}/levels/`;

    constructor(private http: Http) { }

    getLevels(): Observable<ILevel[]> {
        return this.http.get(this.baseUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getLevel(id: number): Observable<ILevel> {
        if (id === 0) {
            return Observable.of(this.initializeLevel());
        };
        const url = `${this.baseUrl}${id}`;
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    deleteLevel(id: number): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        const url = `${this.baseUrl}${id}`;
        return this.http.delete(url, options)
            .catch(this.handleError);
    }

    saveLevel(level: ILevel): Observable<ILevel> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        if (level.id === 0) {
            return this.createLevel(level, options);
        }
        return this.updateLevel(level, options);
    }

    private createLevel(level: ILevel, options: RequestOptions): Observable<ILevel> {
        level.id = undefined;
        return this.http.post(this.baseUrl, level, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private updateLevel(level: ILevel, options: RequestOptions): Observable<ILevel> {
        const url = `${this.baseUrl}${level.id}`;
        return this.http.put(url, level, options)
            .map(() => level)
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

    initializeLevel(): ILevel {
        // Return an initialized object
        return {
            id: 0,
            name: null,
            description: null,
            competencyId: 0
        };
    }
}
