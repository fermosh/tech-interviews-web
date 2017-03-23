import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent }    from './not-found.component';
import { CanDeactivateGuard }       from './can-deactivate-guard.service';
import { AuthGuard }                from './auth-guard.service';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

const routes: Routes = [
    {
        path: 'questions',
        loadChildren: 'app/questions/question.module#QuestionModule'
    },
    {
        path: 'exercises',
        loadChildren: 'app/exercises/exercise.module#ExerciseModule',
    },
    {
        path: 'entryPoint',
        loadChildren: 'app/entryPoint/entryPoint.module#EntryPointModule'
    },
    {
        path: 'scriptViewer',
        loadChildren: 'app/scriptViewer/script-viewer.module#ScriptViewerModule'
    },
    { path: '',   redirectTo: '/entryPoint', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule(
    {
        imports: [
            RouterModule.forRoot(
                routes,
                { preloadingStrategy: SelectivePreloadingStrategy }
            )
        ],
        exports: [RouterModule],
        providers: [
            CanDeactivateGuard,
            SelectivePreloadingStrategy
        ]
    }
)

export class AppRoutingModule { }
