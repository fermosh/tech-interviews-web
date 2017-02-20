import { Component, OnInit } from '@angular/core'
import { Subscription } from 'rxjs/Subscription';

import { ScriptViewer } from './BO/script-viewer'
import { ScriptViewerService } from './script-viewer.service';
import { SkillService } from '../scriptViewer/skill-service';

declare var jQuery:any;

@Component({
    templateUrl: 'app/script-viewer/script-viewer.component.html',
    styleUrls: ['app/script-viewer/script-viewer.component.css']
})

export class ScriptViewerComponent implements OnInit {
    scriptViewer: ScriptViewer;
    errorMessage: string;
    private sub: Subscription;
    private isDomRendered: boolean = false;

    constructor(private _scriptViewerService: ScriptViewerService, private _skillService: SkillService) {}

    ngOnInit(): void {
        /*this.sub = this._scriptViewerService.getScriptViewer()
            .subscribe(scriptViewer => this.scriptViewer = scriptViewer,
                       error => this.errorMessage = <any>error);*/

        this._skillService.getSkillMatrix()
            .subscribe(scriptViewer => console.log(scriptViewer),
                       error => this.errorMessage = <any>error);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onRatingClicked(rating: number): void {
        console.log(rating);
    }
}