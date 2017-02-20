import { PipeTransform, Pipe } from '@angular/core';
import { Question } from '../classes/question';

@Pipe({
    name: 'questionFilter',
    pure: false
})

export class QuestionFilterPipe implements PipeTransform {
    
    transform(items: Question[], field: string, value: string): Question[] {
        if (!items) return [];
        return items.filter(i => String(i[field]) == value);
    }

}