import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ScriptViewerComponent } from './script-viewer.component';
import { QuestionFilterPipe } from './question-filter.pipe';
import { ExerciseFilterPipe } from './exercise-filter.pipe';
import { ScriptViewerService } from './script-viewer.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
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