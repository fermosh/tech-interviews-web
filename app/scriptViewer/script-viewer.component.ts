import { Component, OnInit } from '@angular/core'
import { Subscription } from 'rxjs/Subscription';

import { ScriptViewer } from './classes/script-viewer'
import { ScriptViewerService } from './script-viewer.service';

declare var jQuery: any;

@Component({
    templateUrl: 'app/scriptViewer/script-viewer.component.html',
    styleUrls: ['app/scriptViewer/script-viewer.component.css']
})

export class ScriptViewerComponent implements OnInit {
    scriptViewer: ScriptViewer;
    errorMessage: string;
    private sub: Subscription;
    private isScriptViewerRendered: boolean = false;

    constructor(private _scriptViewerService: ScriptViewerService) { }

    ngOnInit(): void {
        this.sub = this._scriptViewerService.getScriptViewer()
            .subscribe(scriptViewer => this.scriptViewer = scriptViewer,
            error => this.errorMessage = <any>error);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    ngAfterViewChecked(): void {
        if (this.scriptViewer && this.scriptViewer.skills && !this.isScriptViewerRendered) {
            jQuery('.topic-label-value').uui_tooltip({
                template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner" style="text-align:left; padding:15px; line-height:15px; max-width:none; background-color:rgba(0,0,0,0.7);"></div></div>',
                color: 'black'
            });
            this.isScriptViewerRendered = true;
        }
    }
}