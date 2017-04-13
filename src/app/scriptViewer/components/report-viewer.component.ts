import { Component, Input } from '@angular/core';
import { InterviewScript } from './../classes/interview-script';
import { Skill } from './../../shared/classes/skill';
import { ScriptViewerService } from './../script-viewer.service';

@Component({
    selector: 'tih-report-viewer',
    templateUrl: './report-viewer.component.html',
    styleUrls: ['./report-viewer.component.css']
})

export class ReportViewerComponent {
    @Input() interviewScript: InterviewScript;

    constructor(private _scriptViewerService: ScriptViewerService) { }

    getRatingBySkill(skill: Skill): number {
        return this._scriptViewerService.getRatingBySkill(skill);
    }
}
