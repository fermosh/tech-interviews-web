import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import { environment } from './../../../environments/environment';

@Injectable()
export class BaseService {
    public baseUrl = environment.host;
    public http: Http;

    constructor(http: Http) {
        this.http = http;
     }

    public extractData(response: Response) {
        let body = response.json();
        return body || body.data || body || {};
    }

    public handleError(error: Response): Observable<any> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
