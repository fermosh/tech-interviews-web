import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseListComponent } from './exercise-list.component';
import { ExerciseEditComponent } from './exercise-edit.component';
import { CanDeactivateGuard }     from '../can-deactivate-guard.service';
import { ExerciseEditGuard } from './exercise-guard.service';

const routes: Routes = [
    {
        path: '',
        component: ExerciseListComponent,
    },
    {
        path: ':id',
        component: ExerciseEditComponent,
        canDeactivate: [ExerciseEditGuard],
    }
];

@NgModule(
    {
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    }
)

export class ExerciseRoutingModule { }
