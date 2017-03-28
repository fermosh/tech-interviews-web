import { PipeTransform, Pipe } from '@angular/core';
import { ICompetency } from './../classes/competency';

@Pipe({
    name: 'competencyFilter'
})

export class CompetencyFilterPipe implements PipeTransform {
    transform(items: ICompetency[], parentCompetencyId: number): ICompetency[] {
        if (!items) {
            return [];
        }

        return items.filter(x => x.parentId == parentCompetencyId);
    }
}
