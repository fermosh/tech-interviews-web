import { PipeTransform, Pipe } from '@angular/core';
import { InterviewQuestion } from './../classes/interview-question';

@Pipe({
    name: 'questionBankFilter',
    pure: false
})

export class QuestionBankFilterPipe implements PipeTransform {
    transform(questionBank: InterviewQuestion[], skillId: number): InterviewQuestion[] {
        if (!questionBank) {
            return [];
        }
        return questionBank.filter(qb => qb.tag.id === skillId);
    }
}