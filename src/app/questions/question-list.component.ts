import { Component, OnInit }  from '@angular/core';

import { IQuestion } from './question';
import { QuestionService } from './question.service';

@Component({
    templateUrl: './question-list.component.html',
    styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
    title: 'Question List';
    listFilter: string;
    errorMessage: string;

    questions: IQuestion[];

    constructor(private questionService: QuestionService) {

    }

    ngOnInit(): void {
        this.questionService.getQuestions()
                .subscribe(questions => this.questions = questions,
                           error => this.errorMessage = <any>error);
    }
}
