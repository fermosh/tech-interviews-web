import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { EntryPointComponent } from './entryPoint/entryPoint.component';
import { CompetencyService } from './entryPoint/competency-service';
import { LevelService } from './entryPoint/level-service';
import { DomainService } from './entryPoint/domain-service';
import { CompetencyData } from './entryPoint/competency-data';
import { LevelData } from './entryPoint/level-data';
import { DomainData } from './entryPoint/domain-data';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

/* Feature Modules */
import { ScriptViewerModule } from './script-viewer/script-viewer.module';
import { EntryPointService } from './entryPoint/entryPoint.service';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(CompetencyData),
    InMemoryWebApiModule.forRoot(LevelData),
    InMemoryWebApiModule.forRoot(DomainData),
    RouterModule.forRoot([
      { path: 'welcome', component: EntryPointComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ScriptViewerModule
  ],
  declarations: [
    AppComponent,
    EntryPointComponent
  ],
  providers: [
    EntryPointService,
    CompetencyService,
    LevelService,
    DomainService
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
