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
        path: 'skillMatrix',
        loadChildren: 'app/entryPoint/entryPoint.module#EntryPointModule'
    },
    {
        path: 'script-viewer',
        loadChildren: 'app/scriptViewer/script-viewer.module#ScriptViewerModule'
    },
    {
        path: 'data-import',
        loadChildren: 'app/dataImport/data-import.module#DataImportModule'
    },
    { path: '',   loadChildren: 'app/entryPoint/entryPoint.module#EntryPointModule', pathMatch: 'full' },
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
