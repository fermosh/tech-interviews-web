import { PipeTransform, Pipe } from '@angular/core';
import { IDomain } from '../interfaces/domain';

@Pipe({
    name: 'domainFilter'
})

export class DomainFilterPipe implements PipeTransform {

    transform(items: IDomain[], levelId: number): IDomain[] {
        if (!items) {
            return [];
        }

        return items.filter(i => i.levelId == levelId);
    }
}
