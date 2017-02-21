import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { ScriptViewer } from './classes/script-viewer';

@Injectable()

export class ScriptViewerService {
    private _scriptViewerUrl = 'api/interviewScriptDataTemp';

    constructor(private _http: Http) { }

    getScriptViewer(): Observable<ScriptViewer> {
        return this._http.get(this._scriptViewerUrl)
            //.map((response: Response) => <ScriptViewer> response.json())
            //.do(data => console.log('All: ' + JSON.stringify(data)))
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(response: Response) {
        let jsonObject = response.json().data[0];

        let scriptViewer = new ScriptViewer(jsonObject.competencyId
            , jsonObject.competencyName
            , jsonObject.domain
            , jsonObject.level.name
            , jsonObject.level.description
            , jsonObject.skills);

        //console.log(jsonObject);
        //console.log(scriptViewer);
        return scriptViewer || {};
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
