import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

import 'rxjs/add/observable/of';

import { ITemplate } from '../classes/template';
import { BaseService } from './base.service';
import { ErrorResult } from './../classes/errorResult';

@Injectable()
export class TemplateService extends BaseService {
    private templateUrl = `${this.baseUrl}templates/`;

    getTemplates(): Observable<ITemplate[]> {
        return this.http.get(this.templateUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getTemplate(id: string): Observable<ITemplate> {
        if (id === '') {
            return Observable.of(this.initializeTemplate());
        };

        const url = `${this.templateUrl}${id}`;
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    deleteTemplate(id: string): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        const url = `${this.templateUrl}${id}`;
        return this.http.delete(url, options)
            .catch(this.handleError);
    }

    saveTemplate(template: ITemplate, errorResult: ErrorResult): Observable<ITemplate> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        if (template.id === '') {
            return this.createTemplate(template, options);
        }
        return this.updateTemplate(template, errorResult, options);
    }

    private createTemplate(template: ITemplate, options: RequestOptions): Observable<ITemplate> {
        template.id = undefined;

        let bodyData = JSON.stringify({
            Name: template.name,
            CompetencyId: template.competencyId,
            JobFunctionLevel: template.jobFunctionLevel,
            Skills: template.skills,
            Exercises: template.exercises
        });

        return this.http.post(this.templateUrl, bodyData, options)
            .map(response => {
                template.id = this.extractData(response);
                return template;
            })
            .catch(this.handleError);
    }

    private updateTemplate(template: ITemplate, errorResult: ErrorResult, options: RequestOptions): Observable<ITemplate> {
        const url = `${this.templateUrl}`;
        return this.http.put(url, template, options)
            .map(response => {
                let _response: any = this.extractData(response);
                if (_response.errorDescription != null) {
                    errorResult.entity = _response.entity;
                    errorResult.errorDescription = _response.errorDescription;
                }
                return template;
            })
            .catch(this.handleError);
    }

    initializeTemplate(): ITemplate {
        // Return an initialized object
        return { id: '', name: '', skills: [], competencyId: 0, jobFunctionLevel: 0, exercises: [] };
    }
}
