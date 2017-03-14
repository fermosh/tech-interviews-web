import { PipeTransform, Pipe } from '@angular/core';
import { QuestionExerciseBank } from './../interfaces/question-exercise-bank';
import { InterviewQuestion } from './../classes/interview-question';

@Pipe({
    name: 'questionBankFilter',
    pure: false
})

export class QuestionBankFilterPipe implements PipeTransform {

    transform(bank: QuestionExerciseBank[], skillId: number): InterviewQuestion[] {
        if (!bank) {
            return [];
        }
        return bank.filter(b => b.id === skillId).map(b => b.interviewQuestions)[0];
    }
}
