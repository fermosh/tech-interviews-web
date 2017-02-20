import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

/* Components */
import { AppComponent } from './app.component';
import { EntryPointComponent } from './entryPoint/entryPoint.component';

/* Feature Modules */
import { ScriptViewerModule } from './script-viewer/script-viewer.module';
import { EntryPointModule } from './entryPoint/entryPoint.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: EntryPointComponent },
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]),
    EntryPointModule,
    ScriptViewerModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }