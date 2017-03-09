import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';

/* Feature Modules */
import { ScriptViewerModule } from './scriptViewer/script-viewer.module';
import { EntryPointModule } from './entryPoint/entryPoint.module';
import { QuestionModule } from './questions/question.module';
import { ExerciseModule } from './exercises/exercise.module';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]),
    EntryPointModule,
    ScriptViewerModule,
    QuestionModule,
    ExerciseModule
  ],
  exports: [RouterModule],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
