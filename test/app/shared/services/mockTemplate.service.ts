import { Response, ResponseOptions } from '@angular/http';

import { TemplateService } from '../../../../src/app/shared/services/template.service';
import { ITemplate } from '../../../../src/app/shared/classes/template';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export class MockTemplateService extends TemplateService {

    // array to mock http requests
    private templateResult: ITemplate[] = [
        { id: '1', skillIds: [1, 2], competencyId: 1, jobfubctionLevel: 1 },
        { id: '2', skillIds: [3, 4], competencyId: 1, jobfubctionLevel: 1 },
        { id: '3', skillIds: [5, 6], competencyId: 1, jobfubctionLevel: 1}];

    constructor() {
        super(null);
    }

    getLevels(): Observable<ITemplate[]> {
        return Observable.of(this.templateResult);
    }

    getLevel(id: string): Observable<ITemplate> {
        return Observable.of(this.templateResult.find(x => x.id == id));
    }

    deleteLevel(id: number): Observable<Response> {
        let response = new Response(new ResponseOptions({ body: null, status: 204, type: null, statusText: 'No Content' }));
        return Observable.of(response);
    }

    saveLevel(template: ITemplate): Observable<ITemplate> {
        if (template.id === '') {
            template.id = '1';
        }

        return Observable.of(template);
    }
}
