import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { EntryPointComponent } from './entryPoint.component'
import { EntryPointService } from './entryPoint.service'

// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

// import { CompetencyService } from './entryPoint/competency-service';
// import { LevelService } from './entryPoint/level-service';
// import { DomainService } from './entryPoint/domain-service';

// import { CompetencyData } from './competency-data';
// import { LevelData } from './level-data';
// import { DomainData } from './domain-data';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        // InMemoryWebApiModule.forRoot(CompetencyData),
        // InMemoryWebApiModule.forRoot(LevelData),
        // InMemoryWebApiModule.forRoot(DomainData),
    ],
    declarations: [
        EntryPointComponent
    ],
    providers: [
        EntryPointService
    ]
})

export class EntryPointModule { }