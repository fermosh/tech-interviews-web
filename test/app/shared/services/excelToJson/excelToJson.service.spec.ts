import { async, inject, TestBed } from '@angular/core/testing';
import { BaseRequestOptions, Http, HttpModule, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { ExcelToJsonService } from './../../../../../src/app/shared/services/excelToJson/excelToJson.service';
import { ArrayToJsonService } from './../../../../../src/app/shared/services/excelToJson/arrayToJson.service';
import { Question } from './../../../../../src/app/shared/classes/question';

describe('Excel to Json Service', () => {
    let excelToJsonService: ExcelToJsonService;

    // array to mock http requests
    
    const questionsResult: Question[] = [
        {
            id: '1',
            body: `What's the purpose of standards/conventions in .NET C#?`,
            answer: ``,
            skill: { id: 973, name: 'Development' }
        },
        {
            id: '2',
            body: 'When to use string and when StringBuilder?',
            answer: ``,
            skill: { id: 973, name: 'Development' }
        },
        {
            id: '3',
            body: 'When to use var and when the exact data type?',
            answer: ``,
            skill: { id: 973, name: 'Development' }
        }];

    const questionsArrays: Array<Array<string>> = [
        [ "id", "body", "answer", "skill.id", "skill.name"],
        ["1", "What's the purpose of standards/conventions in .NET C#?", "", "973", "Development"],
        ["2", "When to use string and when StringBuilder?", "", "973", "Development"],
        ["3", "When to use var and when the exact data type?", "", "973", "Development" ]];


    // test initialization
    beforeEach(() => {
        excelToJsonService = new ExcelToJsonService(new ArrayToJsonService());
        excelToJsonService.data = questionsArrays;

        TestBed.configureTestingModule({
            providers: [ArrayToJsonService, ExcelToJsonService]
        });
    });

    // test to validate the service is defined once it is instatiated
    it('should be defined', async(inject([ExcelToJsonService], (service: ExcelToJsonService) => {
        // assert
        expect(service).toBeDefined();
    })));

    describe('validate(Method)', () => {
        // test to validate the validate method returns true
        it('should return true for valid required properties',
            async(inject([ExcelToJsonService], (service: ExcelToJsonService) => {
            //prepare service
            service.data = questionsArrays;
            service.requiredProperties = [ "id", "body", "answer", "skill.id", "skill.name"];
            
            // act
            let result = service["validate"](service.getKeys());
            // assert
            expect(result).toBeTruthy();
        })));
        
        // test to validate the validate method throws an error 
        it('should return an exception (a required property not present in the data)',
            async(inject([ExcelToJsonService], (service: ExcelToJsonService) => {
            //prepare service
            service.data = questionsArrays;
            service.requiredProperties = [ "id", "body", "answer", "otherMissedProperty"];
            
            // act
            let error = () => service["validate"](service.getKeys());
            // assert
            expect(error).toThrowError();
        })));
    });

    describe('processData(Method)', () => {                    
        // test to validate the processData method returns the expected quantity of items
        it('should return ' + questionsResult.length + ' elements',
        async(inject([ExcelToJsonService, ArrayToJsonService], (service: ExcelToJsonService) => {
            //prepare service
            service.data = questionsArrays;
            service.requiredProperties = [ "id", "body", "answer", "skill.id", "skill.name"];
            
            // act
            let result = service["processData"]();
            // assert
            expect(result.length).toEqual(questionsResult.length);
        })));


         // test to validate the processData method returns the expected items
         it('should return the expected result',
         async(inject([ExcelToJsonService, ArrayToJsonService], (service: ExcelToJsonService) => {
             //prepare service
             service.data = questionsArrays;
             service.requiredProperties = [ "id", "body", "answer", "skill.id", "skill.name"];
             
             // act
             let result = service["processData"]();
             // assert
             expect(result.length).toEqual(questionsResult.length);
         })));

         it('should ignore data if it does not have a property (column name)',
         async(inject([ExcelToJsonService, ArrayToJsonService], (service: ExcelToJsonService) => {
            let questionsWithExtraInfo: Array<Array<string>> = [
                [ "id", "body", "answer", "skill.id", "skill.name"],
                ["1", "What's the purpose of standards/conventions in .NET C#?", "", "973", "Development", "other info without property"],
                ["2", "When to use string and when StringBuilder?", "", "973", "Development", "other info without property"],
                ["3", "When to use var and when the exact data type?", "", "973", "Development", "other info without property" ]];

             //prepare service
             service.data = questionsWithExtraInfo;
             service.requiredProperties = [ "id", "body", "answer", "skill.id", "skill.name"];
             
             // act
             let result = service["processData"]();
             // assert
             expect(result.length).toEqual(questionsResult.length);
         })));
        
        
         // test to validate the processData method returns false
         it('should return an exception (a required property not present in the data)',
         async(inject([ExcelToJsonService], (service: ExcelToJsonService) => {
            //prepare service
            service.data = questionsArrays;
            service.requiredProperties = [ "id", "body", "answer", "otherMissedProperty"];
            
            // act
            let error = () => service["processData"]();
            // assert
            expect(error).toThrowError();
     })));
    });

    describe('getData(Method)', () => {
        // test to validate the getData method returns the expected value array
        it('should return the expected result',
            async(inject([ExcelToJsonService], (service: ExcelToJsonService) => {
                //prepare service
                service.data = questionsArrays;
                // act
                let result = service.getData();
                // assert
                expect(result).toEqual(questionsArrays);
        })));
    });

    describe('getKeys(Method)', () => {
        // test to validate the getKeys method returns the expected value array
        it('should return the expected result',
            async(inject([ExcelToJsonService], (service: ExcelToJsonService) => {
                //prepare service
                service.data = questionsArrays;
                // act
                let result = service.getKeys();
                // assert
                expect(result).toEqual(questionsArrays[0]);
        })));
 
    });
});
