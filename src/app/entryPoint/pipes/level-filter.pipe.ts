import { PipeTransform, Pipe } from '@angular/core';
import { ILevel } from './../level';

@Pipe({
    name: 'levelFilter'
})

export class LevelFilterPipe implements PipeTransform {

    transform(items: ILevel[], competencyId: number): ILevel[] {
        if (!items) {
            return [];
        }

        return items.filter(i => i.competencyId == competencyId);
    }
}
