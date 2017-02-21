import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StarComponent } from './star.component';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';


import { TechnicalInterviewData } from './technical-interview-helper.data';

@NgModule({
  imports: [ CommonModule,
  InMemoryWebApiModule.forRoot(TechnicalInterviewData)],
  exports : [
    CommonModule,
    FormsModule,
    StarComponent
  ],
  declarations: [ StarComponent ],
})
export class SharedModule { }
