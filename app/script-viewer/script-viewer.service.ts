import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Rx'

import { ScriptViewer } from './BO/script-viewer'

@Injectable()

export class ScriptViewerService {
    private _scriptVieweUrl = 'app/script-viewer/technical-interview.json';

    constructor(private _http: Http) { }

    getScriptViewer(): Observable<ScriptViewer> {
        return this._http.get(this._scriptVieweUrl)
        //.map((response: Response) => <ScriptViewer> response.json())
        //.do(data => console.log('All: ' + JSON.stringify(data)))
        .map((response: Response) => {
            let jsonObject = response.json();
            let scriptViewer = new ScriptViewer(jsonObject.competencyId
                                                ,jsonObject.competencyName
                                                ,jsonObject.domain
                                                ,jsonObject.levelName
                                                ,jsonObject.levelDescription
                                                ,jsonObject.skills
                                                ,jsonObject.exercises);
            //console.log(scriptViewer);
            return scriptViewer;
        })
        .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}