import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Question } from './../shared/classes/question';
import { QuestionService } from './../shared/services/question.service';

@Component({
    templateUrl: './question-detail.component.html'
})
export class QuestionDetailComponent implements OnInit, OnDestroy {
    title: string = 'Question Detail';
    question: Question;
    errorMessage: string;
    private sub: Subscription;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private questionService: QuestionService) {
    }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getQuestion(id);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getQuestion(id: number) {
        this.questionService.getQuestion(id).subscribe(
            question => this.question = question,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this.router.navigate(['/questions']);
    }

    onRatingClicked(message: string): void {
        this.title = 'Question Detail: ' + message;
    }
}
