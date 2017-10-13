import { Component, OnInit, OnDestroy } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

import { ExcelToJsonService } from './../shared/services/excelToJson/excelToJson.service';
import { QuestionsImportService } from './../shared/services/bulkImport/questionsImport.service';

@Component({
    templateUrl: './data-import.component.html',
    styleUrls: ['./data-import.component.css']
})

export class DataImportComponent  {
	
	constructor(
		private excelToJsonService: ExcelToJsonService,
		private questionsImportService: QuestionsImportService){}

    public fileOverBase(event: any): void {

    }

    public proccessFile(item: any): void {
		this.excelToJsonService.requiredProperties = item.requiredProperties;
		this.excelToJsonService.convert(item.some).subscribe(
			dataJsonResult => {
				this.sendData(dataJsonResult);
			},
			error => {
				//TODO: show message to the user
			}
		);
	}
	public sendData(data: JSON): void{
		this.questionsImportService.importQuestions(data).subscribe(
			result => {
				//TODO: do something with the result
			},
			error => { 
				//TODO: show message to the user
			}
		);
	}
}