import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { ISkillMatrix } from './interfaces/skill-matrix';
import { ISkill } from './interfaces/skill';
import { IComment } from './interfaces/comment';
import { IQuestion } from './../questions/question';
import { IExercise } from './../exercises/exercise';
import { ITag } from './../questions/tag';
import { IInterviewQuestion } from './interfaces/interview-question';
import { QuestionExerciseBank } from './interfaces/question-exercise-bank';

import { ScriptViewerService } from './script-viewer.service';

declare var jQuery: any;

@Component({
    templateUrl: './script-viewer.component.html',
    styleUrls: ['./script-viewer.component.css']
})

export class ScriptViewerComponent implements OnInit, OnDestroy {
    scriptViewer: ISkillMatrix;
    errorMessage: string;
    private sub: Subscription;
    private selectedSkill: ISkill;
    private questionExerciseBank: QuestionExerciseBank[];
    private isScriptViewerRendered: boolean;
    private isOnPreview: boolean;

    constructor(private route: ActivatedRoute,
        private scriptViewerService: ScriptViewerService) { }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(
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
                template: `<div class="tooltip" role="tooltip"><div class="tooltip-arrow" style="background-color:rgba(0,0,0,0.7);"></div><div class="tooltip-inner"
                    style="text-align:left; padding:15px; line-height:15px; max-width:none; background-color:rgba(0,0,0,0.7);">
                    </div></div>`,
                color: 'black'
            });
            jQuery('#uuiCarousel').carousel({ interval: 0 });
            this.isScriptViewerRendered = true;
        }
    }

    getInterviewScript(id: number) {
        this.scriptViewerService.getScriptViewer(id)
            .subscribe(scriptViewer => {
                this.scriptViewer = scriptViewer;
                this.getQuestionExerciseBank(id);
            },
            error => this.errorMessage = <any>error);
    }

    getQuestionExerciseBank(templateId: number) {
        this.scriptViewerService.getQuestionsByTemplateId(templateId)
            .subscribe(questionBank => {
                this.mapQuestionBank(questionBank);
                this.scriptViewerService.getExercisesByTemplateId(templateId)
                    .subscribe(exerciseBank => this.mapExerciseBank(exerciseBank),
                    error => this.errorMessage = <any>error);
            },
            error => this.errorMessage = <any>error);
    }

    mapQuestionBank(questions: IQuestion[]) {
        let questionsBySkill: IQuestion[];
        this.questionExerciseBank = this.scriptViewer.skills.map(s => <QuestionExerciseBank>new Object({ id: s.id, interviewQuestions: [], interviewExercises: [] }));
        for (let skill of this.questionExerciseBank) {
            questionsBySkill = questions.filter(q => q.tags.some(t => t.id === skill.id));
            questionsBySkill.forEach(q => skill.interviewQuestions.push({
                question: q,
                rating: 0,
                comments: [],
                selected: false
            }));
        }
    }

    mapExerciseBank(exercises: IExercise[]) {
        let exercisesBySkill: IExercise[];
        for (let skill of this.questionExerciseBank) {
            exercisesBySkill = exercises.filter(e => e.tags.some(t => t.id === skill.id));
            exercisesBySkill.forEach(e => skill.interviewExercises.push({
                exercise: e,
                rating: 0,
                comments: [],
                selected: false
            }));
        }
    }

    // ----------------------------------------------------------------------------------
    /* SCRIPT VIEWER EVENTS */

    getFinalRating(): number {
        return this.scriptViewerService.getFinalRating(this.scriptViewer.skills);
    }

    getIndexFirstTab(): number {
        return this.scriptViewer.skills.findIndex(s => s.interviewExercises.filter(e => e.selected).length > 0);
    }

    showPreview() {
        jQuery('#uuiCarousel').carousel(this.isOnPreview ? 'prev' : 'next');
        this.isOnPreview = !this.isOnPreview;
    }

    // ----------------------------------------------------------------------------------
    /* SKILL EVENTS */

    setSelectedSkill(skill: ISkill): void {
        this.selectedSkill = skill;
        this.questionExerciseBank
            .filter(b => b.id === skill.id)
            .forEach(b => {
                b.interviewQuestions.map(q => q.selected = skill.interviewQuestions.some(i => i.question.id === q.question.id));
                b.interviewExercises.map(q => q.selected = skill.interviewExercises.some(i => i.exercise.id === q.exercise.id));
            });
    }

    getRatingBySkill(skill: ISkill): number {
        return this.scriptViewerService.getRatingBySkill(skill);
    }

    getTopicsBySkill(skill: ISkill): string {
        if (skill.topics && skill.topics.length > 0) {
            return skill.topics.map(t => t.isRequired ? ('- ' + t.name) : (`<span style='color:#888;'>- ` + t.name + `</span>`)).join('<br>');
        } else {
            return 'No topics related';
        }
    }

    getSkillPriorityStyle(skill: ISkill): string {
        let priorityStyle: string = skill.priority.toLowerCase().trim().replace(' ', '-');
        return 'priority-' + priorityStyle + '-label-value';
    }

    saveSelectedQuestions(): void {
        let index: number;
        for (let question of this.questionExerciseBank.filter(b => b.id === this.selectedSkill.id)[0].interviewQuestions) {
            if (question.selected) {
                if (!this.selectedSkill.interviewQuestions.some(iq => iq.question.id === question.question.id)) {   // Question selected and is not part of the Intervie Script
                    this.selectedSkill.interviewQuestions.push({ question: question.question, rating: 0, comments: [], selected: true });
                }
            } else {
                if (this.selectedSkill.interviewQuestions.some(iq => iq.question.id === question.question.id)) {    // Question unselected and is part of the Interview Script
                    index = this.selectedSkill.interviewQuestions.indexOf(this.selectedSkill.interviewQuestions.filter(iq => iq.question.id === question.question.id)[0]);
                    this.selectedSkill.interviewQuestions.splice(index, 1);
                }
            }
        }
        for (let exercise of this.questionExerciseBank.filter(b => b.id === this.selectedSkill.id)[0].interviewExercises) {
            if (exercise.selected) {
                if (!this.selectedSkill.interviewExercises.some(ie => ie.exercise.id === exercise.exercise.id)) {   // Exercise selected and is not part of the Intervie Script
                    this.selectedSkill.interviewExercises.push({ exercise: exercise.exercise, rating: 0, comments: [], selected: true });
                }
            } else {
                if (this.selectedSkill.interviewExercises.some(ie => ie.exercise.id === exercise.exercise.id)) {    // Exercise unselected and is part of the Interview Script
                    index = this.selectedSkill.interviewExercises.indexOf(this.selectedSkill.interviewExercises.filter(ie => ie.exercise.id === exercise.exercise.id)[0]);
                    this.selectedSkill.interviewExercises.splice(index, 1);
                }
            }
        }
        jQuery('#popupPicker').modal('hide');
    }

    // ----------------------------------------------------------------------------------
    /* QUESTION AND EXERCISE EVENTS */
    
    addComment(type: string, skillId: number, typeId: number, event: any): void {
        let comment: IComment = { text: event.target.value, user: 'Logged User Name', date: new Date() };
        switch (type) {
            case 'question':
                this.scriptViewer.skills.filter(s => s.id === skillId)[0].interviewQuestions
                    .filter(q => q.question.id === typeId)[0].comments.push(comment);
                break;
            case 'exercise':
                this.scriptViewer.skills.filter(s => s.id === skillId)[0].interviewExercises
                    .filter(e => e.exercise.id === typeId)[0].comments.push(comment);
                break;
        }
        event.target.value = null;
    }

    deleteComment(type: string, skillId: number, typeId: number, comment: IComment): void {
        let index: number;

        switch (type) {
            case 'question':
                index = this.scriptViewer.skills.filter(s => s.id === skillId)[0].interviewQuestions
                    .filter(q => q.question.id === typeId)[0].comments.indexOf(comment);
                this.scriptViewer.skills.filter(s => s.id === skillId)[0].interviewQuestions
                    .filter(q => q.question.id === typeId)[0].comments.splice(index, 1);
                break;
            case 'exercise':
                index = this.scriptViewer.skills.filter(s => s.id === skillId)[0].interviewExercises
                    .filter(e => e.exercise.id === typeId)[0].comments.indexOf(comment);
                this.scriptViewer.skills.filter(s => s.id === skillId)[0].interviewExercises
                    .filter(e => e.exercise.id === typeId)[0].comments.splice(index, 1);
                break;
        }
    }
}
