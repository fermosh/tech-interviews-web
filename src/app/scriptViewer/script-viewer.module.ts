import { NgModule } from '@angular/core';
import { ScriptViewerComponent } from './script-viewer.component';
import { HistoryCommentComponent } from './components/history-comment.component';
import { ReportViewerComponent } from './components/report-viewer.component';
import { QuestionBankFilterPipe } from './pipes/question-bank-filter.pipe';
import { StarComponent } from './components/star.component';
import { ScoreComponent } from './components/score.component';
import { SharedModule } from './../shared/shared.module';
import { SortablejsModule } from 'angular-sortablejs';
import { ScriptViewerRoutingModule } from './script-viewer-routing.module';

@NgModule({
    imports: [
        SharedModule,
        SortablejsModule,
        ScriptViewerRoutingModule
    ],
    declarations: [
        ScriptViewerComponent,
        QuestionBankFilterPipe,
        HistoryCommentComponent,
        StarComponent,
        ScoreComponent,
        ReportViewerComponent
    ]
})

export class ScriptViewerModule { }
