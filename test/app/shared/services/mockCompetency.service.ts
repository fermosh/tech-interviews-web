import { Response, ResponseOptions } from '@angular/http';

import { CompetencyService } from '../../../../src/app/shared/services/competency.service';
import { ICompetency } from '../../../../src/app/shared/classes/competency';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export class MockCompetencyService extends CompetencyService {
    private competencyResult: ICompetency[] = [{code: '', jobFunctions: [], id: 0, parentId: 0, name: '', isSelectable: false}];

    constructor() {
        super(null);
    }

    getCompetencies(): Observable<ICompetency[]> {
        return Observable.of(this.competencyResult);
    }

    getCompetency(id: number): Observable<ICompetency> {
        return Observable.of(this.competencyResult.find(x => x.id == id));
    }

    deleteCompetency(id: number): Observable<Response> {
        let response = new Response(new ResponseOptions({ body: null, status: 204, type: null, statusText: 'No Content' }));
        return Observable.of(response);
    }

    saveCompetency(competency: ICompetency): Observable<ICompetency> {
        if (competency.id === 0) {
            competency.id = 1;
        }

        return Observable.of(competency);
    }
}
