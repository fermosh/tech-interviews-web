import { async, inject, TestBed } from '@angular/core/testing';
import { BaseRequestOptions, Http, HttpModule, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { DomainService } from './../../../src/app/entryPoint/services/domain.service';
import { IDomain } from './../../../src/app/entryPoint/interfaces/domain';

describe('Domain Service: ', () => {

    // array to mock http requests
    const domainResult: IDomain[] = [
        { id: 1, name: 'FrontEnd web development', competencyId: 1, levelId: 1, skillMatrixId: 13 },
        { id: 2, name: 'Backend development', competencyId: 1, levelId: 1, skillMatrixId: 14 },
        { id: 3, name: 'FrontEnd desktop development', competencyId: 1, levelId: 1, skillMatrixId: 13 }
    ];

    // test initialization
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [DomainService, MockBackend, BaseRequestOptions,
                {
                    provide: Http, useFactory: (backend, options) => new Http(backend, options), deps: [MockBackend, BaseRequestOptions]
                }
            ],
            imports: [HttpModule]
        });
    });

    // test to validate the service is defined once it is instatiated
    it('should be defined', async(inject([DomainService, MockBackend], (service: DomainService, mock) => {
        // assert
        expect(service).toBeDefined();
    })));

    describe('getDomains method', () => {

        // test to validate the getDomains method is an array and returns the expected value array
        it('should be an Array and return the expected result',
            async(inject([DomainService, MockBackend], (service: DomainService, mock) => {
                // arrange
                mock.connections.subscribe(conn => {
                    conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify({ data: domainResult }) })));
                });

                // act
                service.getDomains().subscribe(result => {
                    // assert
                    expect(result).toEqual(jasmine.any(Array));
                    expect(result).toEqual(domainResult);
                });
            })));

        // test to validate the getDomains method returns the expected quantity of items
        it('should return ' + domainResult.length + ' elements',
            async(inject([DomainService, MockBackend], (service: DomainService, mock) => {
                // arrange
                mock.connections.subscribe(conn => {
                    conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify({ data: domainResult }) })));
                });

                // act
                service.getDomains().subscribe(result => {
                    // assert
                    expect(result.length).toEqual(domainResult.length);
                });
            })));

        // test to validate the getDomains method returns an exception
        it('should return an exception', async(inject([DomainService, MockBackend], (service: DomainService, mock) => {
            // arrange
            mock.connections.subscribe(conn => {
                throw new Error('Any error message');
            });

            // act
            let errorFunction = () => service.getDomains().subscribe(result => { });

            // assert
            expect(errorFunction).toThrowError();
        })));
    });

    describe('getDomain method', () => {

        // test to validate the getDomain method returns a defined value
        it('should return a defined item', async(inject([DomainService, MockBackend], (service: DomainService, mock) => {

            // arrange
            let mockItem = domainResult[0];
            mock.connections.subscribe(conn => {
                conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify({ data: mockItem }) })));
            });

            // act
            service.getDomain(mockItem.id).subscribe(result => {
                // assert
                expect(result).toBeDefined();
            });
        })));

        // test to validate the getDomain method returns the expected value
        it('should return the expected value', async(inject([DomainService, MockBackend], (service: DomainService, mock) => {
            // arrange
            let mockItem = domainResult[0];
            mock.connections.subscribe(conn => {
                conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify({ data: mockItem }) })));
            });

            // act
            service.getDomain(mockItem.id).subscribe(result => {
                // assert
                expect(result).toBeDefined();
                expect(result).toEqual(mockItem);
            });
        })));

        // test to validate the getDomain method returns an exception
        it('should return an exception', async(inject([DomainService, MockBackend], (service: DomainService, mock) => {
            // arrange
            mock.connections.subscribe(conn => {
                throw new Error('Any error message');
            });

            // act
            let errorFunction = () => service.getDomain(null).subscribe(result => { });

            // assert
            expect(errorFunction).toThrowError();
        })));
    });

    describe('saveDomain method', () => {

        // test to validate the saveDomain method saves an item succesfully
        it('should create an item succesfully', async(inject([DomainService, MockBackend], (service: DomainService, mock) => {

            // arrange
            let mockItem: IDomain = { id: 0, name: 'FrontEnd web development', competencyId: 1, levelId: 1, skillMatrixId: 13 };
            let response = {
                id: 1, name: mockItem.name, competencyId: mockItem.competencyId, levelId: mockItem.levelId,
                skillMatrixId: mockItem.skillMatrixId
            };

            mock.connections.subscribe(conn => {
                conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify({ data: response }) })));
            });

            // act
            service.saveDomain(mockItem).subscribe(result => {
                // assert
                expect(result).toBeDefined();
                expect(result).toEqual(response);
            });
        })));

        // test to validate the saveDomain method updates an item succesfully
        it('should update an item succesfully', async(inject([DomainService, MockBackend], (service: DomainService, mock) => {
            // arrange
            let mockItem: IDomain = { id: 50, name: 'FrontEnd web development', competencyId: 1, levelId: 1, skillMatrixId: 13 };

            mock.connections.subscribe(conn => {
                conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify({ data: mockItem }) })));
            });

            // act
            service.saveDomain(mockItem).subscribe(result => {
                // assert
                expect(result).toBeDefined();
                expect(result).toEqual(mockItem);
            });
        })));

        // test to validate the saveDomain method returns an exception
        it('should return an exception', async(inject([DomainService, MockBackend], (service: DomainService, mock) => {
            // arrange
            let mockItem: IDomain = { id: 50, name: 'FrontEnd web development', competencyId: 1, levelId: 1, skillMatrixId: 13 };

            mock.connections.subscribe(conn => {
                throw new Error('Any error message');
            });

            // act
            let errorFunction = () => service.saveDomain(mockItem).subscribe(result => { });

            // assert
            expect(errorFunction).toThrowError();
        })));
    });

    describe('deleteDomain method', () => {

        // test to validate the deleteDomain method deletes an item succesfully
        it('should delete an item succesfully', async(inject([DomainService, MockBackend], (service: DomainService, mock) => {
            // arrange
            let itemId = 1;

            let mockResponse = new Response(new ResponseOptions({ body: null, status: 204, type: null, statusText: 'No Content' }));

            mock.connections.subscribe(conn => {
                conn.mockRespond(mockResponse);
            });

            // act
            service.deleteDomain(itemId).subscribe(result => {
                // assert
                expect(result).toBeDefined();
                expect(result.ok).toEqual(mockResponse.ok);
            });
        })));

        // test to validate the deleteDomain method returns an exception
        it('should return an exception', async(inject([DomainService, MockBackend], (service: DomainService, mock) => {
            // arrange
            let itemId = -1;
            mock.connections.subscribe(conn => {
                throw new Error('Any error message');
            });

            // act
            let errorFunction = () => service.deleteDomain(itemId).subscribe(result => { });

            // assert
            expect(errorFunction).toThrowError();
        })));
    });
});
