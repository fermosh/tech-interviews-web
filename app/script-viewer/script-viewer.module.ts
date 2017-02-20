import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { SkillMatrixData } from '../scriptViewer/skill-matrix-data';

import { ScriptViewerComponent } from './script-viewer.component';
import { ScriptViewerService } from './script-viewer.service';
import { SkillService } from '../scriptViewer/skill-service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        InMemoryWebApiModule.forRoot(SkillMatrixData),
        RouterModule.forChild([
            { path: 'script-viewer', component: ScriptViewerComponent }
        ])        
    ],
    declarations: [
        ScriptViewerComponent
    ],
    providers: [
        ScriptViewerService,
        SkillService
    ]
})

export class ScriptViewerModule {}