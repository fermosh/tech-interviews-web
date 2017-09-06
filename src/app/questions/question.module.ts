import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionListComponent } from './question-list.component';
import { QuestionDetailGuard, QuestionEditGuard } from './question-guard.service';
import { QuestionEditComponent } from './question-edit.component';
import { SharedModule } from '../shared/shared.module';
import { QuestionRoutingModule } from './question-routing.module';

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
            QuestionDetailGuard,
            QuestionEditGuard
        ]
    }
)

export class QuestionModule { }
