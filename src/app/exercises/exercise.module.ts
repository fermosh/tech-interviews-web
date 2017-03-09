import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ExerciseListComponent } from './exercise-list.component';
import { ExerciseDetailComponent } from './exercise-detail.component';
import { ExerciseDetailGuard, ExerciseEditGuard } from './exercise-guard.service';
import { ExerciseEditComponent } from './exercise-edit.component';
import { ExerciseService } from './exercise.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'exercise-list', component: ExerciseListComponent },
      { path: 'exercise/:id',
        canActivate: [ ExerciseDetailGuard],
        component: ExerciseDetailComponent
      },
      { path: 'exercise-edit/:id',
        canDeactivate: [ ExerciseEditGuard ],
        component: ExerciseEditComponent },
    ])
  ],
  declarations: [
    ExerciseListComponent,
    ExerciseDetailComponent,
    ExerciseEditComponent
  ],
  providers: [
    ExerciseService,
    ExerciseDetailGuard,
    ExerciseEditGuard
  ]
})

export class ExerciseModule { }
