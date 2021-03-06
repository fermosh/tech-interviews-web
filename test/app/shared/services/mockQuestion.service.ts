import { Response, ResponseOptions } from '@angular/http';

import { QuestionService } from '../../../../src/app/shared/services/question.service';
import { Question } from '../../../../src/app/shared/classes/question';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export class MockQuestionService extends QuestionService {

    // array to mock http requests
    private questions: Question[] = [
            {
                id: '1',
                body: `What's the purpose of standards/conventions in .NET C#?`,
                answer: ``,
                skill: { id: 973, name: 'Development' }
            },
            {
                id: '2',
                body: 'When to use string and when StringBuilder?',
                answer: ``,
                skill: { id: 973, name: 'Development' }
            },
            {
                id: '3',
                body: 'When to use var and when the exact data type?',
                answer: ``,
                skill: { id: 973, name: 'Development' }
            }];

    constructor() {
        super(null);
    }

    getQuestions(): Observable<Question[]> {
        return Observable.of(this.questions);
    }

    getQuestionsByTemplateId(id: string): Observable<Question[]> {
        return Observable.of(this.questions);
    }

    getQuestion(id: string): Observable<Question> {
        return Observable.of(this.questions[0]);
    }

    deleteQuestion(id: string): Observable<Response> {
        let response = new Response(new ResponseOptions({ body: null, status: 204, type: null, statusText: 'No Content' }));
        return Observable.of(response);
    }

    saveQuestion(question: Question): Observable<Question> {
        if (question.id === '0') {
            question.id = '1';
        }

        return Observable.of(question);
    }
}
