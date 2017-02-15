import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { EntryPointComponent } from './entryPoint/entryPoint.component'

/* Feature Modules */
import { ScriptViewerModule } from './script-viewer/script-viewer.module';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
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
  bootstrap: [ AppComponent ]
})
export class AppModule { }
