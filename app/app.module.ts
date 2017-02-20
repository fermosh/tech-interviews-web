import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';

/* Feature Modules */
import { ScriptViewerModule } from './script-viewer/script-viewer.module';
import { EntryPointModule } from './entryPoint/entryPoint.module';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    EntryPointModule,
    ScriptViewerModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
