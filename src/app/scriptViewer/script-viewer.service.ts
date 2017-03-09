import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { ISkillMatrix } from './interfaces/skill-matrix';
import { ISkill } from './interfaces/skill';
import { IQuestion } from './../questions/question';
import { IExercise } from './../exercises/exercise';

@Injectable()

export class ScriptViewerService {
    private interviewScriptUrl = 'api/interviewScriptData';
    private questionsBankUrl = 'api/questionsByTemplateId';
    private exercisesBankUrl = 'api/exercisesByTemplateId';

    constructor(private http: Http) { }

    getScriptViewer(id: number): Observable<ISkillMatrix> {
        const url = `${this.interviewScriptUrl}/${id}`;
        return this.http.get(url)
            .map(this.extractData)
            //.do(data => console.log('getScriptViewer(' + id + '): ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getQuestionsByTemplateId(id: number): Observable<IQuestion[]> {
        const url = this.questionsBankUrl; //`${this.questionsCatalogUrl}/${id}`;
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getExercisesByTemplateId(id: number): Observable<IExercise[]> {
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

    getFinalRating(skills: ISkill[]): number {
        if (skills && skills.length > 0) {
            let sum: number = skills.map(skill => this.getRatingBySkill(skill)).reduce(function(a, b) { return a + b; }, 0);
            let numberOfItems: number = skills.filter(s => s.interviewQuestions.length || s.interviewExercises.filter(e => e.selected).length).length;

            if (sum > 0) {
                return sum / numberOfItems;
            }
        }
        return 0;
    }

    getRatingBySkill(skill: ISkill): number {
        let sum: number = skill.interviewQuestions.map(q => q.rating).reduce(function(a, b) { return a + b; }, 0)
                          + skill.interviewExercises.map(q => q.rating).reduce(function(a, b) { return a + b; }, 0);
        let numberOfItems: number = skill.interviewQuestions.length + skill.interviewExercises.length;

        if (sum > 0) {
            return sum / numberOfItems;
        } else {
            return 0;
        }
    }
}
