import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryPointComponent } from './entryPoint.component';
//import { ScriptViewerComponent } from './../scriptViewer/script-viewer.component';

const entryPointRoutes: Routes = [
    {
        path: '',
        component: EntryPointComponent,
    },
    // {
    //     path: ':id',
    //     component: ScriptViewerComponent,
    // }
];

@NgModule(
    {
        imports: [
            RouterModule.forChild(entryPointRoutes)
        ],
        exports: [
            RouterModule
        ],
    }
)

export class EntryPointRoutingModule { }
