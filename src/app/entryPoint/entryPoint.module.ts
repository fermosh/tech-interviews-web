import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { CompetencyService } from './services/competency.service';
import { LevelService } from './services/level.service';
import { DomainService } from './services/domain.service';
import { SkillMatrixService } from './skill-matrix.service';
import { TemplateService } from './services/template.service';
import { EntryPointComponent } from './entryPoint.component';
import { SkillPickerComponent } from './components/skillPicker.component';

import { LevelFilterPipe } from './pipes/level-filter.pipe';
import { DomainFilterPipe } from './pipes/domain-filter.pipe';

import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: EntryPointComponent }
    ])
  ],
  declarations: [EntryPointComponent, SkillPickerComponent, LevelFilterPipe, DomainFilterPipe],
  providers: [
    CompetencyService,
    LevelService,
    DomainService,
    SkillMatrixService,
    TemplateService
  ]
})

export class EntryPointModule { }
