import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TemplateListComponent } from './template-list.component';
import { SharedModule } from '../shared/shared.module';
import { TemplateRoutingModule } from './template-routing.module';

@NgModule(
  {
      imports: [
          SharedModule,
          ReactiveFormsModule,
          TemplateRoutingModule
        ],
        declarations: [
            TemplateListComponent
        ]
    }
)

export class TemplateModule { }
