import { PipeTransform, Pipe } from '@angular/core';
import { QuestionExerciseBank } from './../interfaces/question-exercise-bank';
import { IInterviewExercise } from './../interfaces/interview-exercise';

@Pipe({
    name: 'exerciseBankFilter',
    pure: false
})

export class ExerciseBankFilterPipe implements PipeTransform {

    transform(bank: QuestionExerciseBank[], skillId: number): IInterviewExercise[] {
        if (!bank) {
            return [];
        }
        return bank.filter(b => b.id === skillId).map(b => b.interviewExercises)[0];
    }
}
