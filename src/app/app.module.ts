import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { Router, Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { SharedModule } from './shared/shared.module';
import { QuestionModule } from './questions/question.module';
import { ExerciseModule } from './exercises/exercise.module';

/* Feature Modules */
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent }   from './not-found.component';

@NgModule(
    {
        imports: [
            FormsModule,
            BrowserModule,
            HttpModule,
            SharedModule,
            AppRoutingModule,
        ],
        exports: [RouterModule],
        declarations: [
            AppComponent,
            PageNotFoundComponent,
        ],
        bootstrap: [ AppComponent ]
    }
)

export class AppModule {
    // Diagnostic only: inspect router configuration
    constructor(router: Router) {
        console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
}
