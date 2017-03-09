import { Component, OnInit }  from '@angular/core';
import { IQuestion } from './question';
import { QuestionService } from './question.service';

declare var jQuery: any;

@Component({
    templateUrl: './question-list.component.html',
    styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
    title: string = 'Question List';
    isPageRendered: boolean;
    listFilter: string;
    errorMessage: string;
    questions: IQuestion[];

    constructor(private questionService: QuestionService) { }

    ngOnInit(): void {
        this.questionService.getQuestions()
                .subscribe(questions => this.questions = questions,
                           error => this.errorMessage = <any>error);
    }

    ngAfterViewChecked(): void {
        if (this.questions && this.questions.length > 0 && !this.isPageRendered) {
            jQuery('.uui-table.dynamic').dataTable({'dom': 'lf<t>ip'});

            this.isPageRendered = true;
        }
    }
}
