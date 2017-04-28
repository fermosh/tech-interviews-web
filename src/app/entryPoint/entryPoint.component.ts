import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ICompetency } from '../shared/classes/competency';
import { ILevel } from './../shared/classes/level';
import { Skill } from '../shared/classes/skill';

import { SkillMatrixService } from './../shared/services/skill-matrix.service';
import { TemplateService } from './../shared/services/template.service';
import { CompetencyService } from './../shared/services/competency.service';

import { ITemplate } from './../shared/classes/template';
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

    selectedCompetencyId = this.competencyId;
    selectedLevelId = this.levelId;

    /* Declare options to store the filter data */
    competencies: ICompetency[];

    levels: ILevel[];

    /*Skills for the skill picker*/
    skills: Skill[];

    skillsSelected: number[] = [];

    /* Auxiliar flags */
    isSkillGridVisible: boolean;
    isSearchDisabled = true;
    isNextDisabled = false;

    skillPickerLegend = '';

    /* Constructor to inject the diferent services */
    constructor(
        private skillMatrixService: SkillMatrixService,
        private templateService: TemplateService,
        private competencyService: CompetencyService,
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
        this.competencyService.getCompetencies()
            .subscribe(competencies => { this.competencies = competencies; }, error => console.log(<any>error));
    }
    /* End Initilizers */

    /*Start event functions*/
    onCompetencyChanged(competencyId: number): void {
        this.competencyId = competencyId;

        // verify the search status
        this.checkSearchButtonStatus();
    }

    onLevelChange(levelId: number): void {
        // verify the search status
        this.checkSearchButtonStatus();
    }

    private onPickerSelectionChanged(skillIds: number[]): void {
        this.skillsSelected = skillIds;
        this.checkNextButtonStatus();
    }

    private onNext(): void {

        // verify at least one skil is selected
        if (!this.isAnySkillSelected()) {
            console.log('No skill was selected');
            return;
        }

        this.saveTemplate(this.selectedCompetencyId, this.selectedLevelId, this.skillsSelected).subscribe(
            result => {
                // navigate to the scriptViewer and pass the just created template id
                this.router.navigate(['./script-viewer/' + result.id]);
            });
    }

    onSearch(): void {

        if (this.levelId == this.selectedLevelId && this.competencyId == this.selectedCompetencyId) {
            return;
        }

        // hide skill grid
        this.isSkillGridVisible = false;

        // get the skillMatrixId from the selected domain
        this.selectedCompetencyId = this.competencyId;

        this.selectedLevelId = this.levelId;

        // call the service to get the skill matrix data
        this.skillMatrixService.getSkillMatrix(this.selectedCompetencyId, this.selectedLevelId).subscribe(
            skillMatrix => {
                // fill the skill picker source
                this.skills = skillMatrix.skills;

                let legend = this.getLabel(this.selectedCompetencyId, this.selectedLevelId);

                // set the skillPicker header
                this.skillPickerLegend = legend;

                // make grid Visisble
                this.isSkillGridVisible = true;

                // check if we can enable the next button according to the skills selected
                this.checkNextButtonStatus();
            },
            error => console.log(<any>error));
    }
    /*End event functions*/

    /* Start helper functions */
    // promise to save a template
    private saveTemplate(competencyId: number, jobfubctionLevel: number, skillIds: number[]): Observable<ITemplate> {
        // save template
        return this.templateService
            .saveTemplate({ id: '', skillIds: skillIds, competencyId: competencyId, jobfubctionLevel: jobfubctionLevel });
    }

    // determines when the next button is enabled or not according to the selected skills
    private checkNextButtonStatus(): void {
        this.isNextDisabled = !this.isAnySkillSelected();
    }

    // return a label to show in the skill picker header
    private getLabel(competencyId: number, levelId: number): string {

        let label = '';
        let competency = this.competencies.find(x => x.id == competencyId);

        if (competency == undefined) {
            return label;
        }

        label = competency.name;

        let level = this.levels.find(x => x.id == levelId);

        if (level == undefined) {
            return label;
        }

        return label + '(' + level.name + ')';
    }

    // Function that returns true if there is at least one skill selected
    private isAnySkillSelected(): boolean {
        return this.skillsSelected.length > 0;
    }

    // determines when the search button is enabled or not according to the dropdwns values
    private checkSearchButtonStatus(): void {
        this.isSearchDisabled = (this.competencyId == 0 || this.levelId == 0);
    }
    /*End helper functions */
}
