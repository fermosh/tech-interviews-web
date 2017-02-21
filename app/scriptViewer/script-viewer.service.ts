import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { ISkillMatrix } from './interfaces/skill-matrix'

@Injectable()

export class ScriptViewerService {
    private _scriptViewerUrl = 'api/interviewScriptDataTemp';

    constructor(private _http: Http) { }

    getScriptViewer(): Observable<ISkillMatrix> {
        return this._http.get(this._scriptViewerUrl)
            //.map((response: Response) => <ScriptViewer> response.json())
            //.do(data => console.log('All: ' + JSON.stringify(data)))
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(response: Response) {
        let jsonObject = response.json().data[0];
        return jsonObject || {};
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
