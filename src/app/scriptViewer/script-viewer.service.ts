import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { IInterviewScript } from './interfaces/interview-script';
import { Skill } from './../shared/classes/skill';
import { Question } from './../shared/classes/question';
import { Exercise } from './../shared/classes/exercise';

@Injectable()

export class ScriptViewerService {
    private interviewScriptUrl = 'api/interviewScriptData';
    private questionsBankUrl = 'api/questionsByTemplateId';
    private exercisesBankUrl = 'api/exercisesByTemplateId';

    constructor(private http: Http) { }

    getScriptViewer(id: number): Observable<IInterviewScript> {
        const url = `${this.interviewScriptUrl}/${id}`;
        return this.http.get(url)
            .map(this.extractData)
            //.do(data => console.log('getScriptViewer(' + id + '): ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getQuestionsByTemplateId(id: number): Observable<Question[]> {
        const url = this.questionsBankUrl; //`${this.questionsCatalogUrl}/${id}`;
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getExercisesByTemplateId(id: number): Observable<Exercise[]> {
        const url = this.exercisesBankUrl; //`${this.questionsCatalogUrl}/${id}`;
        return this.http.get(url)
            .map(this.extractData)
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

    getFinalRating(interviewScript: IInterviewScript): number {
        let sum: number = 0;
        let numberOfItems: number = 0;

        if (interviewScript.skills && interviewScript.skills.length > 0) {
            sum = interviewScript.skills.map(skill => this.getRatingBySkill(skill)).reduce(function (a, b) { return a + b; }, 0);
            numberOfItems = interviewScript.skills.filter(s => s.interviewQuestions.length).length;
        }
        if (interviewScript.interviewExercises && interviewScript.interviewExercises.length > 0) {
            sum = interviewScript.interviewExercises.map(ie => ie.rating).reduce(function (a, b) { return a + b; }, 0);
            numberOfItems = interviewScript.interviewExercises.length;
        }

        if (sum > 0) {
            return sum / numberOfItems;
        } else {
            return 0;
        }
    }

    getRatingBySkill(skill: Skill): number {
        let sum: number = skill.interviewQuestions.map(q => q.rating).reduce(function (a, b) { return a + b; }, 0);
        let numberOfItems: number = skill.interviewQuestions.length;

        if (sum > 0) {
            return sum / numberOfItems;
        } else {
            return 0;
        }
    }
}
