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

    saveTemplate(template: ITemplate): Observable<ITemplate> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        if (template.id === '') {
            return this.createTemplate(template, options);
        }
        return this.updateTemplate(template, options);
    }

    private createTemplate(template: ITemplate, options: RequestOptions): Observable<ITemplate> {
        template.id = undefined;

        let bodyData = JSON.stringify({
            CompetencyId: template.competencyId,
            JobFunctionLevel: template.jobfubctionLevel,
            Skills: template.skillIds
        });

        return this.http.post(this.templateUrl, bodyData, options)
            .map(response => {
                template.id = this.extractData(response);
                return template;
            })
            .catch(this.handleError);
    }

    private updateTemplate(template: ITemplate, options: RequestOptions): Observable<ITemplate> {
        const url = `${this.templateUrl}${template.id}`;
        return this.http.put(url, template, options)
            .map(() => template)
            .catch(this.handleError);
    }

    initializeTemplate(): ITemplate {
        // Return an initialized object
        return { id: '', skillIds: [], competencyId: 0, jobfubctionLevel: 0 };
    }
}
