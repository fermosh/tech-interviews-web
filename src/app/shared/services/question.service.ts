import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { environment } from './../../../environments/environment';
import { Question } from './../classes/question';

@Injectable()
export class QuestionService {
private baseUrl = `${environment.host}`;
    constructor(private http: Http) { }

    getQuestions(): Observable<Question[]> {
        return this.http.get(`${this.baseUrl}/questions`)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getQuestionsByTemplateId(id: number): Observable<Question[]> {
        const url = `${this.baseUrl}$template/${id}/questions`;
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getQuestion(id: number): Observable<Question> {
        if (id === 0) {
            return Observable.of(this.initializeQuestion());
        // return Observable.create((observer: any) => {
        //     observer.next(this.initializeQuestion());
        //     observer.complete();
        // });
        };
        const url = `${this.baseUrl}/questions/${id}`;
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    deleteQuestion(id: number): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        const url = `${this.baseUrl}/questions/${id}`;
        return this.http.delete(url, options)
            .catch(this.handleError);
    }

    saveQuestion(question: Question): Observable<Question> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        if (question.id === 0) {
            return this.createQuestion(question, options);
        }
        return this.updateQuestion(question, options);
    }

    private createQuestion(question: Question, options: RequestOptions): Observable<Question> {
        question.id = undefined;
        return this.http.post(`${this.baseUrl}/questions`, question, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private updateQuestion(question: Question, options: RequestOptions): Observable<Question> {
        const url = `${this.baseUrl}/exercises/${question.id}`;
        return this.http.put(url, question, options)
            .map(() => question)
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

    initializeQuestion(): Question {
        // Return an initialized object
        return {
            id: 0,
            body: '',
            answer: null,
            tag : {
                id: 0,
                name: ''
            },
            competency: {
                id: 0,
                name: ''
            }
        };
    }
}
