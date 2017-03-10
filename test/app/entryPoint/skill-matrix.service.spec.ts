import { async, inject, TestBed } from '@angular/core/testing';
import { BaseRequestOptions, Http, HttpModule, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { SkillMatrixService } from './../../../src/app/entryPoint/skill-matrix.service';
import { ISkillMatrix } from './../../../src/app/scriptViewer/interfaces/skill-matrix';

describe('Skill Matrix Service: ', () => {

    // array to mock http requests
    const skillMatrixResult: ISkillMatrix[] = [{
        id: 13, hasContent: true, competencyName: '.Net', domain: 'FrontEnd web development',
        level: { id: 3, name: 'L3', description: 'Senior Software Engineer', competencyId: 13 },
        skills: [{
            rootId: 7, displayOrder: 1, requiredSkillLevel: 0, userSkillLevel: 0, levelSet: 0, competencyId: 13, jobFunctionLevel: 3,
            topics: [], id: 7, parentId: null, name: 'Hard skills', isSelectable: true, skillLevel: 1, hasChildren: true
        }]
    }];

    // test initialization
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [SkillMatrixService, MockBackend, BaseRequestOptions,
                {
                    provide: Http, useFactory: (backend, options) => new Http(backend, options), deps: [MockBackend, BaseRequestOptions]
                }
            ],
            imports: [HttpModule]
        });
    });

    // test to validate the service is defined once it is instatiated
    it('should be defined', async(inject([SkillMatrixService, MockBackend], (service: SkillMatrixService, mock) => {
        // assert
        expect(service).toBeDefined();
    })));

    describe('getSkillMatrix method', () => {

        // test to validate the getSkillMatrix method returns a defined value
        it('should return a defined item', async(inject([SkillMatrixService, MockBackend], (service: SkillMatrixService, mock) => {

            // arrange
            let mockItem = skillMatrixResult[0];
            mock.connections.subscribe(conn => {
                conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify({ data: mockItem }) })));
            });

            // act
            service.getSkillMatrix(mockItem.id).subscribe(result => {
                // assert
                expect(result).toBeDefined();
            });
        })));

        // test to validate the getSkillMatrix method returns the expected value
        it('should return the expected value', async(inject([SkillMatrixService, MockBackend], (service: SkillMatrixService, mock) => {
            // arrange
            let mockItem = skillMatrixResult[0];
            mock.connections.subscribe(conn => {
                conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify({ data: mockItem }) })));
            });

            // act
            service.getSkillMatrix(mockItem.id).subscribe(result => {
                // assert
                expect(result).toBeDefined();
                expect(result).toEqual(mockItem);
            });
        })));

        // test to validate the getSkillMatrix method returns an exception
        it('should return an exception', async(inject([SkillMatrixService, MockBackend], (service: SkillMatrixService, mock) => {
            // arrange
            mock.connections.subscribe(conn => {
                throw new Error('Any error message');
            });

            // act
            let errorFunction = () => service.getSkillMatrix(null).subscribe(result => { });

            // assert
            expect(errorFunction).toThrowError();
        })));
    });
});
