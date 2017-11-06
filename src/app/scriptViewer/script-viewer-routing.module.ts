import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScriptViewerComponent } from './script-viewer.component';

const scriptViewerRoutes: Routes = [
    {
        path: ':type/:id',
        component: ScriptViewerComponent,
    }
];

@NgModule(
    {
        imports: [
            RouterModule.forChild(scriptViewerRoutes)
        ],
        exports: [
            RouterModule
        ],
    }
)

export class ScriptViewerRoutingModule { }
