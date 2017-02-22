import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { CompetencyService } from './competency.service';
import { LevelService } from './level.service';
import { DomainService } from './domain.service';
import { SkillMatrixService } from './SkillMatrix.service';
import { EntryPointComponent } from './entryPoint.component';

import { LevelFilterPipe } from './pipes/level-filter.pipe';
import { DomainFilterPipe } from './pipes/domain-filter.pipe';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: EntryPointComponent }
    ])
  ],
  declarations: [EntryPointComponent, LevelFilterPipe, DomainFilterPipe],
  providers: [
    CompetencyService,
    LevelService,
    DomainService,
    SkillMatrixService
  ]
})

export class EntryPointModule { }
