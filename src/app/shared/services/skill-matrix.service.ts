import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { SkillMatrix } from './../classes/skill-matrix';

@Injectable()
export class SkillMatrixService {
    private baseUrl = 'api/skillMatrix';

    constructor(private http: Http) { }

    getSkillMatrix(id: number): Observable<SkillMatrix> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getSkillMatrixByLevel(competencyId: number, levelId: number): Observable<SkillMatrix> {
        let base = 'http://localhost:64647/api/skillmatrix';
        const url = `${base}/all?competencyId=${competencyId}&jobFunctionLevel=${levelId}`;

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.get(url, options)
            .map(this.extractData)
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
}
