import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, CanDeactivate } from '@angular/router';

import { ExerciseEditComponent } from './exercise-edit.component';

@Injectable()
export  class ExerciseDetailGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id = +route.url[1].path;
        if (isNaN(id) || id < 1) {
            alert('Invalid Exercise Id');
            // start a new navigation to redirect to list page
            this.router.navigate(['/exercises']);
            // abort current navigation
            return false;
        };
        return true;
    }
}

@Injectable()
export  class ExerciseEditGuard implements CanDeactivate<ExerciseEditComponent> {

    canDeactivate(component: ExerciseEditComponent): boolean {
        if (component.exerciseForm.dirty) {
            let exerciseTitle = component.exerciseForm.get('ExerciseTitle').value || 'New Exercise';
            return confirm(`Navigate away and lose all changes to ${exerciseTitle}?`);
        }
        return true;
    }
}
