import { InMemoryDbService } from 'angular-in-memory-web-api';

import { ILevel } from './level';

export class LevelData implements InMemoryDbService {

    createDb() {
        let levels: ILevel[] = [
            {
                id: 1,
                name: 'L1',
                description: 'Junior Software Engineer',
                competencyId: 1
            },
            {
                id: 2,
                name: 'L2',
                description: 'Software Engineer',
                competencyId: 1
            },
            {
                id: 3,
                name: 'L3',
                description: 'Senior Software Engineer',
                competencyId: 1
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
        return { levels };
    }
}
