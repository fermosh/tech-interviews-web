import { Component, OnInit, OnDestroy } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

import { ExcelToJsonService } from './../shared/services/excelToJson/excelToJson.service';

@Component({
    templateUrl: './data-import.component.html',
    styleUrls: ['./data-import.component.css']
})

export class DataImportComponent  {
    url: string = "https://evening-anchorage-3159.herokuapp.com/api/";  // Replace with API URL

    constructor(private excelToJsonService: ExcelToJsonService){}

    public fileOverBase(event: any): void {

    }

    public doSomething(item: any): void {
		this.excelToJsonService.requiredProperties = [ "id", "body", "answer", "skill.id", "skill.name"];;
		this.excelToJsonService.convert(item.some).subscribe(
			function(dataJsonResult) {
				console.log(dataJsonResult);
			},
			function(error){
				console.error(error);
			}
		);
    }
}