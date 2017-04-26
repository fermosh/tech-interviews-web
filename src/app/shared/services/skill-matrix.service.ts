import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { SkillMatrix } from './../classes/skill-matrix';
import { BaseService } from './base.service';

@Injectable()
export class SkillMatrixService extends BaseService {
    private skillMatrixUrl = `${this.baseUrl}skillMatrix/`;

    getSkillMatrix(competencyId: number, levelId: number): Observable<SkillMatrix> {
        const url = `${this.skillMatrixUrl}${competencyId}/${levelId}`;
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getSkillMatrixByLevel(competencyId: number, levelId: number): Observable<SkillMatrix> {
        const url = `${this.skillMatrixUrl}${competencyId}/${levelId}`;

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.get(url, options)
            .map(this.extractData)
            .catch(this.handleError);
    }
}
