import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { InterviewScript } from './classes/interview-script';
import { Skill } from './../shared/classes/skill';

@Injectable()

export class ScriptViewerService {
    private interviewScriptUrl = 'http://localhost:64647/api';

    constructor(private http: Http) { }

    getScriptViewer(id: string): Observable<InterviewScript> {
        const url = `${this.interviewScriptUrl}/templates/${id}`;
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(response: Response) {
        let body = response.json();
        return body || body.data || {};
    }

    private handleError(error: Response): Observable<any> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        return Observable.throw(error || error.json().error || 'Server error');
    }

    getFinalRating(interviewScript: InterviewScript): number {
        let sum: number = 0;
        let numberOfItems: number = 0;

        if (interviewScript.skills && interviewScript.skills.length > 0) {
            sum += this.getSkillsRating(interviewScript);
            numberOfItems++;
        }
        if (interviewScript.interviewExercises && interviewScript.interviewExercises.length > 0) {
            sum += this.getExercisesRating(interviewScript);
            numberOfItems++;
        }

        if (sum > 0) {
            return sum / numberOfItems;
        } else {
            return 0;
        }
    }

    getSkillsRating(interviewScript: InterviewScript): number {
        let sum: number = 0;
        let numberOfItems: number = 0;

        if (interviewScript.skills && interviewScript.skills.length > 0) {
            sum = interviewScript.skills.map(skill => this.getRatingBySkill(skill)).reduce(function (a, b) { return a + b; }, 0);
            numberOfItems = interviewScript.skills.filter(s => s.interviewQuestions.length).length;
        }

        if (sum > 0) {
            return sum / numberOfItems;
        } else {
            return 0;
        }
    }

    getExercisesRating(interviewScript: InterviewScript): number {
        let sum: number = 0;
        let numberOfItems: number = 0;

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
