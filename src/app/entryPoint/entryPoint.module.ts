import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { EntryPointComponent } from './entryPoint.component';
import { SkillPickerComponent } from './components/skillPicker.component';
import { CompetencyFilterPipe } from './pipes/competency-filter.pipe';
import { SharedModule } from './../shared/shared.module';
import { EntryPointRoutingModule } from './entryPoint-routing.module';

@NgModule(
    {
        imports: [
            SharedModule,
            EntryPointRoutingModule
        ],
        declarations: [EntryPointComponent, SkillPickerComponent, CompetencyFilterPipe]
    }
)

export class EntryPointModule { }
