import { PipeTransform, Pipe } from '@angular/core';
import { QuestionExerciseBank } from './../interfaces/question-exercise-bank';
import { IInterviewQuestion } from './../interfaces/interview-question';

@Pipe({
    name: 'questionBankFilter',
    pure: false
})

export class QuestionBankFilterPipe implements PipeTransform {

    transform(bank: QuestionExerciseBank[], skillId: number): IInterviewQuestion[] {
        if (!bank) {
            return [];
        }
        return bank.filter(b => b.id === skillId).map(b => b.interviewQuestions)[0];
    }
}
