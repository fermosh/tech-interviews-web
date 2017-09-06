import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { EntryPointComponent } from './entryPoint.component';
import { SkillPickerComponent } from '../shared/components/skillPicker/skillPicker.component';
import { CompentencyPickerComponent } from '../shared/components/competencyPicker/competencyPicker.component';
import { SharedModule } from './../shared/shared.module';
import { EntryPointRoutingModule } from './entryPoint-routing.module';

@NgModule(
    {
        imports: [SharedModule, EntryPointRoutingModule],
        declarations: [EntryPointComponent, SkillPickerComponent, CompentencyPickerComponent]
    }
)

export class EntryPointModule { }
