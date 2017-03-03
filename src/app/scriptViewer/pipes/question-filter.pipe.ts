import { PipeTransform, Pipe } from '@angular/core';
import { IQuestion } from './../interfaces/question';

@Pipe({
    name: 'questionFilter',
    pure: false
})

export class QuestionFilterPipe implements PipeTransform {

    transform(items: IQuestion[], field: string, value: string): IQuestion[] {
        if (!items) {
            return [];
        }
        return items.filter(i => String(i[field]) === value);
    }
}
