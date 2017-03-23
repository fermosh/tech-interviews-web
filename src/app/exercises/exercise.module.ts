import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ExerciseListComponent } from './exercise-list.component';
import { ExerciseDetailGuard, ExerciseEditGuard } from './exercise-guard.service';
import { ExerciseEditComponent } from './exercise-edit.component';
import { ExerciseRoutingModule } from './exercise-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule(
    {
        imports: [
            SharedModule,
            ReactiveFormsModule,
            ExerciseRoutingModule
        ],
        declarations: [
            ExerciseListComponent,
            ExerciseEditComponent
        ],
        providers: [
            ExerciseDetailGuard,
            ExerciseEditGuard
        ]
    }
)

export class ExerciseModule { }
