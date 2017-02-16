import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { ICompetency } from './competency';
import { IDomain } from './domain';
import { ILevel } from './level';

@Injectable()
export class EntryPointService
{
    constructor(private http: Http) {}

    getCompetencies(): Observable<ICompetency[]> {
        return this.http.get('app/entryPoint/competency.json')
            .map((response: Response) => <ICompetency[]> response.json())
            .catch(this.handleError);
    }

    getLevels(): Observable<ILevel[]> {
        return this.http.get('app/entryPoint/level.json')
            .map((response: Response) => <ILevel[]> response.json())
            .catch(this.handleError);
    }

    getDomains(): Observable<IDomain[]> {
        return this.http.get('app/entryPoint/domain.json')
            .map((response: Response) => <IDomain[]> response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response): Observable<any> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}