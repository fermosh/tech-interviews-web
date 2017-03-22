import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseListComponent } from './exercise-list.component';
import { ExerciseEditComponent } from './exercise-edit.component';
import { CanDeactivateGuard }     from '../can-deactivate-guard.service';

const exerciseRoutes: Routes = [
    {
        path: '',
        component: ExerciseListComponent,
    },
    {
        path: ':id',
        component: ExerciseEditComponent,
        canDeactivate: [CanDeactivateGuard],
    }
];

@NgModule(
    {
        imports: [
            RouterModule.forChild(exerciseRoutes)
        ],
        exports: [
            RouterModule
        ],
    }
)

export class ExerciseRoutingModule { }
