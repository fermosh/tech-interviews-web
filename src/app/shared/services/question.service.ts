import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { Question } from './../classes/question';
import { BaseService } from './base.service';

@Injectable()
export class QuestionService extends BaseService{
    private questionUrl = `${this.baseUrl}questions/`;
    private questionsBankUrl = `${this.baseUrl}templates/`;

    getQuestions(): Observable<Question[]> {
        return this.http.get(this.questionUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getQuestionsByTemplateId(id: string): Observable<Question[]> {
        const url = `${this.questionsBankUrl}${id}/questions`;
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getQuestion(id: string): Observable<Question> {
        if (id === '0') {
            return Observable.of(this.initializeQuestion());
        // return Observable.create((observer: any) => {
        //     observer.next(this.initializeQuestion());
        //     observer.complete();
        // });
        };
        
        const url = `${this.questionUrl}${id}`;
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    deleteQuestion(id: string): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        const url = `${this.questionUrl}${id}`;
        return this.http.delete(url, options)
            .catch(this.handleError);
    }

    saveQuestion(question: Question): Observable<Question> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        if (question.id === '') {
            return this.createQuestion(question, options);
        }
        return this.updateQuestion(question, options);
    }

    private createQuestion(question: Question, options: RequestOptions): Observable<Question> {
        question.id = undefined;
        return this.http.post(this.questionUrl, question, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private updateQuestion(question: Question, options: RequestOptions): Observable<Question> {
        return this.http.put(this.questionUrl, question, options)
            .map(() => question)
            .catch(this.handleError);
    }

    initializeQuestion(): Question {
        // Return an initialized object
        return {
            id: '',
            body: '',
            answer: null,
            skill : {
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
