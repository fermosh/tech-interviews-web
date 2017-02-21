import { PipeTransform, Pipe } from '@angular/core';
import { IExercise } from '../interfaces/exercise';

@Pipe({
    name: 'exerciseFilter',
    pure: false
})

export class ExerciseFilterPipe implements PipeTransform {

    transform(items: IExercise[], field: string, value: string): IExercise[] {
        if (!items) {
            return [];
        }
        return items.filter(i => String(i[field]) === value);
    }
}
