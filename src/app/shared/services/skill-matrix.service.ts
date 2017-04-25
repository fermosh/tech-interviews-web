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
    private options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) });


    // This method get the skill matrix of the given CompetencyId for the specific level number
    getSkillMatrix(competencyId: number, levelId: number): Observable<SkillMatrix> {
        const url = `${this.skillMatrixUrl}${competencyId}/${levelId}`;

        return this.http.get(url, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    // This method get the skill matrix of the given CompetencyId and its competencies children
    // for the specific level number
    getSkillMatrixByParent(competencyId: number, levelId: number): Observable<SkillMatrix> {
        const url = `${this.skillMatrixUrl}parent/${competencyId}/${levelId}`;
        
        return this.http.get(url, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }
}
