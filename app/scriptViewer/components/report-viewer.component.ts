import { Component, Input } from '@angular/core';
import { ISkillMatrix } from '../interfaces/skill-matrix';

@Component({
    selector: 'tih-report-viewer',
    templateUrl: 'app/scriptViewer/components/report-viewer.component.html',
    styleUrls: ['app/scriptViewer/components/report-viewer.component.css']
})

export class ReportViewerComponent {
    @Input() interviewScript: ISkillMatrix[];
}