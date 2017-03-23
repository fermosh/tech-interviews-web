import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ExerciseListComponent } from './exercise-list.component';
import { ExerciseDetailGuard, ExerciseEditGuard } from './exercise-guard.service';
import { ExerciseEditComponent } from './exercise-edit.component';
import { ExerciseService } from './../shared/services/exercise.service';
import { ExerciseRoutingModule } from './exercise-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SkillMatrixService } from './../shared/services/skill-matrix.service';

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
            ExerciseService,
            SkillMatrixService,
            ExerciseDetailGuard,
            ExerciseEditGuard
        ]
    }
)

export class ExerciseModule { }
