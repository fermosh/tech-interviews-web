import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { CompetencyService } from './competency.service';
import { LevelService } from './level.service';
import { DomainService } from './domain.service';
import { EntryPointComponent } from './entryPoint.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'welcome', component: EntryPointComponent }
    ])
  ],
  declarations: [EntryPointComponent],
  providers: [
    CompetencyService,
    LevelService,
    DomainService
  ]
})

export class EntryPointModule { }
