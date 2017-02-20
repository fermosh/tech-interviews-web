import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { CompetencyService } from './competency.service';
import { LevelService } from './level.service';
import { DomainService } from './domain.service';
import { EntryPointComponent } from './entryPoint.component';

import { FilterCriteriaData } from './filter-criteria-data';


import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(FilterCriteriaData),
    RouterModule.forChild([
      { path: 'welcome', component: EntryPointComponent },
    ])
  ],
  declarations: [
    EntryPointComponent
  ],
  providers: [
    CompetencyService,
    LevelService,
    DomainService
  ]
})

export class EntryPointModule {}
