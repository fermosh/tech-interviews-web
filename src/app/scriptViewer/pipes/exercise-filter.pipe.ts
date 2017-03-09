import { PipeTransform, Pipe } from '@angular/core';
import { IInterviewExercise } from './../interfaces/interview-exercise';

@Pipe({
    name: 'exerciseFilter',
    pure: false
})

export class ExerciseFilterPipe implements PipeTransform {

    transform(items: IInterviewExercise[], field: string, value: string): IInterviewExercise[] {
        if (!items) {
            return [];
        }
        return items.filter(i => String(i[field]) === value);
    }
}
