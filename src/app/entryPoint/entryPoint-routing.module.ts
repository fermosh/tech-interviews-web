import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryPointComponent } from './entryPoint.component';

const entryPointRoutes: Routes = [
    {
        path: '',
        component: EntryPointComponent,
    },
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
