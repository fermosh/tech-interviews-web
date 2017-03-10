import { Component } from '@angular/core';

import { ICompetency } from './competency';
import { IDomain } from './domain';
import { ILevel } from './level';

import { CompetencyService } from './competency.service';
import { LevelService } from './level.service';
import { DomainService } from './domain.service';
import { SkillMatrixService } from './skill-matrix.service';

import { SkillMatrixItem } from './../scriptViewer/classes/skillMatrixItem';

import { TemplateService } from './template.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './entryPoint.component.html',
    styleUrls: ['./entryPoint.component.css']
})
export class EntryPointComponent {
    /* Initilize the filters identifiers */
    competencyId = 0;
    levelId = 0;
    domainId = 0;

    /* Declare options to store the filter data */
    competencyOptions: ICompetency[];
    levelOptions: ILevel[];
    domainOptions: IDomain[];

    /*Skills for the skill picker*/
    skills: SkillMatrixItem[];

    /* Auxiliar flags */
    private isSkillGridVisible: boolean;
    private isSearchDisabled = true;
    private isNextDisabled = false;

    skillPickerLegend = '';

    /* Constructor to inject the diferent services */
    constructor(
        private competencyService: CompetencyService,
        private levelService: LevelService,
        private domainService: DomainService,
        private skillMatrixService: SkillMatrixService,
        private templateService: TemplateService,
        private router: Router) {
    };

    /* Start Initilizers */
    ngOnInit(): void {
        this.initializeCompetencyData();
    }

    /*Get and fill the Competency dropdown data*/
    private initializeCompetencyData(): void {
        // load competency dropdown
        this.competencyService.getCompetencies().subscribe(
            competencies => {
                // fill the available competencies with the ones from the datasource
                this.competencyOptions = competencies.sort((c1, c2) => this.competencyComparer(c1, c2));

                // if there is more than one competency use the first one
                if (this.competencyOptions.length > 0) {
                    this.competencyId = this.competencyOptions[0].id;
                }

                // call the level initialization
                this.initializeLevelData();
            },
            error => console.log(<any>error));
    }

    /*Get and fill the Level dropdown data*/
    private initializeLevelData(): void {
        // load level dropdown
        this.levelService.getLevels().subscribe(
            levels => {
                // fill the available levels
                this.levelOptions = levels.sort((l1, l2) => this.levelComparer(l1, l2));

                // possible levels
                let possibleLevels = this.levelOptions.filter(x => x.competencyId == this.competencyId);

                // if there is more than one level use the first one
                if (possibleLevels.length > 0) {
                    this.levelId = possibleLevels[0].id;
                }

                // call the domain initialization
                this.initializeDomainData();
            },
            error => console.log(<any>error));
    }

    /*Get and fill the Domain dropdown data*/
    private initializeDomainData(): void {
        // load domain dropdown
        this.domainService.getDomains().subscribe(
            domains => {
                // fill the available domains
                this.domainOptions = domains.sort((d1, d2) => this.domainComparer(d1, d2));

                // possible levels
                let possibleDomains = this.domainOptions.filter(x => x.levelId == this.levelId);

                // if there is more than one domain use the first one
                if (possibleDomains.length > 0) {
                    this.domainId = possibleDomains[0].id;
                }

                // verify the search status
                this.checkSearchButtonStatus();
            },
            error => console.log(<any>error));
    }
    /* End Initilizers */

    /*Start event functions*/
    onCompetencyChange(competencyId: number): void {
        // reset level and domain selections
        this.levelId = 0;
        this.domainId = 0;

        // verify the search status
        this.checkSearchButtonStatus();
    }

    onLevelChange(levelId: number): void {
        // reset domain selections
        this.domainId = 0;

        // verify the search status
        this.checkSearchButtonStatus();
    }

    onDomainChange(domainId: number): void {
        // verify the search status
        this.checkSearchButtonStatus();
    }

    onSkillSelected(skill: SkillMatrixItem): void{
        this.skills.filter(x => x.id == skill.id).forEach(x => x.isSelected = skill.isSelected);
        this.checkNextButtonStatus();
    }

    private onNext(): void {

        // verify at least one skil is selected
        // if (!this.isAnySkillSelected()) {
        //     console.log('No skill was selected');
        //     return;
        // }

        this.templateService.saveTemplate({ id: 0, skillIds: this.skills.filter(x => x.isSelected).map(x => x.id) }).subscribe(
            result => {
                // navigate to the scriptViewer and pass the just created template id
                this.router.navigate(['./script-viewer/' + result.id]);
            });
    }

    // determines when the next button is enabled or not according to the selected skills
    private checkNextButtonStatus(): void {
        this.isNextDisabled = !this.isAnySkillSelected();
    }

    /* Function that returns true if there is at least one skill selected */
    private isAnySkillSelected(): boolean {
        return this.skills.some(x => x.isSelected);
    }

    onSearch(): void {
        // hide skill grid
        this.isSkillGridVisible = false;

        // get the skillMatrixId from the selected domain
        let skillMatrixId = this.domainOptions.find(x => x.id == this.domainId).skillMatrixId;

        // call the service to get the skill matrix data
        this.skillMatrixService.getSkillMatrix(skillMatrixId).subscribe(
            skillMatrix => {

                // fill the skill picker source
                this.skills = skillMatrix.skills.map(
                    skill => new SkillMatrixItem(skill.id, skill.parentId, skill.name, skill.skillLevel, skill.hasChildren));

                // set the skillPicker header
                this.skillPickerLegend = this.getLabel();

                // make grid Visisble
                this.isSkillGridVisible = true;

                this.checkNextButtonStatus();
            },
            error => console.log(<any>error));
    }
    /*End event functions*/

    // determines when the search button is enabled or not according to the dropdwns values
    private checkSearchButtonStatus(): void {
        this.isSearchDisabled = (this.competencyId == 0 || this.levelId == 0 || this.domainId == 0);
    }

    // ICompetency Comparer(for sorting purpose)
    private competencyComparer(first: ICompetency, second: ICompetency): number {
        if (first.name > second.name) {
            return 1;
        }

        if (first.name < second.name) {
            return -1;
        }

        return 0;
    }

    // ILevel Comparer(for sorting purpose)
    private levelComparer(first: ILevel, second: ILevel): number {
        if (first.name > second.name) {
            return 1;
        }

        if (first.name < second.name) {
            return -1;
        }

        return 0;
    }

    // IDomain Comparer(for sorting purpose)
    private domainComparer(first: IDomain, second: IDomain): number {
        if (first.name > second.name) {
            return 1;
        }

        if (first.name < second.name) {
            return -1;
        }

        return 0;
    }

    private getLabel(): string {

        let label = '';
        let competency =  this.competencyOptions.find(x => x.id == this.competencyId);

        if (competency == undefined){
            return label;
        }

        label = competency.name;

        let domain =  this.domainOptions.find(x => x.id == this.domainId);

        if (domain == undefined) {
            return label;
        }

        label = label + ' ' + domain.name;

        let level =  this.levelOptions.find(x => x.id == this.levelId);

        if (level == undefined){
            return label;
        }

        return label + '(' + level.name + ')';
    }
    /*End helper functions */
}
