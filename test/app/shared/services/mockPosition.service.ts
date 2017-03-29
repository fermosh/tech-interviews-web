import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { PositionService } from '../../../../src/app/shared/services/position.service';
import { Position } from '../../../../src/app/entryPoint/classes/position';


export class MockPositionService extends PositionService {
    private position: Position = {
        jobFunctions: [{ id: 15, name: 'Software Engineering' }],
        competencies: [
            { code: 'DotNET', jobFunctions: [15], id: 1, parentId: null, name: '.NET', isSelectable: false },
            { code: 'CG-2DAnim', jobFunctions: [], id: 86, parentId: 83, name: '2D Animation and Vector Art', isSelectable: true }
        ]
    };

    constructor() {
        super(null);
    }

    getPosition(): Observable<Position> {
        return Observable.of(this.position)
    }
}
