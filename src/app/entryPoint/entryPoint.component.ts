import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';


import { ICompetency } from './competency';
import { IDomain } from './domain';
import { ILevel } from './level';

import { CompetencyService } from './competency.service';
import { LevelService } from './level.service';
import { DomainService } from './domain.service';
import { SkillMatrixService } from './SkillMatrix.service';
import { TemplateService } from './template.service';

import { SkillMatrixItem } from '../scriptViewer/classes/skillMatrixItem';

declare var jQuery: any;

@Component({
    selector: 'ip-entryPoint',
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
    skillMatrixItems: SkillMatrixItem[];

    /* Auxiliar flags */
    isSkillGridVisible: boolean;
    isSearchDisabled = true;
    isNextDisabled = false;

    /* Constructor to inject the diferent services */
    constructor(private router: Router, private elementRef: ElementRef,
        private competencyService: CompetencyService,
        private levelService: LevelService,
        private domainService: DomainService,
        private skillMatrixService: SkillMatrixService,
        private templateService: TemplateService) {
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

    onSearch(): void {
        // hide skill grid
        this.isSkillGridVisible = false;

        // get the skillMatrixId from the selected domain
        let skillMatrixId = this.domainOptions.find(x => x.id == this.domainId).skillMatrixId;

        // call the service to get the skill matrix data
        this.skillMatrixService.getSkillMatrix(skillMatrixId).subscribe(
            skillMatrix => {

                // fill the skill picker source
                this.skillMatrixItems = skillMatrix.skills.map(
                    skill => new SkillMatrixItem(skill.id, skill.parentId, skill.name, skill.skillLevel, skill.hasChildren,
                        skill.skillLevel === 1 ? 'treegrid-parent' :
                            (skill.hasChildren ? 'treegrid-parent treegrid-child' : 'treegrid-child')));

                // make grid Visisble
                this.isSkillGridVisible = true;

                // initialize treegrid script
                setTimeout(() => { this.createTree(); }, 0);

                // check if the next button is enabled
                this.checkNextButtonStatus();
            },
            error => console.log(<any>error));
    }

    onSkillSelected(skill: SkillMatrixItem): void {
        // verify or set childs selection
        this.cascadeChilds(skill);

        // ver or set parent selection
        this.cascadeParent(skill);

        // check if the next button is enabled
        this.checkNextButtonStatus();
    }

    onNext(): void {

        // verify at least one skil is selected
        if (!this.isAnySkillSelected()) {
            console.log('No skill was selected');
            return;
        }

        this.templateService.saveTemplate({ id: 0, skillIds: this.skillMatrixItems.filter(x => x.isSelected).map(x => x.id) }).subscribe(
            result => {
                // navigate to the scriptViewer and pass the just created template id
                this.router.navigate(['./script-viewer/' + result.id]);
            });
    }
    /*End event functions*/

    /*Start helper functions */
    private createTree(): void {
        // calls this jQuery function to initialize the uui Tree Grid
        jQuery('.uui-table.treegrid').uui_tree_grid({ collapsed: false, animate: true, padding_automation: false, padding: 0 });
    }

    /* Verify or set childs selection when a Skill parent has changed*/
    private cascadeChilds(skill: SkillMatrixItem): void {
        // if the skill has no children we skip
        if (!skill.hasChildren) {
            return;
        }

        // set the is selected parent flag for each child
        this.skillMatrixItems.filter(x => x.parentId == skill.id).forEach(x => {
            x.isSelected = skill.isSelected;
            this.cascadeChilds(x);
        });

        // determines if the current skill has any child selected
        skill.anyChildSelected = this.isAnyChildSelected(skill);
    }

    /* Verify or set childs selection when a Skill child has changed*/
    private cascadeParent(skill: SkillMatrixItem): void {
        // check if this is root skill
        if (skill.parentId == null) {
            return;
        }

        // get the parent skill and double check if it is null
        let parent = this.skillMatrixItems.find(x => x.id == skill.parentId);
        if (parent == null) {
            return;
        }

        // determines if the parent has any child selected
        parent.anyChildSelected = this.isAnyChildSelected(parent);

        // in the case the parent state is equal to the child skill state we skip
        if (parent.isSelected == skill.isSelected) {
            return;
        }

        // set the parent state acording to the children state
        parent.isSelected = !this.skillMatrixItems.filter(x => x.parentId == parent.id).some(x => !x.isSelected);

        // evaluate the parent skill
        this.cascadeParent(parent);
    }

    /* Function that returns true if there is at least one skill selected */
    private isAnySkillSelected(): boolean {
        return this.skillMatrixItems.some(x => x.isSelected);
    }

    /* Function that returns true if the given skill has some child selected */
    private isAnyChildSelected(parentSkill: SkillMatrixItem): boolean {
        return this.skillMatrixItems.filter(x => x.parentId == parentSkill.id).some(x => x.isSelected);
    }

    // determines when the search button is enabled or not according to the dropdwns values
    private checkSearchButtonStatus(): void {
        this.isSearchDisabled = (this.competencyId == 0 || this.levelId == 0 || this.domainId == 0);
    }

    // determines when the next button is enabled or not according to the selected skills
    private checkNextButtonStatus(): void {
        this.isNextDisabled  = !this.isAnySkillSelected();
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
    /*End helper functions */
}
