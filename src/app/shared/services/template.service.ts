import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

import 'rxjs/add/observable/of';

import { environment } from './../../../environments/environment';
import { ITemplate } from '../classes/template';

@Injectable()
export class TemplateService {
    private baseUrl = `${environment.host}templates/`;

    constructor(private http: Http) { }

    getTemplates(): Observable<ITemplate[]> {
        return this.http.get(this.baseUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getTemplate(id: number): Observable<ITemplate> {
        if (id === 0) {
            return Observable.of(this.initializeTemplate());
        };

        const url = `${this.baseUrl}${id}`;
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    deleteTemplate(id: number): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        const url = `${this.baseUrl}${id}`;
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

        return this.http.post(this.baseUrl, bodyData, options)
            .map(response => {
                template.id = this.extractData(response);
                return template;
            })
            .catch(this.handleError);
    }

    private updateTemplate(template: ITemplate, options: RequestOptions): Observable<ITemplate> {
        const url = `${this.baseUrl}${template.id}`;
        return this.http.put(url, template, options)
            .map(() => template)
            .catch(this.handleError);
    }

    private extractData(response: Response) {
        let body = response.json();
        return body || body.data || {};
    }

    private handleError(error: Response): Observable<any> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    initializeTemplate(): ITemplate {
        // Return an initialized object
        return { id: '', skillIds: [], competencyId: 0, jobfubctionLevel: 0 };
    }
}
