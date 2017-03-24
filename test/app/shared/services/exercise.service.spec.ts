import { async, inject, TestBed } from '@angular/core/testing';
import { BaseRequestOptions, Http, HttpModule, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { ExerciseService } from './../../../../src/app/shared/services/exercise.service';
import { Exercise } from './../../../../src/app/shared/classes/exercise';

describe('Exercise Service', () => {

    // array to mock http requests
    const exerciseResult: Exercise[] = [
        {
            id: 1,
            title: 'Palindrome',
            body: `A palindrome is a word, phrase, number, or other
                sequence of characters which reads the same backward or forward,
                such as madam or kayak. Write an function that receives an string
                parameters and return true if it is a palindrome.`,
            solution: '',
            tag: {
                id: 1,
                name: '.Net'
            }
        },
        {
            id: 2,
            title: 'Balanced Brakets',
            body: `Type of Brackets: () Round brackets or parentheses, {}
                Curly brackets or braces, [] Square brackets. Implement an algorithm
                to resolve the balanced brackets problems, ie. \'{([])}\' is balanced.`,
            solution: '',
            tag: [
                {
                    id: 1,
                    name: '.Net'
                },
                {
                    id: 2,
                    name: 'Algorithms'
                }
            ]
        }
    ];

    // test initialization
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ExerciseService, MockBackend, BaseRequestOptions,
                {
                    provide: Http, useFactory: (backend, options) => new Http(backend, options), deps: [MockBackend, BaseRequestOptions]
                }
            ],
            imports: [HttpModule]
        });
    });

    // test to validate the service is defined once it is instatiated
    it('should be defined', async(inject([ExerciseService, MockBackend], (service: ExerciseService, mock) => {
        // assert
        expect(service).toBeDefined();
    })));

    describe('getExercises(Method)', () => {

        // test to validate the getCompetencies method is an array and returns the expected value array
        it('should be an Array and return the expected result',
            async(inject([ExerciseService, MockBackend], (service: ExerciseService, mock) => {
            // arrange
            mock.connections.subscribe(conn => {
                conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify({ data: exerciseResult }) })));
            });

            // act
            service.getExercises().subscribe(result => {
                // assert
                expect(result).toEqual(jasmine.any(Array));
                expect(result).toEqual(exerciseResult);
            });
        })));

        // test to validate the getExercises method returns the expected quantity of items
        it('should return ' + exerciseResult.length + ' elements',
        async(inject([ExerciseService, MockBackend], (service: ExerciseService, mock) => {
            // arrange
            mock.connections.subscribe(conn => {
                conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify({ data: exerciseResult }) })));
            });

            // act
            service.getExercises().subscribe(result => {
                // assert
                expect(result.length).toEqual(exerciseResult.length);
            });
        })));

        // test to validate the getCompetencies method returns an exception
        it('should return an exception', async(inject([ExerciseService, MockBackend], (service: ExerciseService, mock) => {
            // arrange
            mock.connections.subscribe(conn => {
                throw new Error('Any error message');
            });

            // act
            let errorFunction = () => service.getExercises().subscribe(result => { });

            // assert
            expect(errorFunction).toThrowError();
        })));
    });

    describe('getExercise(Method)', () => {

        // test to validate the GetExercise method returns a defined value
        it('should return a defined item', async(inject([ExerciseService, MockBackend], (service: ExerciseService, mock) => {

            // arrange
            let mockItem = exerciseResult[0];
            mock.connections.subscribe(conn => {
                conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify({ data: mockItem }) })));
            });

            // act
            service.getExercise(mockItem.id).subscribe(result => {
                // assert
                expect(result).toBeDefined();
            });
        })));

        // test to validate the GetExercise method returns the expected value
        it('should return the expected value', async(inject([ExerciseService, MockBackend], (service: ExerciseService, mock) => {
            // arrange
            let mockItem = exerciseResult[0];
            mock.connections.subscribe(conn => {
                conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify({ data: mockItem }) })));
            });

            // act
            service.getExercise(mockItem.id).subscribe(result => {
                // assert
                expect(result).toEqual(mockItem);
            });
        })));

        // test to validate the GetExercise method returns an exception
        it('should return an exception', async(inject([ExerciseService, MockBackend], (service: ExerciseService, mock) => {
            // arrange
            mock.connections.subscribe(conn => {
                throw new Error('Any error message');
            });

            // act
            let errorFunction = () => service.getExercise(null).subscribe(result => { });

            // assert
            expect(errorFunction).toThrowError();
        })));
    });

    describe('saveExercise(Method)', () => {

        // test to validate the SaveExercise method saves an item succesfully
        it('should create an item succesfully', async(inject([ExerciseService, MockBackend], (service: ExerciseService, mock) => {

            // arrange
            let mockItem: Exercise = {
                id: 0,
                title: 'Palindrome',
                body: `A palindrome is a word, phrase, number, or other
                    sequence of characters which reads the same backward or forward,
                    such as madam or kayak. Write an function that receives an string
                    parameters and return true if it is a palindrome.`,
                solution: '',
                tag: {
                    id: 1,
                    text: '.Net'
                }
            };

            let response: Exercise = {
                id: 1,
                title: 'Palindrome',
                body: `A palindrome is a word, phrase, number, or other
                    sequence of characters which reads the same backward or forward,
                    such as madam or kayak. Write an function that receives an string
                    parameters and return true if it is a palindrome.`,
                solution: '',
                tag: {
                    id: 1,
                    text: '.Net'
                }
            };

            mock.connections.subscribe(conn => {
                conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify({ data: response }) })));
            });

            // act
            service.saveExercise(mockItem).subscribe(result => {
                // assert
                expect(result).toBeDefined();
                expect(result).toEqual(response);
            });
        })));

        // test to validate the saveExercise method updates an item succesfully
        it('should update an item succesfully', async(inject([ExerciseService, MockBackend], (service: ExerciseService, mock) => {

            // arrange
            let mockItem: Exercise = {
                id: 1,
                title: 'Palindrome',
                body: `A palindrome is a word, phrase, number, or other
                    sequence of characters which reads the same backward or forward,
                    such as madam or kayak. Write an function that receives an string
                    parameters and return true if it is a palindrome.`,
                solution: '',
                tag: {
                    id: 1,
                    text: '.Net'
                }
            };

            mock.connections.subscribe(conn => {
                conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify({ data: mockItem }) })));
            });

            // act
            service.saveExercise(mockItem).subscribe(result => {
                // assert
                expect(result).toBeDefined();
                expect(result).toEqual(mockItem);
            });
        })));

        // test to validate the getExercise method returns an exception
        it('should return an exception', async(inject([ExerciseService, MockBackend], (service: ExerciseService, mock) => {

            // arrange
            let mockItem: Exercise = {
                id: 1,
                title: 'Palindrome',
                body: `A palindrome is a word, phrase, number, or other
                    sequence of characters which reads the same backward or forward,
                    such as madam or kayak. Write an function that receives an string
                    parameters and return true if it is a palindrome.`,
                solution: '',
                tag: {
                    id: 1,
                    text: '.Net'
                }
            };

            mock.connections.subscribe(conn => {
                throw new Error('Any error message');
            });

            // act
            let errorFunction = () => service.saveExercise(mockItem).subscribe(result => { });

            // assert
            expect(errorFunction).toThrowError();
        })));
    });

    describe('deleteExercise(Method)', () => {

        // test to validate the DeleteExercise method deletes an item succesfully
        it('should delete an item succesfully', async(inject([ExerciseService, MockBackend], (service: ExerciseService, mock) => {

            // arrange
            let itemId = 6;

            let mockResponse = new Response(new ResponseOptions({body: null, status: 204, type: null, statusText: 'No Content' }));

            mock.connections.subscribe(conn => {
                conn.mockRespond(mockResponse);
            });

            // act
            service.deleteExercise(itemId).subscribe(result => {
                // assert
                expect(result).toBeDefined();
                expect(result.ok).toEqual(mockResponse.ok);
            });
        })));

        // test to validate the DeleteExercise method returns an exception
        it('should return an exception', async(inject([ExerciseService, MockBackend], (service: ExerciseService, mock) => {
            // arrange
            let itemId = -1;
            mock.connections.subscribe(conn => {
                throw new Error('Any error message');
            });

            // act
            let errorFunction = () => service.deleteExercise(itemId).subscribe(result => { });

            // assert
            expect(errorFunction).toThrowError();
        })));
    });
});
