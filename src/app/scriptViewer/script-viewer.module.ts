import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ScriptViewerComponent } from './script-viewer.component';
import { HistoryCommentComponent } from './components/history-comment.component';
import { ReportViewerComponent } from './components/report-viewer.component';
import { QuestionBankFilterPipe } from './pipes/question-bank-filter.pipe';
import { ExerciseBankFilterPipe } from './pipes/exercise-bank-filter.pipe';
import { ScriptViewerService } from './script-viewer.service';
import { SharedModule } from './../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'script-viewer/:templateId', component: ScriptViewerComponent }
        ])
    ],
    declarations: [
        ScriptViewerComponent,
        QuestionBankFilterPipe,
        ExerciseBankFilterPipe,
        HistoryCommentComponent,
        ReportViewerComponent
    ],
    providers: [
        ScriptViewerService
    ]
})

export class ScriptViewerModule { }
