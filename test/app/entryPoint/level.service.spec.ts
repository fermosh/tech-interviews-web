import { async, inject, TestBed } from '@angular/core/testing';
import { BaseRequestOptions, Http, HttpModule, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { LevelService } from './../../../src/app/entryPoint/services/level.service';
import { ILevel } from './../../../src/app/entryPoint/interfaces/level';

describe('Level Service: ', () => {

    // array to mock http requests
    const levelResult: ILevel[] = [
        { id: 1, name: 'L1', description: 'Junior Software Engineer', competencyId: 1 },
        { id: 2, name: 'L2', description: 'Software Engineer', competencyId: 1 },
        { id: 3, name: 'L3', description: 'Senior Software Engineer', competencyId: 1 },
        { id: 4, name: 'L4', description: 'Lead Software Engineer', competencyId: 1 },
        { id: 5, name: 'L5', description: 'Chief Software Engineer', competencyId: 1 }
    ];

    // test initialization
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [LevelService, MockBackend, BaseRequestOptions,
                {
                    provide: Http, useFactory: (backend, options) => new Http(backend, options), deps: [MockBackend, BaseRequestOptions]
                }
            ],
            imports: [HttpModule]
        });
    });

    // test to validate the service is defined once it is instatiated
    it('should be defined', async(inject([LevelService, MockBackend], (service: LevelService, mock) => {
        // assert
        expect(service).toBeDefined();
    })));

    describe('GetLevels method', () => {

        // test to validate the getLevels method is an array and returns the expected value array
        it('should be an Array and return the expected result', async(inject([LevelService, MockBackend], (service: LevelService, mock) => {
            // arrange
            mock.connections.subscribe(conn => {
                conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify({ data: levelResult }) })));
            });

            // act
            service.getLevels().subscribe(result => {
                // assert
                expect(result).toEqual(jasmine.any(Array));
                expect(result).toEqual(levelResult);
            });
        })));

        // test to validate the getLevels method returns the expected quantity of items
        it('should return ' + levelResult.length + ' elements', async(inject([LevelService, MockBackend], (service: LevelService, mock) => {
            // arrange
            mock.connections.subscribe(conn => {
                conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify({ data: levelResult }) })));
            });

            // act
            service.getLevels().subscribe(result => {
                // assert
                expect(result.length).toEqual(levelResult.length);
            });
        })));

        // test to validate the getLevels method returns an exception
        it('should return an exception', async(inject([LevelService, MockBackend], (service: LevelService, mock) => {
            // arrange
            mock.connections.subscribe(conn => {
                throw new Error('Any error message');
            });

            // act
            let errorFunction = () => service.getLevels().subscribe(result => { });

            // assert
            expect(errorFunction).toThrowError();
        })));
    });

    describe('GetLevel method', () => {

        // test to validate the GetLevel method returns a defined value
        it('should return a defined item', async(inject([LevelService, MockBackend], (service: LevelService, mock) => {

            // arrange
            let mockItem = levelResult[0];
            mock.connections.subscribe(conn => {
                conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify({ data: mockItem }) })));
            });

            // act
            service.getLevel(mockItem.id).subscribe(result => {
                // assert
                expect(result).toBeDefined();
            });
        })));

        // test to validate the GetLevel method returns the expected value
        it('should return the expected value', async(inject([LevelService, MockBackend], (service: LevelService, mock) => {
            // arrange
            let mockItem = levelResult[0];
            mock.connections.subscribe(conn => {
                conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify({ data: mockItem }) })));
            });

            // act
            service.getLevel(mockItem.id).subscribe(result => {
                // assert
                expect(result).toBeDefined();
                expect(result).toEqual(mockItem);
            });
        })));

        // test to validate the GetLevel method returns an exception
        it('should return an exception', async(inject([LevelService, MockBackend], (service: LevelService, mock) => {
            // arrange
            mock.connections.subscribe(conn => {
                throw new Error('Any error message');
            });

            // act
            let errorFunction = () => service.getLevel(null).subscribe(result => { });

            // assert
            expect(errorFunction).toThrowError();
        })));
    });

    describe('SaveLevel method', () => {

        // test to validate the SaveLevel method saves an item succesfully
        it('should create an item succesfully', async(inject([LevelService, MockBackend], (service: LevelService, mock) => {

            // arrange
            let mockItem: ILevel = { id: 0, name: 'New L1', description: 'Junior Software Engineer', competencyId: 1 };
            let response = { id: 1, name: mockItem.name, description: mockItem.description, competencyId: mockItem.competencyId };

            mock.connections.subscribe(conn => {
                conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify({ data: response }) })));
            });

            // act
            service.saveLevel(mockItem).subscribe(result => {
                // assert
                expect(result).toBeDefined();
                expect(result).toEqual(response);
            });
        })));

        // test to validate the SaveLevel method updates an item succesfully
        it('should update an item succesfully', async(inject([LevelService, MockBackend], (service: LevelService, mock) => {
            // arrange
            let mockItem: ILevel = { id: 50, name: 'Updated L1', description: 'Junior Software Engineer', competencyId: 1 };

            mock.connections.subscribe(conn => {
                conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify({ data: mockItem }) })));
            });

            // act
            service.saveLevel(mockItem).subscribe(result => {
                // assert
                expect(result).toBeDefined();
                expect(result).toEqual(mockItem);
            });
        })));

        // test to validate the SaveLevel method returns an exception
        it('should return an exception', async(inject([LevelService, MockBackend], (service: LevelService, mock) => {
            // arrange
            let mockItem: ILevel = { id: 50, name: 'Updated L1', description: 'Junior Software Engineer', competencyId: 1 };

            mock.connections.subscribe(conn => {
                throw new Error('Any error message');
            });

            // act
            let errorFunction = () => service.saveLevel(mockItem).subscribe(result => { });

            // assert
            expect(errorFunction).toThrowError();
        })));
    });

    describe('DeleteLevel method', () => {

        // test to validate the DeleteLevel method deletes an item succesfully
        it('should delete an item succesfully', async(inject([LevelService, MockBackend], (service: LevelService, mock) => {
            // arrange
            let itemId = 1;

            let mockResponse = new Response(new ResponseOptions({ body: null, status: 204, type: null, statusText: 'No Content' }));

            mock.connections.subscribe(conn => {
                conn.mockRespond(mockResponse);
            });

            // act
            service.deleteLevel(itemId).subscribe(result => {
                // assert
                expect(result).toBeDefined();
                expect(result.ok).toEqual(mockResponse.ok);
            });
        })));

        // test to validate the DeleteLevel method returns an exception
        it('should return an exception', async(inject([LevelService, MockBackend], (service: LevelService, mock) => {
            // arrange
            let itemId = -1;
            mock.connections.subscribe(conn => {
                throw new Error('Any error message');
            });

            // act
            let errorFunction = () => service.deleteLevel(itemId).subscribe(result => { });

            // assert
            expect(errorFunction).toThrowError();
        })));
    });
});
