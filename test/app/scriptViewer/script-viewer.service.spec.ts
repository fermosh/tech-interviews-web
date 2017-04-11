import { async, inject, TestBed } from '@angular/core/testing';
import { BaseRequestOptions, Http, HttpModule, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { ScriptViewerService } from './../../../src/app/scriptViewer/script-viewer.service';
import { InterviewScript } from './../../../src/app/scriptViewer/classes/interview-script';

describe('Script Viewer Service: ', () => {

    // array to mock http requests
    const skillMatrixResult: InterviewScript[] = [{
        hasContent: true,
        competencyName: '',
        level: {id: 1, name: 'L1', description: 'l1'},
        skills: [{
            rootId: 7, displayOrder: 1, requiredSkillLevel: 0, userSkillLevel: 0, levelSet: 0, competencyId: 13, jobFunctionLevel: 3,
            topics: [], id: 7, parentId: null, name: 'Hard skills', isSelectable: true, skillLevel: 1, hasChildren: true, 
            interviewExercises:[{id: '1', title: '', body:'', selected: true, rating: 0}, {id: '2', title: '',body:'', selected: true, rating: 0}],
            interviewQuestions: [{id: '1', body: '', skill: {id: 1, name:'A'}, rating:0}, {id: '2', body: '', skill: {id: 1, name:'A'}, rating:0}]
        }]
    }];

    // test initialization
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ScriptViewerService, MockBackend, BaseRequestOptions,
                {
                    provide: Http, useFactory: (backend, options) => new Http(backend, options), deps: [MockBackend, BaseRequestOptions]
                }
            ],
            imports: [HttpModule]
        });
    });

    // test to validate the service is defined once it is instatiated
    it('should be defined', async(inject([ScriptViewerService, MockBackend], (service: ScriptViewerService, mock) => {
        // assert
        expect(service).toBeDefined();
    })));

    describe('getScriptViewer method', () => {

        // test to validate the getScriptViewer method returns a defined value
        it('should return a defined item', async(inject([ScriptViewerService, MockBackend], (service: ScriptViewerService, mock) => {

            // arrange
            let templateId = '1';
            let mockData = skillMatrixResult[0];

            mock.connections.subscribe(conn => {
                conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify({ mockData }) })));
            });

            // act
            service.getScriptViewer(templateId).subscribe(result => {
                // assert
                expect(result).toBeDefined();
            });
        })));

        // test to validate the getScriptViewer method returns the expected value
        it('should return the expected value', async(inject([ScriptViewerService, MockBackend], (service: ScriptViewerService, mock) => {

            // arrange
            let templateId = '1';
            let mockData = skillMatrixResult[0];

            mock.connections.subscribe(conn => {
                conn.mockRespond(new Response(new ResponseOptions({ body: mockData })));
            });

            // act
            service.getScriptViewer(templateId).subscribe(result => {
                // assert
                expect(result).toBeDefined();
                expect(result).toEqual(mockData);
            });
        })));

        // test to validate the getScriptViewer method returns an exception
        it('should return an exception', async(inject([ScriptViewerService, MockBackend], (service: ScriptViewerService, mock) => {
            // arrange
            mock.connections.subscribe(conn => {
                throw new Error('Any error message');
            });

            // act
            let errorFunction = () => service.getScriptViewer(null).subscribe(result => { });

            // assert
            expect(errorFunction).toThrowError();
        })));
    });

    describe('getRatingBySkill method', () => {

        // test to validate the getRatingBySkill method returns a defined value
        it('should return a defined value', async(inject([ScriptViewerService, MockBackend], (service: ScriptViewerService, mock) => {

            // arrange
            let mockData = skillMatrixResult[0].skills[0];

            // act
            let result = service.getRatingBySkill(mockData);

            // assert
            expect(result).toBeDefined();
        })));

        // test to validate the getRatingBySkill method returns the expected value
        it('should return the expected value when there are questions/excercises with some rating',
            async(inject([ScriptViewerService, MockBackend], (service: ScriptViewerService, mock) => {

            // arrange
            let mockData = skillMatrixResult[0].skills[0];

            // act
            let result = service.getRatingBySkill(mockData);

            // assert
            expect(result).toBeDefined();
            expect(result).toEqual(0);
        })));

        // test to validate the getRatingBySkill method returns the expected value
        it('should return the expected value when there are questions/excercises without any rating',
            async(inject([ScriptViewerService, MockBackend], (service: ScriptViewerService, mock) => {

            // arrange
            let mockData = skillMatrixResult[0].skills[0];

            // act
            let result = service.getRatingBySkill(mockData);

            // assert
            expect(result).toBeDefined();
            expect(result).toEqual(0);
        })));

        // test to validate the getRatingBySkill method returns an exception
        it('should return an exception', async(inject([ScriptViewerService, MockBackend], (service: ScriptViewerService, mock) => {
            // arrange
            mock.connections.subscribe(conn => {
                throw new Error('Any error message');
            });

            // act
            let errorFunction = () => service.getRatingBySkill(null);

            // assert
            expect(errorFunction).toThrowError();
        })));
    });
});
