import { Component, OnInit } from '@angular/core'
import { Subscription } from 'rxjs/Subscription';

import { ISkillMatrix } from './interfaces/skill-matrix'
import { ISkill } from './interfaces/skill';
import { IExercise } from './interfaces/exercise';

import { ScriptViewerService } from './script-viewer.service';

declare var jQuery: any;

@Component({
    templateUrl: 'app/scriptViewer/script-viewer.component.html',
    styleUrls: ['app/scriptViewer/script-viewer.component.css']
})

export class ScriptViewerComponent implements OnInit {
    scriptViewer: ISkillMatrix;
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

    /* SCRIPT VIEWER EVENTS */

    getFinalScore(): number {
        let sum: number = 0;
        if (this.scriptViewer.skills && this.scriptViewer.skills.length > 0) {
            for (let skill of this.scriptViewer.skills) {
                sum += this.getRatingBySkill(skill);
            }
            return sum / this.scriptViewer.skills.length;
        }
        return 0;
    }

    getAllSelectedExercises(): IExercise[] {
        let exercises: IExercise[] = [];
        for (let skill of this.scriptViewer.skills) {
            for (let exercise of skill.exercises) {
                exercises.push(exercise);
            }
        }
        return exercises;
    }

    /* SKILL EVENTS */

    getRatingBySkill(skill: ISkill): number {
        let sum: number = 0;
        let numberOfItems: number = 0;

        if (skill.questions && skill.questions.length > 0) {
            for (let question of skill.questions.filter(q => q.selected)) {
                sum += question.rating;
                numberOfItems++;
            }
        }
        if (skill.exercises && skill.exercises.length > 0) {
            for (let exercise of skill.exercises.filter(e => e.selected)) {
                sum += exercise.rating;
                numberOfItems++;
            }
        }

        if (sum > 0) {
            return sum / numberOfItems;
        } else {
            return 0;
        }
    }

    getTopicsBySkill(skill: ISkill): string {
        let topicList: string = '';

        if (skill.topics && skill.topics.length > 0) {
            for (let topic of skill.topics) {
                if (topic.isRequired) {
                    topicList += '- ' + topic.name + '';
                } else {
                    topicList += "<span style='color:#888;'>- " + topic.name + '</span>';
                }
                topicList += '<br>';
            }
        } else {
            topicList = 'No topics related';
        }

        return topicList;
    }

    getSkillPriorityStyle(skill: ISkill): string {
        let priorityStyle: string = skill.priority.toLowerCase().trim().replace(' ', '-');
        return 'priority-' + priorityStyle + '-label-value';
    }
}