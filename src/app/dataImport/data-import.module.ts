import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { DataImportComponent } from './data-import.component';
import { FileUploadComponent } from './../shared/components/fileUpload/file-upload.component';
import { DataImportRoutingModule } from './data-import-routing.module';
import { FileDropDirective } from 'ng2-file-upload';

@NgModule({
    imports: [
        SharedModule,
        DataImportRoutingModule
    ],
    declarations: [
        DataImportComponent,
        FileUploadComponent,
        FileDropDirective
    ]
})

export class DataImportModule { }
