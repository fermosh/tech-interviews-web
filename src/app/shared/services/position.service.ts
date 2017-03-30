import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { Position } from '../../entryPoint/classes/position';
import { ICompetency } from '../../entryPoint/classes/competency';

@Injectable()
export class PositionService {
    private baseUrl = 'http://localhost:64647/api/competency';

    constructor(private http: Http) { }

    getPosition(): Observable<Position> {
        return this.http.get(this.baseUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getCompetencies(): Observable<ICompetency[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.get(`${this.baseUrl}/all`)
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

    private initializeProduct(): Position {
        // Return an initialized object
        return { jobFunctions: [], competencies: [] };
    }
}
