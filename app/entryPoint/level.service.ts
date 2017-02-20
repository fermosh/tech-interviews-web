import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { ILevel } from './level';

@Injectable()
export class LevelService {
    private baseUrl = 'api/level';

    constructor(private http: Http) { }

    getLevels(): Observable<ILevel[]> {
        return this.http.get(this.baseUrl)
            .map(this.extractData)
            .do(data => console.log('getLevels: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getLevel(id: number): Observable<ILevel> {
        if (id === 0) {
        return Observable.of(this.initializeProduct());
        // return Observable.create((observer: any) => {
        //     observer.next(this.initializeProduct());
        //     observer.complete();
        // });
        };
        const url = `${this.baseUrl}/${id}`;
        return this.http.get(url)
            .map(this.extractData)
            .do(data => console.log('getLevel: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    deleteLevel(id: number): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        const url = `${this.baseUrl}/${id}`;
        return this.http.delete(url, options)
            .do(data => console.log('deleteLevel: ' + JSON.stringify(data)))
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
            .do(data => console.log('createLevel: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private updateLevel(product: ILevel, options: RequestOptions): Observable<ILevel> {
        const url = `${this.baseUrl}/${product.id}`;
        return this.http.put(url, product, options)
            .map(() => product)
            .do(data => console.log('updateLevel: ' + JSON.stringify(data)))
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

    initializeProduct(): ILevel {
        // Return an initialized object
        return {
            id: 0,
            name: null,
            description: null,
            competencyId: 0
        };
    }
}