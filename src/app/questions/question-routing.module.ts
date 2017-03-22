import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionListComponent } from './question-list.component';
import { QuestionEditComponent } from './question-edit.component';
import { CanDeactivateGuard }     from '../can-deactivate-guard.service';

const questionRoutes: Routes = [
    {
        path: '',
        component: QuestionListComponent,
    },
    {
        path: ':id',
        component: QuestionEditComponent,
        canDeactivate: [CanDeactivateGuard],
    }
];

@NgModule(
    {
        imports: [
            RouterModule.forChild(questionRoutes)
        ],
        exports: [
            RouterModule
        ],
    }
)

export class QuestionRoutingModule { }
