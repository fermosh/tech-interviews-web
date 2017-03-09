import { async, inject, TestBed } from '@angular/core/testing';
import { BaseRequestOptions, Http, HttpModule, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { ScriptViewerService } from './../../../src/app/scriptViewer/script-viewer.service';
import { ISkillMatrix } from './../../../src/app/scriptViewer/interfaces/skill-matrix';

describe('Script Viewer Service: ', () => {

    // array to mock http requests
    const skillMatrixResult: ISkillMatrix[] = [{
        id: 13, hasContent: true, competencyName: '.Net', domain: 'FrontEnd web development',
        level: { id: 3, name: 'L3', description: 'Senior Software Engineer', competencyId: 13 },
        skills: [{
                        id: 2,
                        name: '.NET Development',
                        startingFrom: 'Novice',
                        priority: 'High',
                        rootId: 7,
                        displayOrder: 101,
                        requiredSkillLevel: 10,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        parentId: 479,
                        isSelectable: true,
                        skillLevel: 4,
                        hasChildren: false,
                        topics: [
                            {
                                name: '.NET Framework',
                                isRequired: true
                            }
                        ],
                        questions: [
                            {
                                id: 1,
                                question: 'What is SOLID? Explain the principles and provide examples',
                                answer: '',
                                selected: true,
                                rating: 1,
                                comments: []
                            },
                            {
                                id: 2,
                                question: 'What is Value Type and Reference Type?',
                                answer: '',
                                selected: true,
                                rating: 1,
                                comments: []
                            }
                        ],
                        exercises: [
                            {
                                id: 1,
                                title: 'Palindrome',
                                description: `A palindrome is a word, phrase, number, or other
                                    sequence of characters which reads the same backward or forward,
                                    such as madam or kayak. Write an function that receives an string
                                    parameters and return true if it is a palindrome.`,
                                solution: '',
                                selected: true,
                                rating: 1,
                                comments: []
                            }
                        ]
                    },
                    {
                        id: 3,
                        name: '.NET Development x',
                        startingFrom: 'Novice',
                        priority: 'High',
                        rootId: 7,
                        displayOrder: 101,
                        requiredSkillLevel: 10,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        parentId: 479,
                        isSelectable: true,
                        skillLevel: 4,
                        hasChildren: false,
                        topics: [
                            {
                                name: '.NET Framework',
                                isRequired: true
                            }
                        ],
                        questions: [
                            {
                                id: 1,
                                question: 'What is SOLID? Explain the principles and provide examples',
                                answer: '',
                                selected: true,
                                rating: 0,
                                comments: []
                            },
                            {
                                id: 2,
                                question: 'What is Value Type and Reference Type?',
                                answer: '',
                                selected: true,
                                rating: 0,
                                comments: []
                            }
                        ],
                        exercises: [
                            {
                                id: 1,
                                title: 'Palindrome',
                                description: `A palindrome is a word, phrase, number, or other
                                    sequence of characters which reads the same backward or forward,
                                    such as madam or kayak. Write an function that receives an string
                                    parameters and return true if it is a palindrome.`,
                                solution: '',
                                selected: true,
                                rating: 0,
                                comments: []
                            }
                        ]
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
            let templateId = 1;
            let mockData = skillMatrixResult[0];

            mock.connections.subscribe(conn => {
                conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify({ data: mockData }) })));
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
            let templateId = 1;
            let mockData = skillMatrixResult[0];

            mock.connections.subscribe(conn => {
                conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify({ data: mockData }) })));
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
            expect(result).toEqual(1);
        })));

        // test to validate the getRatingBySkill method returns the expected value
        it('should return the expected value when there are questions/excercises without any rating',
            async(inject([ScriptViewerService, MockBackend], (service: ScriptViewerService, mock) => {

            // arrange
            let mockData = skillMatrixResult[0].skills[1];

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
