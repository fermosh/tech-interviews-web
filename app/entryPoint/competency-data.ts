import { InMemoryDbService } from 'angular-in-memory-web-api';

import { ICompetency } from './competency';

export class CompetencyData implements InMemoryDbService {

    createDb() {
        let competencies: ICompetency[] = [
            {
                id: 1,
                name: '.Net'
            },
            {
                id: 2,
                name: 'Javascript'
            },
            {
                id: 3,
                name: 'DevOps'
            }
        ];
        return { competencies };
    }
}
