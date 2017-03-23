import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
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
  declarations: [EntryPointComponent, SkillPickerComponent, LevelFilterPipe, DomainFilterPipe]
})

export class EntryPointModule { }
