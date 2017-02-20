import { InMemoryDbService } from 'angular-in-memory-web-api';

import { ICompetency } from './competency';
import { IDomain } from './domain';
import { ILevel } from './level';

export class FilterCriteriaData implements InMemoryDbService {

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

        let domains: IDomain[] = [
            {
                id: 1,
                name: 'FrontEnd web development',
                competencyId: 1,
                levelId: 1
            },
            {
                id: 2,
                name: 'Backend development',
                competencyId: 1,
                levelId: 1
            },
            {
                id: 3,
                name: 'FrontEnd desktop development',
                competencyId: 1,
                levelId: 1
            },
            {
                id: 4,
                name: 'Azure development',
                competencyId: 1,
                levelId: 1
            },
            {
                id: 5,
                name: 'FrontEnd web development',
                competencyId: 1,
                levelId: 2
            },
            {
                id: 6,
                name: 'Backend development',
                competencyId: 1,
                levelId: 2
            },
            {
                id: 7,
                name: 'FrontEnd desktop development',
                competencyId: 1,
                levelId: 2
            },
            {
                id: 8,
                name: 'Azure development',
                competencyId: 1,
                levelId: 2
            },
            {
                id: 9,
                name: 'FrontEnd web development',
                competencyId: 1,
                levelId: 3
            },
            {
                id: 10,
                name: 'Backend development',
                competencyId: 1,
                levelId: 3
            },
            {
                id: 11,
                name: 'FrontEnd desktop development',
                competencyId: 1,
                levelId: 3
            },
            {
                id: 12,
                name: 'Azure development',
                competencyId: 1,
                levelId: 4
            },
            {
                id: 13,
                name: 'FrontEnd web development',
                competencyId: 1,
                levelId: 4
            },
            {
                id: 14,
                name: 'Backend development',
                competencyId: 1,
                levelId: 4
            },
            {
                id: 15,
                name: 'FrontEnd desktop development',
                competencyId: 1,
                levelId: 4
            },
            {
                id: 16,
                name: 'Azure development',
                competencyId: 1,
                levelId: 5
            },
            {
                id: 17,
                name: 'FrontEnd web development',
                competencyId: 1,
                levelId: 5
            },
            {
                id: 18,
                name: 'Backend development',
                competencyId: 1,
                levelId: 5
            },
            {
                id: 19,
                name: 'FrontEnd desktop development',
                competencyId: 1,
                levelId: 5
            },
            {
                id: 20,
                name: 'Azure development',
                competencyId: 1,
                levelId: 1
            }
        ];
        let levels: ILevel[] = [
            {
                id: 1,
                name: 'L1',
                description: 'Junior Software Engineer',
                competencyId: 13
            },
            {
                id: 2,
                name: 'L2',
                description: 'Software Engineer',
                competencyId: 13
            },
            {
                id: 3,
                name: 'L3',
                description: 'Senior Software Engineer',
                competencyId: 13
            },
            {
                id: 4,
                name: 'L4',
                description: 'Lead Software Engineer',
                competencyId: 1
            },
            {
                id: 5,
                name: 'L5',
                description: 'Chief Software Engineer',
                competencyId: 1
            },
            {
                id: 6,
                name: 'L1',
                description: '',
                competencyId: 2
            },
            {
                id: 7,
                name: 'L2',
                description: '',
                competencyId: 2
            },
            {
                id: 8,
                name: 'L3',
                description: '',
                competencyId: 1
            }
        ];

        return { competencies, domains, levels };
    }
}
