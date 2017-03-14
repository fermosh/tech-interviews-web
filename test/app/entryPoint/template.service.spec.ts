import { async, inject, TestBed } from '@angular/core/testing';
import { BaseRequestOptions, Http, HttpModule, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { TemplateService } from './../../../src/app/entryPoint/services/template.service';
import { ITemplate } from './../../../src/app/entryPoint/interfaces/template';

describe('Template Service: ', () => {

    // array to mock http requests
    const templateResult: ITemplate[] = [{ id: 1, skillIds: [1, 2] }, { id: 2, skillIds: [3, 4] }, { id: 3, skillIds: [5, 6] }];

    // test initialization
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TemplateService, MockBackend, BaseRequestOptions,
                {
                    provide: Http, useFactory: (backend, options) => new Http(backend, options), deps: [MockBackend, BaseRequestOptions]
                }
            ],
            imports: [HttpModule]
        });
    });

    // test to validate the service is defined once it is instatiated
    it('should be defined', async(inject([TemplateService, MockBackend], (service: TemplateService, mock) => {
        // assert
        expect(service).toBeDefined();
    })));

    describe('getTemplates method', () => {

        // test to validate the getTemplates method is an array and returns the expected value array
        it('should be an Array and return the expected result',
            async(inject([TemplateService, MockBackend], (service: TemplateService, mock) => {
                // arrange
                mock.connections.subscribe(conn => {
                    conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify({ data: templateResult }) })));
                });

                // act
                service.getTemplates().subscribe(result => {
                    // assert
                    expect(result).toEqual(jasmine.any(Array));
                    expect(result).toEqual(templateResult);
                });
            })));

        // test to validate the getTemplates method returns the expected quantity of items
        it('should return ' + templateResult.length + ' elements',
            async(inject([TemplateService, MockBackend], (service: TemplateService, mock) => {
                // arrange
                mock.connections.subscribe(conn => {
                    conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify({ data: templateResult }) })));
                });

                // act
                service.getTemplates().subscribe(result => {
                    // assert
                    expect(result.length).toEqual(templateResult.length);
                });
            })));

        // test to validate the getTemplates method returns an exception
        it('should return an exception', async(inject([TemplateService, MockBackend], (service: TemplateService, mock) => {
            // arrange
            mock.connections.subscribe(conn => {
                throw new Error('Any error message');
            });

            // act
            let errorFunction = () => service.getTemplates().subscribe(result => { });

            // assert
            expect(errorFunction).toThrowError();
        })));
    });

    describe('getTemplate method', () => {

        // test to validate the getTemplate method returns a defined value
        it('should return a defined item', async(inject([TemplateService, MockBackend], (service: TemplateService, mock) => {

            // arrange
            let mockItem = templateResult[0];
            mock.connections.subscribe(conn => {
                conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify({ data: mockItem }) })));
            });

            // act
            service.getTemplate(mockItem.id).subscribe(result => {
                // assert
                expect(result).toBeDefined();
            });
        })));

        // test to validate the getTemplate method returns the expected value
        it('should return the expected value', async(inject([TemplateService, MockBackend], (service: TemplateService, mock) => {
            // arrange
            let mockItem = templateResult[0];
            mock.connections.subscribe(conn => {
                conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify({ data: mockItem }) })));
            });

            // act
            service.getTemplate(mockItem.id).subscribe(result => {
                // assert
                expect(result).toBeDefined();
                expect(result).toEqual(mockItem);
            });
        })));

        // test to validate the getTemplate method returns an exception
        it('should return an exception', async(inject([TemplateService, MockBackend], (service: TemplateService, mock) => {
            // arrange
            mock.connections.subscribe(conn => {
                throw new Error('Any error message');
            });

            // act
            let errorFunction = () => service.getTemplate(null).subscribe(result => { });

            // assert
            expect(errorFunction).toThrowError();
        })));
    });

    describe('saveTemplate method', () => {

        // test to validate the saveTemplate method saves an item succesfully
        it('should create an item succesfully', async(inject([TemplateService, MockBackend], (service: TemplateService, mock) => {

            // arrange
            let mockItem: ITemplate = { id: 0, skillIds: [1, 2] };
            let response = { id: 1, skillIds: [1, 2] };

            mock.connections.subscribe(conn => {
                conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify({ data: response }) })));
            });

            // act
            service.saveTemplate(mockItem).subscribe(result => {
                // assert
                expect(result).toBeDefined();
                expect(result).toEqual(response);
            });
        })));

        // test to validate the saveTemplate method updates an item succesfully
        it('should update an item succesfully', async(inject([TemplateService, MockBackend], (service: TemplateService, mock) => {
            // arrange
            let mockItem: ITemplate = { id: 50, skillIds: [1, 2] };

            mock.connections.subscribe(conn => {
                conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify({ data: mockItem }) })));
            });

            // act
            service.saveTemplate(mockItem).subscribe(result => {
                // assert
                expect(result).toBeDefined();
                expect(result).toEqual(mockItem);
            });
        })));

        // test to validate the saveTemplate method returns an exception
        it('should return an exception', async(inject([TemplateService, MockBackend], (service: TemplateService, mock) => {
            // arrange
            let mockItem: ITemplate = { id: 50, skillIds: [1, 2] };

            mock.connections.subscribe(conn => {
                throw new Error('Any error message');
            });

            // act
            let errorFunction = () => service.saveTemplate(mockItem).subscribe(result => { });

            // assert
            expect(errorFunction).toThrowError();
        })));
    });

    describe('deleteTemplate method', () => {

        // test to validate the deleteTemplate method deletes an item succesfully
        it('should delete an item succesfully', async(inject([TemplateService, MockBackend], (service: TemplateService, mock) => {
            // arrange
            let itemId = 1;

            let mockResponse = new Response(new ResponseOptions({ body: null, status: 204, type: null, statusText: 'No Content' }));

            mock.connections.subscribe(conn => {
                conn.mockRespond(mockResponse);
            });

            // act
            service.deleteTemplate(itemId).subscribe(result => {
                // assert
                expect(result).toBeDefined();
                expect(result.ok).toEqual(mockResponse.ok);
            });
        })));

        // test to validate the deleteTemplate method returns an exception
        it('should return an exception', async(inject([TemplateService, MockBackend], (service: TemplateService, mock) => {
            // arrange
            let itemId = -1;
            mock.connections.subscribe(conn => {
                throw new Error('Any error message');
            });

            // act
            let errorFunction = () => service.deleteTemplate(itemId).subscribe(result => { });

            // assert
            expect(errorFunction).toThrowError();
        })));
    });
});
