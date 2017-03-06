import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionListComponent } from './question-list.component';
import { QuestionDetailComponent } from './question-detail.component';
import { QuestionDetailGuard, QuestionEditGuard } from './question-guard.service';
import { QuestionEditComponent } from './question-edit.component';
import { QuestionService } from './question.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'questions', component: QuestionListComponent },
      { path: 'question/:id',
        canActivate: [ QuestionDetailGuard],
        component: QuestionDetailComponent
      },
      { path: 'question-edit/:id',
        canDeactivate: [ QuestionEditGuard ],
        component: QuestionEditComponent },
    ])
  ],
  declarations: [
    QuestionListComponent,
    QuestionDetailComponent,
    QuestionEditComponent
  ],
  providers: [
    QuestionService,
    QuestionDetailGuard,
    QuestionEditGuard
  ]
})

export class QuestionModule { }
