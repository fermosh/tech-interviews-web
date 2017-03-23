import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseListComponent } from './exercise-list.component';
import { ExerciseEditComponent } from './exercise-edit.component';
import { CanDeactivateGuard }     from '../can-deactivate-guard.service';

const routes: Routes = [
    {
        path: '',
        component: ExerciseListComponent,
    },
    {
        path: 'exercises/:id',
        component: ExerciseEditComponent,
        canDeactivate: [CanDeactivateGuard],
    }
];

@NgModule(
    {
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    }
)

export class ExerciseRoutingModule { }
