import { Component, Input } from '@angular/core';
import { ISkillMatrix } from '../interfaces/skill-matrix';
import { ISkill } from '../interfaces/skill';
import { IQuestion } from '../interfaces/question';
import { IExercise } from '../interfaces/exercise';

@Component({
    selector: 'tih-report-viewer',
    templateUrl: 'app/scriptViewer/components/report-viewer.component.html',
    styleUrls: ['app/scriptViewer/components/report-viewer.component.css']
})

export class ReportViewerComponent {
    @Input() interviewScript: ISkillMatrix[];

    getRatingBySkill(skill: ISkill): number {
        let selectedQuestions: IQuestion[] = skill.questions.filter(q => q.selected);
        let selectedExercises: IExercise[] = skill.exercises.filter(e => e.selected);
        let sum: number = selectedQuestions.map(q => q.rating).reduce(function(a, b) { return a + b; }, 0)
                          + selectedExercises.map(q => q.rating).reduce(function(a, b) { return a + b; }, 0);
        let numberOfItems: number = selectedQuestions.length + selectedExercises.length;

        if (sum > 0) {
            return sum / numberOfItems;
        } else {
            return 0;
        }
    }
}