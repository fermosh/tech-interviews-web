import { Component, Input } from '@angular/core';
import { ISkillMatrix } from '../interfaces/skill-matrix';
import { ISkill } from '../interfaces/skill';
import { IQuestion } from '../interfaces/question';
import { IExercise } from '../interfaces/exercise';
import { ScriptViewerService } from '../script-viewer.service';

@Component({
    selector: 'tih-report-viewer',
    templateUrl: './report-viewer.component.html',
    styleUrls: ['./report-viewer.component.css']
})

export class ReportViewerComponent {
    @Input() interviewScript: ISkillMatrix[];

    constructor(private _scriptViewerService: ScriptViewerService) { }

    getRatingBySkill(skill: ISkill): number {
        return this._scriptViewerService.getRatingBySkill(skill);
    }
}
