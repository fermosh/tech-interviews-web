import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CompetencyService } from './../shared/services/competency.service';
import { LevelService } from './../shared/services/level.service';
import { DomainService } from './../shared/services/domain.service';
import { SkillMatrixService } from './skill-matrix.service';
import { TemplateService } from './services/template.service';
import { EntryPointComponent } from './entryPoint.component';
import { SkillPickerComponent } from './components/skillPicker.component';
import { LevelFilterPipe } from './pipes/level-filter.pipe';
import { DomainFilterPipe } from './pipes/domain-filter.pipe';
import { SharedModule } from './../shared/shared.module';
import { EntryPointRoutingModule } from './entryPoint-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    EntryPointRoutingModule
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
