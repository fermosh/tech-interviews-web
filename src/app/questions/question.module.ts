import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionListComponent } from './question-list.component';
import { QuestionDetailGuard, QuestionEditGuard } from './question-guard.service';
import { QuestionEditComponent } from './question-edit.component';
import { QuestionService } from './../shared/services/question.service';
import { SharedModule } from '../shared/shared.module';
import { QuestionRoutingModule } from './question-routing.module';
import { SkillMatrixService } from './../shared/services/skill-matrix.service';

@NgModule(
  {
      imports: [
          SharedModule,
          ReactiveFormsModule,
          QuestionRoutingModule
        ],
        declarations: [
            QuestionListComponent,
            QuestionEditComponent
        ],
        providers: [
            QuestionService,
            SkillMatrixService,
            QuestionDetailGuard,
            QuestionEditGuard
        ]
    }
)

export class QuestionModule {
    constructor(router: Router) {
        console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
 }
