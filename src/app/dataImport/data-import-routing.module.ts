import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataImportComponent } from './data-import.component';

const dataImportRoutes: Routes = [
    {
        path: '',
        component: DataImportComponent,
    }
];

@NgModule(
    {
        imports: [
            RouterModule.forChild(dataImportRoutes)
        ],
        exports: [
            RouterModule
        ],
    }
)

export class DataImportRoutingModule { }
