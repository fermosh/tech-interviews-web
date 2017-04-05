import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { SortablejsOptions } from 'angular-sortablejs';

import { InterviewScript } from './classes/interview-script';
import { Skill } from './../shared/classes/skill';
import { IComment } from './../shared/classes/comment';
import { Question } from './../shared/classes/question';
import { Exercise } from './../shared/classes/exercise';
import { InterviewQuestion } from './classes/interview-question';
import { InterviewExercise } from './classes/interview-exercise';
import { QuestionService } from './../shared/services/question.service';
import { ExerciseService } from './../shared/services/exercise.service';

import { ScriptViewerService } from './script-viewer.service';

declare var jQuery: any;

@Component({
    templateUrl: './script-viewer.component.html',
    styleUrls: ['./script-viewer.component.css']
})

export class ScriptViewerComponent implements OnInit, OnDestroy {
    scriptViewer: InterviewScript;
    errorMessage: string;
    private sub: Subscription;
    private selectedSkill: Skill;
    private questionBank: InterviewQuestion[];
    private exerciseBank: InterviewExercise[];
    private isScriptViewerRendered: boolean;
    private isOnPreview: boolean;
    private hoverSkillId: number;
    private hoverExercises: boolean;
    sortablejsOptions: SortablejsOptions = {
        animation: 150,
        handle: '.fa-bars'
    };

    constructor(private route: ActivatedRoute,
        private scriptViewerService: ScriptViewerService,
        private questionService: QuestionService,
        private exerciseService: ExerciseService) { }

    ngOnInit(): void {
        this.hoverSkillId = 0;
        this.hoverExercises = false;
        this.sub = this.route.params.subscribe(
            params => {
                let id = params['id'];
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

    getInterviewScript(id: string) {
        this.scriptViewerService.getScriptViewer(id)
            .subscribe(scriptViewer => {
                this.scriptViewer = scriptViewer;
                this.getQuestionBank(id);
                this.getExerciseBank(id);
            },
            error => this.errorMessage = <any>error);
    }

    getQuestionBank(templateId: string) {
        this.questionService.getQuestionsByTemplateId(templateId)
            .subscribe(questionBank => this.mapQuestionBank(questionBank),
            error => this.errorMessage = <any>error);
    }

    getExerciseBank(templateId: string) {
        this.exerciseService.getExercisesByTemplateId(templateId)
            .subscribe(exerciseBank => this.mapExerciseBank(exerciseBank),
            error => this.errorMessage = <any>error);
    }

    mapQuestionBank(questions: Question[]) {
        // 1. Fill 'Question Bank' with data retrieved from service.
        this.questionBank = questions.map(q => <InterviewQuestion>new Object({ id: q.id, body: q.body, answer: q.answer, tag: q.tag, rating: 0, comments: [], selected: false, order: -1 }));

        // 2. Complete the 'Question Bank' with those questions existing in the Interview but not in the DB Bank 
        this.scriptViewer.skills.forEach(s => s.interviewQuestions.forEach(siq => {
            if (!this.questionBank.some(qb => qb.id === siq.id)) {
                this.questionBank.push({ id: siq.id, body: siq.body, answer: siq.answer, tag: siq.tag, rating: siq.rating, comments: siq.comments, selected: siq.selected, order: siq.order });
            }
        }));
    }

    mapExerciseBank(exercises: Exercise[]) {
        this.exerciseBank = [];
        // 1. Fill 'Exercise Bank' with data retrieved from service.
        this.exerciseBank = exercises.map(e => <InterviewExercise>new Object({ id: e.id, title: e.title, body: e.body, solution: e.solution, tags: e.tags, rating: 0, comments: [], selected: false }));

        // 2. Complete the 'Exercise Bank' with those exercises existing in the Interview but not in the DB Bank 
        this.scriptViewer.interviewExercises.forEach(ie => {
            if (!this.exerciseBank.some(eb => eb.id === ie.id)) {
                this.exerciseBank.push({ id: ie.id, title: ie.title, body: ie.body, solution: ie.solution, tags: ie.tags, rating: ie.rating, comments: ie.comments, selected: ie.selected });
            }
        });
    }

    // ----------------------------------------------------------------------------------
    /* SCRIPT VIEWER EVENTS */

    getFinalRating(): number {
        return this.scriptViewerService.getFinalRating(this.scriptViewer);
    }

    getSkillsRating(): number {
        return this.scriptViewerService.getSkillsRating(this.scriptViewer);
    }

    getExercisesRating(): number {
        return this.scriptViewerService.getExercisesRating(this.scriptViewer);
    }

    showPreview(): void {
        jQuery('#uuiCarousel').carousel(this.isOnPreview ? 'prev' : 'next');
        this.isOnPreview = !this.isOnPreview;
    }

    copyToClipBoard(): void {
        jQuery("#clipBoard")[0].innerText = jQuery(".report-template")[0].innerText;
        let copyTextarea: any = document.querySelector('#clipBoard');
        copyTextarea.select();

        try {
            let successful = document.execCommand('copy');
            console.log('Copying text command was ' + (successful ? 'successful' : 'unsuccessful'));
        } catch (err) {
            console.log('Unable to copy.');
        }
    }

    // ----------------------------------------------------------------------------------
    /* SKILL EVENTS */

    onMouseEnterSkill(skillId: number): void {
        this.hoverSkillId = skillId;
        this.hoverExercises = false;
    }

    setSelectedSkillAndQuestions(skill: Skill): void {
        this.selectedSkill = skill;
        this.questionBank.map(qb => {
            qb.selected = this.selectedSkill.interviewQuestions.some(iq => iq.id === qb.id);
            qb.removable = !this.selectedSkill.interviewQuestions.filter(iq => iq.id === qb.id).some(iq => iq.rating > 0 || (iq.comments && iq.comments.length > 0));
            qb.order = this.selectedSkill.interviewQuestions.indexOf(this.selectedSkill.interviewQuestions.filter(iq => iq.id === qb.id)[0]);
        });
    }

    setSelectedExercises(): void {
        this.exerciseBank.map(eb => {
            eb.selected = this.scriptViewer.interviewExercises.some(ie => ie.id === eb.id);
            eb.removable = !this.scriptViewer.interviewExercises.filter(ie => ie.id === eb.id).some(ie => ie.rating > 0 || (ie.comments && ie.comments.length > 0));
        });
    }

    getRatingBySkill(skill: Skill): number {
        return this.scriptViewerService.getRatingBySkill(skill);
    }

    getTopicsBySkill(skill: Skill): string {
        if (skill.topics && skill.topics.length > 0) {
            return skill.topics.map(t => t.isRequired ? ('- ' + t.name) : (`<span style='color:#888;'>- ` + t.name + `</span>`)).join('<br>');
        } else {
            return 'No topics related';
        }
    }

    getSkillPriorityStyle(skill: Skill): string {
        let priorityStyle: string = skill.priority.toLowerCase().trim().replace(' ', '-');
        return 'priority-' + priorityStyle + '-label-value';
    }

    saveSelectedQuestions(): void {
        let index: number;
        for (let question of this.questionBank.filter(qb => qb.tag.id === this.selectedSkill.id)) {
            if (question.selected) {
                if (!this.selectedSkill.interviewQuestions.some(iq => iq.id === question.id)) {   // Question selected and is not part of the Intervie Script
                    this.selectedSkill.interviewQuestions.push({ id: question.id, body: question.body, answer: question.answer, tag: question.tag, rating: 0, comments: [], selected: true });
                }
            } else {
                if (this.selectedSkill.interviewQuestions.some(iq => iq.id === question.id)) {    // Question unselected and is part of the Interview Script
                    index = this.selectedSkill.interviewQuestions.indexOf(this.selectedSkill.interviewQuestions.filter(iq => iq.id === question.id)[0]);
                    this.selectedSkill.interviewQuestions.splice(index, 1);
                }
            }
        }
        jQuery('#questionPicker').modal('hide');
    }

    saveSelectedExercises(): void {
        let index: number;
        for (let exercise of this.exerciseBank) {
            if (exercise.selected) {
                if (!this.scriptViewer.interviewExercises.some(ie => ie.id === exercise.id)) {   // Exercise selected and is not part of the Intervie Script
                    this.scriptViewer.interviewExercises.push({ id: exercise.id, title: exercise.title, body: exercise.body, solution: exercise.solution, tags: exercise.tags, rating: 0, comments: [], selected: true });
                }
            } else {
                if (this.scriptViewer.interviewExercises.some(ie => ie.id === exercise.id)) {    // Exercise unselected and is part of the Interview Script
                    index = this.scriptViewer.interviewExercises.indexOf(this.scriptViewer.interviewExercises.filter(ie => ie.id === exercise.id)[0]);
                    this.scriptViewer.interviewExercises.splice(index, 1);
                }
            }
        }
        jQuery('#exercisePicker').modal('hide');
    }
    // ----------------------------------------------------------------------------------
    /* QUESTION AND EXERCISE EVENTS */

    onMouseEnterExercises(): void {
        this.hoverSkillId = 0;
        this.hoverExercises = true;
    }

    addComment(type: string, skillId: number, typeId: string, event: any): void {
        let comment: IComment = { text: event.target.value, user: 'Logged User Name', date: new Date() };
        switch (type) {
            case 'question':
                this.scriptViewer.skills.filter(s => s.id === skillId)[0].interviewQuestions
                    .filter(q => q.id === typeId)[0].comments.push(comment);
                break;
            case 'exercise':
                this.scriptViewer.interviewExercises
                    .filter(e => e.id === typeId)[0].comments.push(comment);
                break;
        }
        event.target.value = null;
    }

    deleteComment(type: string, skillId: number, typeId: string, comment: IComment): void {
        let index: number;

        switch (type) {
            case 'question':
                index = this.scriptViewer.skills.filter(s => s.id === skillId)[0].interviewQuestions
                    .filter(q => q.id === typeId)[0].comments.indexOf(comment);
                this.scriptViewer.skills.filter(s => s.id === skillId)[0].interviewQuestions
                    .filter(q => q.id === typeId)[0].comments.splice(index, 1);
                break;
            case 'exercise':
                index = this.scriptViewer.interviewExercises
                    .filter(e => e.id === typeId)[0].comments.indexOf(comment);
                this.scriptViewer.interviewExercises
                    .filter(e => e.id === typeId)[0].comments.splice(index, 1);
                break;
        }
    }
}
