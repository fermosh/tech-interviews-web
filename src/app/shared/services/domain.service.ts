import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { environment } from './../../../environments/environment';
import { IDomain } from './../classes/domain';

@Injectable()
export class DomainService {
    private baseUrl = `${environment.host}/domains/`;

    constructor(private http: Http) { }

    getDomains(): Observable<IDomain[]> {
        return this.http.get(this.baseUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getDomain(id: number): Observable<IDomain> {
        if (id === 0) {
            return Observable.of(this.initializeProduct());
        };
        const url = `${this.baseUrl}${id}`;
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    deleteDomain(id: number): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        const url = `${this.baseUrl}${id}`;
        return this.http.delete(url, options)
            .catch(this.handleError);
    }

    saveDomain(Domain: IDomain): Observable<IDomain> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        if (Domain.id === 0) {
            return this.createDomain(Domain, options);
        }
        return this.updateDomain(Domain, options);
    }

    private createDomain(domain: IDomain, options: RequestOptions): Observable<IDomain> {
        domain.id = undefined;
        return this.http.post(this.baseUrl, domain, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private updateDomain(domain: IDomain, options: RequestOptions): Observable<IDomain> {
        const url = `${this.baseUrl}${domain.id}`;
        return this.http.put(url, domain, options)
            .map(() => domain)
            .catch(this.handleError);
    }

    private extractData(response: Response) {
        let body = response.json();
        return body.data || {};
    }

    private handleError(error: Response): Observable<any> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    initializeProduct(): IDomain {
        // Return an initialized object
        return {
            id: 0,
            name: null,
            competencyId: 0,
            levelId: 0,
            skillMatrixId: 0
        };
    }
}
