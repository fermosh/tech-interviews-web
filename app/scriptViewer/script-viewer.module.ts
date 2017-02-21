import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ScriptViewerComponent } from './script-viewer.component';
import { QuestionFilterPipe } from './pipes/question-filter.pipe';
import { ExerciseFilterPipe } from './pipes/exercise-filter.pipe';
import { ScriptViewerService } from './script-viewer.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'script-viewer/:templateId', component: ScriptViewerComponent }
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

export class ScriptViewerModule { }
