import { async, inject, TestBed } from '@angular/core/testing';
import { BaseRequestOptions, Http, HttpModule, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { QuestionService } from './../../../../src/app/shared/services/question.service';
import { Question } from './../../../../src/app/shared/classes/question';

describe('Question Service', () => {

    // array to mock http requests
    const questionResult: Question[] = [
        {
            id: 1,
            body: `What's the purpose of standards/conventions in .NET C#?`,
            answer: ``,
            tag: {
                id: 1,
                text: '.Net'
            }
        },
        {
            id: 2,
            text: 'When to use string and when StringBuilder?',
            answer: ``,
            tag: {
                id: 1,
                text: '.Net'
            }
        },
        {
            id: 3,
            text: 'When to use var and when the exact data type?',
            answer: ``,
            tag: {
                id: 1,
                text: '.Net'
            }
        },
        {
            id: 4,
            text: 'What is SOLID? Explain the principles and provide examples',
            answer: ``,
            tag: {
                id: 1,
                text: '.Net'
            }
        },
        {
            id: 5,
            text: 'What is Value Type and Reference Type?',
            answer: ``,
            tag: {
                id: 1,
                text: '.Net'
            }
        }
    ];

    // test initialization
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [QuestionService, MockBackend, BaseRequestOptions,
                {
                    provide: Http, useFactory: (backend, options) => new Http(backend, options), deps: [MockBackend, BaseRequestOptions]
                }
            ],
            imports: [HttpModule]
        });
    });

    // test to validate the service is defined once it is instatiated
    it('should be defined', async(inject([QuestionService, MockBackend], (service: QuestionService, mock) => {
        // assert
        expect(service).toBeDefined();
    })));

    describe('getQuestions(Method)', () => {

        // test to validate the getQuestions method is an array and returns the expected value array
        it('should be an Array and return the expected result',
            async(inject([QuestionService, MockBackend], (service: QuestionService, mock) => {
            // arrange
            mock.connections.subscribe(conn => {
                conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify({ data: questionResult }) })));
            });

            // act
            service.getQuestions().subscribe(result => {
                // assert
                expect(result).toEqual(jasmine.any(Array));
                expect(result).toEqual(questionResult);
            });
        })));

        // test to validate the getQuestions method returns the expected quantity of items
        it('should return ' + questionResult.length + ' elements',
        async(inject([QuestionService, MockBackend], (service: QuestionService, mock) => {
            // arrange
            mock.connections.subscribe(conn => {
                conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify({ data: questionResult }) })));
            });

            // act
            service.getQuestions().subscribe(result => {
                // assert
                expect(result.length).toEqual(questionResult.length);
            });
        })));

        // test to validate the getQuestions method returns an exception
        it('should return an exception', async(inject([QuestionService, MockBackend], (service: QuestionService, mock) => {
            // arrange
            mock.connections.subscribe(conn => {
                throw new Error('Any error message');
            });

            // act
            let errorFunction = () => service.getQuestions().subscribe(result => { });

            // assert
            expect(errorFunction).toThrowError();
        })));
    });

    describe('getQuestion(Method)', () => {

        // test to validate the GetQuestion method returns a defined value
        it('should return a defined item', async(inject([QuestionService, MockBackend], (service: QuestionService, mock) => {

            // arrange
            let mockItem = questionResult[0];
            mock.connections.subscribe(conn => {
                conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify({ data: mockItem }) })));
            });

            // act
            service.getQuestion(mockItem.id).subscribe(result => {
                // assert
                expect(result).toBeDefined();
            });
        })));

        // test to validate the GetQuestion method returns the expected value
        it('should return the expected value', async(inject([QuestionService, MockBackend], (service: QuestionService, mock) => {
            // arrange
            let mockItem = questionResult[0];
            mock.connections.subscribe(conn => {
                conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify({ data: mockItem }) })));
            });

            // act
            service.getQuestion(mockItem.id).subscribe(result => {
                // assert
                expect(result).toEqual(mockItem);
            });
        })));

        // test to validate the GetQuestion method returns an exception
        it('should return an exception', async(inject([QuestionService, MockBackend], (service: QuestionService, mock) => {
            // arrange
            mock.connections.subscribe(conn => {
                throw new Error('Any error message');
            });

            // act
            let errorFunction = () => service.getQuestion(null).subscribe(result => { });

            // assert
            expect(errorFunction).toThrowError();
        })));
    });

    describe('saveQuestion(Method)', () => {

        // test to validate the SaveQuestion method saves an item succesfully
        it('should create an item succesfully', async(inject([QuestionService, MockBackend], (service: QuestionService, mock) => {

            // arrange
            let mockItem: Question = {
                id: 0,
                text: 'What is Boxing and Un-Boxing?',
                answer: ``,
                tags: [
                    {
                        id: 1,
                        text: '.Net'
                    }
                ]
            };

            let response: Question = {
                id: 1,
                text: 'What is Boxing and Un-Boxing?',
                answer: ``,
                tags: [
                    {
                        id: 1,
                        text: '.Net'
                    }
                ]
            };


            mock.connections.subscribe(conn => {
                conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify({ data: response }) })));
            });

            // act
            service.saveQuestion(mockItem).subscribe(result => {
                // assert
                expect(result).toBeDefined();
                expect(result).toEqual(response);
            });
        })));

        // test to validate the saveQuestion method updates an item succesfully
        it('should update an item succesfully', async(inject([QuestionService, MockBackend], (service: QuestionService, mock) => {

            // arrange
            let mockItem: Question = {
                id: 1,
                text: `What's the purpose of standards/conventions in .NET C#?`,
                answer: ``,
                tags: [
                    {
                        id: 1,
                        text: '.Net'
                    }
                ]
            };

            mock.connections.subscribe(conn => {
                conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify({ data: mockItem }) })));
            });

            // act
            service.saveQuestion(mockItem).subscribe(result => {
                // assert
                expect(result).toBeDefined();
                expect(result).toEqual(mockItem);
            });
        })));

        // test to validate the getQuestion method returns an exception
        it('should return an exception', async(inject([QuestionService, MockBackend], (service: QuestionService, mock) => {

            // arrange
            let mockItem: Question = {
                id: 6,
                text: 'What is Boxing and Un-Boxing?',
                answer: ``,
                tags: [
                    {
                        id: 1,
                        text: '.Net'
                    }
                ]
            };

            mock.connections.subscribe(conn => {
                throw new Error('Any error message');
            });

            // act
            let errorFunction = () => service.saveQuestion(mockItem).subscribe(result => { });

            // assert
            expect(errorFunction).toThrowError();
        })));
    });

    describe('deleteQuestion(Method)', () => {

        // test to validate the DeleteQuestion method deletes an item succesfully
        it('should delete an item succesfully', async(inject([QuestionService, MockBackend], (service: QuestionService, mock) => {

            // arrange
            let itemId = 6;

            let mockResponse = new Response(new ResponseOptions({body: null, status: 204, type: null, statusText: 'No Content' }));

            mock.connections.subscribe(conn => {
                conn.mockRespond(mockResponse);
            });

            // act
            service.deleteQuestion(itemId).subscribe(result => {
                // assert
                expect(result).toBeDefined();
                expect(result.ok).toEqual(mockResponse.ok);
            });
        })));

        // test to validate the DeleteQuestion method returns an exception
        it('should return an exception', async(inject([QuestionService, MockBackend], (service: QuestionService, mock) => {
            // arrange
            let itemId = -1;
            mock.connections.subscribe(conn => {
                throw new Error('Any error message');
            });

            // act
            let errorFunction = () => service.deleteQuestion(itemId).subscribe(result => { });

            // assert
            expect(errorFunction).toThrowError();
        })));
    });
});
