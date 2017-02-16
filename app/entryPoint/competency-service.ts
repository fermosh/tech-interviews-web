import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { ICompetency } from './competency';

@Injectable()
export class CompetencyService {
    private baseUrl = 'api/competency';

    constructor(private http: Http) { }

    getCompetencies(): Observable<ICompetency[]> {
        return this.http.get(this.baseUrl)
            .map(this.extractData)
            .do(data => console.log('getCompetencies: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getCompetency(id: number): Observable<ICompetency> {
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
            .do(data => console.log('getCompetency: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    deleteCompetency(id: number): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        const url = `${this.baseUrl}/${id}`;
        return this.http.delete(url, options)
            .do(data => console.log('deleteCompetency: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    saveCompetency(competency: ICompetency): Observable<ICompetency> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        if (competency.id === 0) {
            return this.createCompetency(competency, options);
        }
        return this.updateCompetency(competency, options);
    }

    private createCompetency(competency: ICompetency, options: RequestOptions): Observable<ICompetency> {
        competency.id = undefined;
        return this.http.post(this.baseUrl, competency, options)
            .map(this.extractData)
            .do(data => console.log('createCompetency: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private updateCompetency(product: ICompetency, options: RequestOptions): Observable<ICompetency> {
        const url = `${this.baseUrl}/${product.id}`;
        return this.http.put(url, product, options)
            .map(() => product)
            .do(data => console.log('updateCompetency: ' + JSON.stringify(data)))
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

    initializeProduct(): ICompetency {
        // Return an initialized object
        return {
            id: 0,
            name: null
        };
    }
}
