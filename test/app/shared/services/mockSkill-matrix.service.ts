import { Response, ResponseOptions } from '@angular/http';

import { SkillMatrixService } from '../../../../src/app/shared/services/skill-matrix.service';
import { SkillMatrix } from '../../../../src/app/shared/classes/skill-matrix';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export class MockSkillMatrixService extends SkillMatrixService {
    private skillMatrixResult: SkillMatrix[] = [{
        hasContent: true,
        skills: [{
            rootId: 7, displayOrder: 1, requiredSkillLevel: 0, userSkillLevel: 0, levelSet: 0, competencyId: 13, jobFunctionLevel: 3,
            topics: [], id: 7, parentId: null, name: 'Hard skills', isSelectable: true, skillLevel: 1, hasChildren: true
        }]
    }];

    constructor() {
        super(null);
    }

    getSkillMatrix(id: number): Observable<SkillMatrix> {
        return Observable.of(this.skillMatrixResult[0]);
    }
}
