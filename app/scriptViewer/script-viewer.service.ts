import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { ISkillMatrix } from './interfaces/skill-matrix'

@Injectable()

export class ScriptViewerService {
    private baseUrl = 'api/interviewScriptData';

    constructor(private http: Http) { }

    getScriptViewer(id: number): Observable<ISkillMatrix> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.get(url)
            .map(this.extractData)
            //.do(data => console.log('getScriptViewer(' + id + '): ' + JSON.stringify(data)))
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
}
