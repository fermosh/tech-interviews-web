import { PipeTransform, Pipe } from '@angular/core';
import { Exercise } from '../classes/exercise';

@Pipe({
    name: 'exerciseFilter',
    pure: false
})

export class ExerciseFilterPipe implements PipeTransform {
    
    transform(items: Exercise[], field: string, value: string): Exercise[] {
        if (!items) return [];
        return items.filter(i => String(i[field]) == value);
    }

}