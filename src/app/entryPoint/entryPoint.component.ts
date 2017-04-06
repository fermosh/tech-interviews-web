import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ICompetency } from './classes/competency';
import { ILevel } from './../shared/classes/level';
import { Skill } from '../shared/classes/skill';

import { SkillMatrixService } from './../shared/services/skill-matrix.service';
import { TemplateService } from './../shared/services/template.service';
import { PositionService } from './../shared/services/position.service';

import { ITemplate } from './../shared/classes/template';
import { SkillMatrixItem } from './classes/skillMatrixItem';
import { Observable } from 'rxjs/Observable';

declare var jQuery: any;

@Component({
    templateUrl: './entryPoint.component.html',
    styleUrls: ['./entryPoint.component.css']
})
export class EntryPointComponent {
    /* Initilize the filters identifiers */
    competencyId = 0;
    levelId = 0;
    domainId = 0;

    selectedCompetencyId = 0;
    selectedLevelId = 0;

    /* Declare options to store the filter data */
    competencies: ICompetency[];

    levels: ILevel[];

    /*Skills for the skill picker*/
    skills: SkillMatrixItem[];

    /* Auxiliar flags */
    private isSkillGridVisible: boolean;
    private isSearchDisabled = true;
    private isNextDisabled = false;

    skillPickerLegend = '';

    /* Constructor to inject the diferent services */
    constructor(
        private skillMatrixService: SkillMatrixService,
        private templateService: TemplateService,
        private positionService: PositionService,
        private router: Router) { };

    /* Start Initilizers */
    ngOnInit(): void {
        this.initializeFilterData();
    }

    // Get and fill the Competency dropdown data*/
    private initializeFilterData(): void {

        // Initilize levels, they are going to be 5 for default
        this.levels = [
            { id: 1, name: 'L1', description: 'Level 1' },
            { id: 2, name: 'L2', description: 'Level 2' },
            { id: 3, name: 'L3', description: 'Level 3' },
            { id: 4, name: 'L4', description: 'Level 4' },
            { id: 5, name: 'L5', description: 'Level 5' }
        ];

        // call the position service to get the competencies
        this.positionService.getCompetencies().subscribe(
            competencies => { this.competencies = competencies; },
            error => console.log(<any>error));
    }
    /* End Initilizers */

    /*Start event functions*/
    private onCompetencyChange(competencyId: number): void {
        // reset level and domain selections
        this.domainId = 0;

        // verify the search status
        this.checkSearchButtonStatus();
    }

    private onLevelChange(levelId: number): void {
        // verify the search status
        this.checkSearchButtonStatus();
    }

    private onDomainChange(domainId: number): void {
        // verify the search status
        this.checkSearchButtonStatus();
    }

    private onPickerSelectionChanged(): void {
        this.checkNextButtonStatus();
    }

    private onNext(): void {

        // verify at least one skil is selected
        if (!this.isAnySkillSelected()) {
            console.log('No skill was selected');
            return;
        }

        // this.saveTemplateAndRedirect(this.skills.filter(x => x.isSelected).map(x => x.id));
        this.saveTemplate(this.selectedCompetencyId, this.selectedLevelId, this.skills.filter(x => x.isSelected).map(x => x.id)).subscribe(
            result => {
                // navigate to the scriptViewer and pass the just created template id
                this.router.navigate(['./script-viewer/' + result.id]);
            });
    }

    private onSearch(): void {
        // hide skill grid
        this.isSkillGridVisible = false;

        // get the skillMatrixId from the selected domain
        this.selectedCompetencyId = this.getCompetencyId();

        this.selectedLevelId = this.levelId;

        // call the service to get the skill matrix data
        this.skillMatrixService.getSkillMatrixByLevel(this.selectedCompetencyId, this.selectedLevelId).subscribe(
            skillMatrix => {
                // fill the skill picker source
                this.skills = this.processSkills(skillMatrix.skills)
                    .map(skill => new SkillMatrixItem(skill.id, skill.parentId, skill.name, skill.skillLevel, skill.hasChildren));

                // set the skillPicker header
                this.skillPickerLegend = this.getLabel();

                // make grid Visisble
                this.isSkillGridVisible = true;

                // check if we can enable the next button according to the skills selected
                this.checkNextButtonStatus();
            },
            error => console.log(<any>error));
    }
    /*End event functions*/

    /* Start helper functions */

    private getCompetencyId(): number {
        return this.domainId == 0 ? this.competencyId : this.domainId;
    }

    processSkills(skills: Skill[]): Skill[] {

        // initialize a new skill array
        let output: Skill[] = [];

        // apply the fillSkillInfo function to the first level objects
        // this will also unchain the same function to their children
        skills.filter(x => x.parentId == null).forEach(x => this.fillSkillInfo(x, 1, skills, output));

        // return the output array
        return output;
    }

    private fillSkillInfo(skill: Skill, initialLevel: number, source: Skill[], output: Skill[]) {

        // add the skill to the new array
        output.push(skill);

        // set the level to the current skill
        skill.skillLevel = initialLevel;

        // look for the current skill children
        let children = source.filter(x => x.parentId == skill.id);

        // set the haschildren flag for the skill
        // hack: for the moment we just allow maximum 5 levels
        skill.hasChildren = children.length > 0;

        if (!skill.hasChildren) {
            return;
        };

        // apply this same function to every children of the skill
        children.forEach(y => this.fillSkillInfo(y, initialLevel + 1, source, output));
    }

    // promise to save a template
    private saveTemplate(competencyId: number, jobfubctionLevel: number, skillIds: number[]): Observable<ITemplate> {
        // save template
        return this.templateService.saveTemplate(
            { id: '', skillIds: skillIds, competencyId: competencyId, jobfubctionLevel: jobfubctionLevel });
    }

    // determines when the next button is enabled or not according to the selected skills
    private checkNextButtonStatus(): void {
        this.isNextDisabled = !this.isAnySkillSelected();
    }

    // return a label to show in the skill picker header
    private getLabel(): string {

        let label = '';
        let competency = this.competencies.find(x => x.id == this.competencyId);

        if (competency == undefined) {
            return label;
        }

        label = competency.name;

        let domain = this.competencies.find(x => x.id == this.domainId);

        if (domain == undefined) {
            return label;
        }

        label = label + ' ' + domain.name;

        let level = this.levels.find(x => x.id == this.levelId);

        if (level == undefined) {
            return label;
        }

        return label + '(' + level.name + ')';
    }

    // Function that returns true if there is at least one skill selected
    private isAnySkillSelected(): boolean {
        return this.skills.some(x => x.isSelected);
    }

    // determines when the search button is enabled or not according to the dropdwns values
    private checkSearchButtonStatus(): void {
        this.isSearchDisabled = (this.competencyId == 0 || this.levelId == 0);
    }
    /*End helper functions */
}
