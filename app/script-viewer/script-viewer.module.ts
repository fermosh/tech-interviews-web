import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ScriptViewerComponent } from './script-viewer.component';
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
        ScriptViewerComponent
    ],
    providers: [
        ScriptViewerService
    ]
})

export class ScriptViewerModule {}