import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { ICompetency } from '../classes/competency';
import { BaseService } from './base.service';

@Injectable()
export class CompetencyService extends BaseService {
    private competencyUrl = `${this.baseUrl}competencies/`;

    getCompetencies(): Observable<ICompetency[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.get(this.competencyUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getCompetency(id: number): Observable<ICompetency> {
        if (id === 0) {
            return Observable.of(this.initializeCompetency());
            // return Observable.create((observer: any) => {
            //     observer.next(this.initializeCompetency());
            //     observer.complete();
            // });
        };
        const url = `${this.competencyUrl}${id}`;
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    deleteCompetency(id: number): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        const url = `${this.competencyUrl}${id}`;
        return this.http.delete(url, options)
            .catch(this.handleError);
    }

    saveCompetency(competency: ICompetency): Observable<ICompetency> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        if (competency.id === 0) {
            return this.createCompetency(competency, options);
        }
        return this.updateCompetency(competency, options);
    }

    private createCompetency(competency: ICompetency, options: RequestOptions): Observable<ICompetency> {
        competency.id = undefined;
        return this.http.post(this.competencyUrl, competency, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private updateCompetency(competency: ICompetency, options: RequestOptions): Observable<ICompetency> {
        const url = `${this.competencyUrl}${competency.id}`;
        return this.http.put(url, competency, options)
            .map(() => competency)
            .catch(this.handleError);
    }

    initializeCompetency(): ICompetency {
        // Return an initialized object
        return {
            code: '',
            jobFunctions: [0],
            id: 0,
            name: '',
            isSelectable: false
        };
    }
}
