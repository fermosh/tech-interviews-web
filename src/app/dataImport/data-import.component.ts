import { Component, OnInit, OnDestroy } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

import { ExcelToJsonService } from './../shared/services/excelToJson/excelToJson.service';

@Component({
    templateUrl: './data-import.component.html',
    styleUrls: ['./data-import.component.css']
})

export class DataImportComponent  {
	url: string = "https://evening-anchorage-3159.herokuapp.com/api/";  //TODO: Replace with API URL

    constructor(private excelToJsonService: ExcelToJsonService){}

    public fileOverBase(event: any): void {

    }

    public proccessFile(item: any): void {
		this.excelToJsonService.requiredProperties = item.requiredProperties;
		this.excelToJsonService.convert(item.some).subscribe(
			function(dataJsonResult) {
				//TODO: Replace with the process to send this dataJsonResult to server
				console.log(dataJsonResult);
			},
			function(error){
				console.error(error);
			}
		);
    }
}