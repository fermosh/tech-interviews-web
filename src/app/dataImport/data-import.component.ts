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
		item.isSuccess = false;
        item.isError = false;
        item.isUploading = true;
        item.statusMessage = "";
		this.excelToJsonService.requiredProperties = item.requiredProperties;
		this.excelToJsonService.convert(item.some).subscribe(
			dataJsonResult => {
				this.sendData(dataJsonResult, item);
			},
			error => {
				item.isSuccess = false;
				item.isError = true;
				item.isUploading = false;
				item.statusMessage = "There was an error when converting file to Json. " + (<any>error);
			}
		);
	}
	public sendData(data: JSON, item: any): void{
		this.questionsImportService.importQuestions(data).subscribe(
			result => {
				item.isUploading = false;
				if (result.length > 0) {
					item.isError = true;
					item.statusMessage = "There were errors when uploading the file:<br>";
					result.forEach(e => item.statusMessage = item.statusMessage 
						+ "---------------------------------------" 
						+ "<br><b>Entity: </b>" + e.entity 
						+ "<br><b>Description: </b>" + e.errorDescription + "<br>");
				} else {
					item.isSuccess = true;
					item.statusMessage = "Success";
				}
			},
			error => { 
				item.isSuccess = false;
				item.isError = true;
				item.isUploading = false;
				item.statusMessage = "There was an error when uploading the file. " + (<any>error);
			}
		);
	}
}