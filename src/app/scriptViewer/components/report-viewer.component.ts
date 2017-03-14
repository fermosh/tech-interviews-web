import { Component, Input } from '@angular/core';
import { IInterviewScript } from './../interfaces/interview-script';
import { ISkill } from './../interfaces/skill';
import { ScriptViewerService } from './../script-viewer.service';

@Component({
    selector: 'tih-report-viewer',
    templateUrl: './report-viewer.component.html',
    styleUrls: ['./report-viewer.component.css']
})

export class ReportViewerComponent {
    @Input() interviewScript: IInterviewScript[];

    constructor(private _scriptViewerService: ScriptViewerService) { }

    getRatingBySkill(skill: ISkill): number {
        return this._scriptViewerService.getRatingBySkill(skill);
    }
}
