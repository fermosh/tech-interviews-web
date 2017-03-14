import { PipeTransform, Pipe } from '@angular/core';
import { IInterviewQuestion } from './../interfaces/interview-question';

@Pipe({
    name: 'questionBankFilter',
    pure: false
})

export class QuestionBankFilterPipe implements PipeTransform {

    transform(questionBank: IInterviewQuestion[], skillId: number): IInterviewQuestion[] {
        if (!questionBank) {
            return [];
        }
        return questionBank.filter(qb => qb.question.tags.id === skillId);
    }
}
