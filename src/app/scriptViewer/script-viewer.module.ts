import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ScriptViewerComponent } from './script-viewer.component';
import { HistoryCommentComponent } from './components/history-comment.component';
import { ReportViewerComponent } from './components/report-viewer.component';
import { QuestionBankFilterPipe } from './pipes/question-bank-filter.pipe';
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
        ReportViewerComponent
    ]
})

export class ScriptViewerModule { }
