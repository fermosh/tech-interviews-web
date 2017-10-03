import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

import { ArrayToJsonService } from './arrayToJson.service';


type AoA = Array<Array<any>>;

@Injectable()
export class ExcelToJsonService{
    public data: AoA;
    private observableProcess: any;
    public jsonResult: Array<JSON>;
    public requiredProperties: Array<string>;
    public ignoreNonRequiredProperties: boolean = false;

    constructor(private arrayToJsonService: ArrayToJsonService){ };

    private convertArrayToJson(data: AoA): Array<JSON>{
        /* convert arrays to json */
        const optionArrayConversion = {
            isColOriented: false,
            omitEmptyFields: false
        };

        /* set an empty array if is not ignoring */
        let requiredProperties = this.requiredProperties;
        if(!this.ignoreNonRequiredProperties)
            requiredProperties = [];

        return this.arrayToJsonService.processArray(data, optionArrayConversion, requiredProperties);
    }

    public getData(): AoA{
        return this.data;
    }

    private validate(keys: Array<string>): boolean {
        for (var i = 0; i < this.requiredProperties.length; i++) {
            if(!keys.includes(this.requiredProperties[i])){
                throw new Error(`Column "${this.requiredProperties[i]}" is missing in the file and it's required.`);
            }
        }
        return true;
    }
    
    public getKeys(): Array<string>{
        if(this.data === undefined)
            return [];

        let processedKeys: Array<string> = [];
        let keys = this.data[0];

        for(var i = 0; i < keys.length; i++){
            processedKeys.push(this.arrayToJsonService.trimKeyName(keys[i]));
        }
        return processedKeys;
    }

    private processData(): Array<JSON>{
        let keys = this.getKeys();
        if(this.validate(keys)){
            return this.convertArrayToJson(this.getData());
        }
        return [];
    }

    private readExcel(binaryString: any): AoA {
         /* read workbook */         
         const workbook = XLSX.read(binaryString, {type:'binary'});

         /* grab first sheet */
         const workSheetName = workbook.SheetNames[0];
         const workSheet = workbook.Sheets[workSheetName];

         /* Return an array of arrays */
         return <AoA>(XLSX.utils.sheet_to_json(workSheet, {header:1}));
    }

    public convert(file: any) : Observable<JSON>{
        const reader = new FileReader();
      
        if(file === undefined) { 
            throw new Error("There is not file uploaded.") 
        };

        /* make reader.onload observable */
        this.observableProcess = Observable.create((observer: any) => {
            reader.onload = (e: any) => {
                this.data = this.readExcel(e.target.result);
                
                this.jsonResult = this.processData();
                
                observer.next(this.jsonResult);
                observer.complete();
            };
        });
        reader.readAsBinaryString(file);
        return this.observableProcess;
    }
}