import { PipeTransform, Pipe } from '@angular/core';
import { IInterviewQuestion } from './../interfaces/interview-question';

@Pipe({
    name: 'questionFilter',
    pure: false
})

export class QuestionFilterPipe implements PipeTransform {

    transform(items: IInterviewQuestion[], field: string, value: string): IInterviewQuestion[] {
        if (!items) {
            return [];
        }
        return items.filter(i => String(i[field]) === value);
    }
}
