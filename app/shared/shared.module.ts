import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StarComponent } from './star.component';
import { ScoreComponent } from './score.component';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';


import { TechnicalInterviewData } from './technical-interview-helper.data';

@NgModule({
  imports: [CommonModule,
    InMemoryWebApiModule.forRoot(TechnicalInterviewData)],
  exports: [
    CommonModule,
    FormsModule,
    StarComponent,
    ScoreComponent
  ],
  declarations: [
    StarComponent,
    ScoreComponent
  ],
})
export class SharedModule { }
