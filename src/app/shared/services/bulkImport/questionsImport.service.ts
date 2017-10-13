import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { BaseService } from './../base.service';

@Injectable()
export class QuestionsImportService extends BaseService{
    private questionsImportUrl = `${this.baseUrl}bulkImport/questions`;

    
    public importQuestions(questions: JSON): Observable<JSON> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        return this.http.post(this.questionsImportUrl, questions, options)
            .map(this.extractData)
            .catch(this.handleError);
    }
}