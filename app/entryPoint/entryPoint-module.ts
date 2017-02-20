import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CompetencyData } from './competency-data';

import { CompetencyService } from './competency-service';
import { EntryPointComponent } from './entryPoint.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(CompetencyData),
    RouterModule.forChild([
      { path: 'welcome', component: EntryPointComponent },
    ])
  ],
  declarations: [
    EntryPointComponent
  ],
  providers: [
    CompetencyService
  ]
})
export class EntryPointModule {}
