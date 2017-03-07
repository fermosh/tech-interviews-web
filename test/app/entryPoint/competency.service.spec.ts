import { async, inject, TestBed } from '@angular/core/testing';
import { BaseRequestOptions, Http, HttpModule, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { CompetencyService } from './../../../src/app/entryPoint/competency.service';
import { ICompetency } from './../../../src/app/entryPoint/competency';

describe('Competency Service', () => {

    // array to mock http requests
    const competencyResult: ICompetency[] = [{ id: 1, name: '.Net' }, { id: 2, name: 'Javascript' }, { id: 3, name: 'DevOps' }];

    // test initialization
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CompetencyService, MockBackend, BaseRequestOptions,
                {
                    provide: Http, useFactory: (backend, options) => new Http(backend, options), deps: [MockBackend, BaseRequestOptions]
                }
            ],
            imports: [HttpModule]
        });
    });

    // test to validate the service is defined once it is instatiated
    it('should be defined', async(inject([CompetencyService, MockBackend], (service: CompetencyService, mock) => {
        // assert
        expect(service).toBeDefined();
    })));

    describe('GetCompetencies(Method)', () => {

        // test to validate the getCompetencies method is an array and returns the expected value array
        it('should be an Array and return the expected result',
            async(inject([CompetencyService, MockBackend], (service: CompetencyService, mock) => {
            // arrange
            mock.connections.subscribe(conn => {
                conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify({ data: competencyResult }) })));
            });

            // act
            service.getCompetencies().subscribe(result => {
                // assert
                expect(result).toEqual(jasmine.any(Array));
                expect(result).toEqual(competencyResult);
            });
        })));

        // test to validate the getCompetencies method returns the expected quantity of items
        it('should return ' + competencyResult.length + ' elements',
        async(inject([CompetencyService, MockBackend], (service: CompetencyService, mock) => {
            // arrange
            mock.connections.subscribe(conn => {
                conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify({ data: competencyResult }) })));
            });

            // act
            service.getCompetencies().subscribe(result => {
                // assert
                expect(result.length).toEqual(competencyResult.length);
            });
        })));

        // test to validate the getCompetencies method returns an exception
        it('should return an exception', async(inject([CompetencyService, MockBackend], (service: CompetencyService, mock) => {
            // arrange
            mock.connections.subscribe(conn => {
                throw new Error('Any error message');
            });

            // act
            let errorFunction = () => service.getCompetencies().subscribe(result => { });

            // assert
            expect(errorFunction).toThrowError();
        })));
    });

    describe('GetCompetency(Method)', () => {

        // test to validate the GetCompetency method returns a defined value
        it('should return a defined item', async(inject([CompetencyService, MockBackend], (service: CompetencyService, mock) => {

            // arrange
            let mockItem = competencyResult[0];
            mock.connections.subscribe(conn => {
                conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify({ data: mockItem }) })));
            });

            // act
            service.getCompetency(mockItem.id).subscribe(result => {
                // assert
                expect(result).toBeDefined();
            });
        })));

        // test to validate the GetCompetency method returns the expected value
        it('should return the expected value', async(inject([CompetencyService, MockBackend], (service: CompetencyService, mock) => {
            // arrange
            let mockItem = competencyResult[0];
            mock.connections.subscribe(conn => {
                conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify({ data: mockItem }) })));
            });

            // act
            service.getCompetency(mockItem.id).subscribe(result => {
                // assert
                expect(result.id).toEqual(mockItem.id);
                expect(result.name).toEqual(mockItem.name);
                expect(result).toEqual(mockItem);
            });
        })));

        // test to validate the GetCompetency method returns an exception
        it('should return an exception', async(inject([CompetencyService, MockBackend], (service: CompetencyService, mock) => {
            // arrange
            mock.connections.subscribe(conn => {
                throw new Error('Any error message');
            });

            // act
            let errorFunction = () => service.getCompetency(null).subscribe(result => { });

            // assert
            expect(errorFunction).toThrowError();
        })));
    });

    describe('SaveCompetency(Method)', () => {

        // test to validate the SaveCompetency method saves an item succesfully
        it('should save an item succesfully', async(inject([CompetencyService, MockBackend], (service: CompetencyService, mock) => {

            // arrange
            let mockItem: ICompetency = { id: 0, name: 'New Competency' };
            let response = { id: 1, name: mockItem.name };

            mock.connections.subscribe(conn => {
                conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify({ data: response }) })));
            });

            // act
            service.saveCompetency(mockItem).subscribe(result => {
                // assert
                expect(result).toBeDefined();
                expect(result.id).toEqual(response.id);
                expect(result.name).toEqual(response.name);
            });
        })));

        // test to validate the SaveCompetency method updates an item succesfully
        it('should update an item succesfully', async(inject([CompetencyService, MockBackend], (service: CompetencyService, mock) => {

            // arrange
            let mockItem: ICompetency = { id: 50, name: 'Updated Competency' };

            mock.connections.subscribe(conn => {
                conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify({ data: mockItem }) })));
            });

            // act
            service.saveCompetency(mockItem).subscribe(result => {
                // assert
                expect(result).toBeDefined();
                expect(result.id).toEqual(mockItem.id);
                expect(result.name).toEqual(mockItem.name);
            });
        })));

        // test to validate the GetCompetency method returns an exception
        it('should return an exception', async(inject([CompetencyService, MockBackend], (service: CompetencyService, mock) => {
            // arrange
            let mockItem: ICompetency = { id: 50, name: 'Competency' };
            mock.connections.subscribe(conn => {
                throw new Error('Any error message');
            });

            // act
            let errorFunction = () => service.saveCompetency(mockItem).subscribe(result => { });

            // assert
            expect(errorFunction).toThrowError();
        })));
    });

    describe('DeleteCompetency(Method)', () => {

        // test to validate the DeleteCompetency method deletes an item succesfully
        it('should delete an item succesfully', async(inject([CompetencyService, MockBackend], (service: CompetencyService, mock) => {
            // arrange
            let itemId = 1;

            let mockResponse = new Response(new ResponseOptions({body: null, status: 204, type: null, statusText: 'No Content' }));

            mock.connections.subscribe(conn => {
                conn.mockRespond(mockResponse);
            });

            // act
            service.deleteCompetency(itemId).subscribe(result => {
                // assert
                expect(result).toBeDefined();
                expect(result.ok).toEqual(mockResponse.ok);
            });
        })));

        // test to validate the DeleteCompetency method returns an exception
        it('should return an exception', async(inject([CompetencyService, MockBackend], (service: CompetencyService, mock) => {
            // arrange
            let itemId = -1;
            mock.connections.subscribe(conn => {
                throw new Error('Any error message');
            });

            // act
            let errorFunction = () => service.deleteCompetency(itemId).subscribe(result => { });

            // assert
            expect(errorFunction).toThrowError();
        })));
    });
});
