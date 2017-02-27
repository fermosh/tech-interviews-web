import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { ISkillMatrix } from './interfaces/skill-matrix';
import { ISkill } from './interfaces/skill';
import { IExercise } from './interfaces/exercise';
import { IComment } from './interfaces/comment';

import { ScriptViewerService } from './script-viewer.service';

declare var jQuery: any;

@Component({
    templateUrl: 'app/scriptViewer/script-viewer.component.html',
    styleUrls: ['app/scriptViewer/script-viewer.component.css']
})

export class ScriptViewerComponent implements OnInit, OnDestroy {
    scriptViewer: ISkillMatrix;
    errorMessage: string;
    private sub: Subscription;
    private isScriptViewerRendered: boolean = false;
    private isOnPreview: boolean = false;

    constructor(private _route: ActivatedRoute,
        private _scriptViewerService: ScriptViewerService) { }

    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['templateId'];
                this.getInterviewScript(id);
            });
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
            jQuery('.uui-carousel').carousel({ interval: 0 });
            this.isScriptViewerRendered = true;
        }
    }

    getInterviewScript(id: number) {
        this._scriptViewerService.getScriptViewer(id)
            .subscribe(scriptViewer => this.scriptViewer = scriptViewer,
            error => this.errorMessage = <any>error);
    }

    // ----------------------------------------------------------------------------------
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

    getIndexFirstTab(): number {
        let skillIndex: number = 0;
        for (let skill of this.scriptViewer.skills) {
            for (let exercise of skill.exercises) {
                return skillIndex;
            }
            skillIndex++;
        }
        return -1;
    }

    showPreview() {
        if (this.isOnPreview) {
            jQuery('.uui-carousel').carousel('prev');
        } else {
            jQuery('.uui-carousel').carousel('next');
        }
        this.isOnPreview = !this.isOnPreview;
    }

    // ----------------------------------------------------------------------------------
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

    // ----------------------------------------------------------------------------------
    /* QUESTION AND EXERCISE EVENTS */

    addComment(type: string, skillId: number, typeId: number, event: any): void {
        let comment: IComment = { text: event.target.value, user: "Logged User Name", date: new Date() };
        switch (type) {
            case 'question':
                this.scriptViewer.skills.filter(s => s.id === skillId)[0].questions.filter(q => q.id === typeId)[0].comments.push(comment);
                break;
            case 'exercise':
                this.scriptViewer.skills.filter(s => s.id === skillId)[0].exercises.filter(e => e.id === typeId)[0].comments.push(comment);
                break;
        }
        event.target.value = null;
    }

    deleteComment(type: string, skillId: number, typeId: number, comment: IComment): void {
        let index: number;

        switch (type) {
            case 'question':
                index = this.scriptViewer.skills.filter(s => s.id === skillId)[0].questions.filter(q => q.id === typeId)[0].comments.indexOf(comment);
                this.scriptViewer.skills.filter(s => s.id === skillId)[0].questions.filter(q => q.id === typeId)[0].comments.splice(index, 1);
                break;
            case 'exercise':
                index = this.scriptViewer.skills.filter(s => s.id === skillId)[0].exercises.filter(e => e.id === typeId)[0].comments.indexOf(comment);
                this.scriptViewer.skills.filter(s => s.id === skillId)[0].exercises.filter(e => e.id === typeId)[0].comments.splice(index, 1);
                break;
        }
    }
}