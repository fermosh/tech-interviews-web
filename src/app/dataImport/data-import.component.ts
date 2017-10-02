import { Component, OnInit, OnDestroy } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
    templateUrl: './data-import.component.html',
    styleUrls: ['./data-import.component.css']
})

export class DataImportComponent  {
    url: string = "https://evening-anchorage-3159.herokuapp.com/api/";  // Replace with API URL

    public fileOverBase(event: any): void {

    }

    public doSomething(item: any): void {
        item.upload();
    }
}