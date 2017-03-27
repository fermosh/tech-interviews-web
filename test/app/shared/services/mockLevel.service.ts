import { Response, ResponseOptions } from '@angular/http';

import { LevelService } from '../../../../src/app/shared/services/level.service';
import { ILevel } from '../../../../src/app/shared/classes/level';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export class MockLevelService extends LevelService {

    // array to mock http requests
    private levelResult: ILevel[] = [
        { id: 1, name: 'L1', description: 'Junior Software Engineer', competencyId: 1 },
        { id: 2, name: 'L2', description: 'Software Engineer', competencyId: 1 },
        { id: 3, name: 'L3', description: 'Senior Software Engineer', competencyId: 1 },
        { id: 4, name: 'L4', description: 'Lead Software Engineer', competencyId: 1 },
        { id: 5, name: 'L5', description: 'Chief Software Engineer', competencyId: 1 }
    ];

    constructor() {
        super(null);
    }

    getLevels(): Observable<ILevel[]> {
        return Observable.of(this.levelResult);
    }

    getLevel(id: number): Observable<ILevel> {
        return Observable.of(this.levelResult.find(x => x.id == id));
    }

    deleteLevel(id: number): Observable<Response> {
        let response = new Response(new ResponseOptions({ body: null, status: 204, type: null, statusText: 'No Content' }));
        return Observable.of(response);
    }

    saveLevel(level: ILevel): Observable<ILevel> {
        if (level.id === 0) {
            level.id = 1;
        }

        return Observable.of(level);
    }
}
