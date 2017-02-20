import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InterviewScriptData } from './interview-script-data';

import { ScriptViewerComponent } from './script-viewer.component';
import { QuestionFilterPipe } from './pipes/question-filter.pipe';
import { ExerciseFilterPipe } from './pipes/exercise-filter.pipe';
import { ScriptViewerService } from './script-viewer.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        InMemoryWebApiModule.forRoot(InterviewScriptData),
        RouterModule.forChild([
            { path: 'script-viewer', component: ScriptViewerComponent }
        ])
    ],
    declarations: [
        ScriptViewerComponent,
        QuestionFilterPipe,
        ExerciseFilterPipe
    ],
    providers: [
        ScriptViewerService
    ]
})

export class ScriptViewerModule {}