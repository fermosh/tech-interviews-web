import { Response, ResponseOptions } from '@angular/http';

import { DomainService } from '../../../../src/app/shared/services/domain.service';
import { IDomain } from '../../../../src/app/shared/classes/domain';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export class MockDomainService extends DomainService {

    // array to mock http requests
    private domainResult: IDomain[] = [
            { id: 1, name: 'FrontEnd web development', competencyId: 1, levelId: 1, skillMatrixId: 13 },
            { id: 2, name: 'Backend development', competencyId: 1, levelId: 1, skillMatrixId: 14 },
            { id: 3, name: 'FrontEnd desktop development', competencyId: 1, levelId: 1, skillMatrixId: 13 },
            { id: 4, name: 'Azure development', competencyId: 1, levelId: 1, skillMatrixId: 14 },
            { id: 5, name: 'FrontEnd web development', competencyId: 1, levelId: 2, skillMatrixId: 13 },
            { id: 6, name: 'Backend development', competencyId: 1, levelId: 2, skillMatrixId: 14 },
            { id: 7, name: 'FrontEnd desktop development', competencyId: 1, levelId: 2, skillMatrixId: 13 },
            { id: 8, name: 'Azure development', competencyId: 1, levelId: 2, skillMatrixId: 14 },
            { id: 9, name: 'FrontEnd web development', competencyId: 1, levelId: 3, skillMatrixId: 13 },
            { id: 10, name: 'Backend development', competencyId: 1, levelId: 3, skillMatrixId: 14 },
            { id: 11, name: 'FrontEnd desktop development', competencyId: 1, levelId: 3, skillMatrixId: 13 },
            { id: 12, name: 'Azure development', competencyId: 1, levelId: 3, skillMatrixId: 14 },
            { id: 13, name: 'FrontEnd web development', competencyId: 1, levelId: 4, skillMatrixId: 13 },
            { id: 14, name: 'Backend development', competencyId: 1, levelId: 4, skillMatrixId: 14 },
            { id: 15, name: 'FrontEnd desktop development', competencyId: 1, levelId: 4, skillMatrixId: 13 },
            { id: 16, name: 'Azure development', competencyId: 1, levelId: 4, skillMatrixId: 14 },
            { id: 17, name: 'FrontEnd web development', competencyId: 1, levelId: 5, skillMatrixId: 13 },
            { id: 18, name: 'Backend development', competencyId: 1, levelId: 5, skillMatrixId: 14 },
            { id: 19, name: 'FrontEnd desktop development', competencyId: 1, levelId: 5, skillMatrixId: 13 },
            { id: 20, name: 'Azure development', competencyId: 1, levelId: 5, skillMatrixId: 14 }
        ];

    constructor() {
        super(null);
    }

    getDomains(): Observable<IDomain[]> {
        return Observable.of(this.domainResult);
    }

    getDomain(id: number): Observable<IDomain> {
        return Observable.of(this.domainResult.find(x => x.id == id));
    }

    deleteDomain(id: number): Observable<Response> {
        let response = new Response(new ResponseOptions({ body: null, status: 204, type: null, statusText: 'No Content' }));
        return Observable.of(response);
    }

    saveDomain(domain: IDomain): Observable<IDomain> {
        if (domain.id === 0) {
            domain.id = 1;
        }

        return Observable.of(domain);
    }
}
