import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { ICompetency } from './competency';
import { IDomain } from './domain';
import { ILevel } from './level';

import { CompetencyService } from './competency.service';
import { LevelService } from './level.service';
import { DomainService } from './domain.service';
import { SkillMatrixService } from './SkillMatrix.service';

import { SkillMatrixItem } from '../scriptViewer/classes/skillMatrixItem';

@Component({
    selector: 'ip-entryPoint',
    templateUrl: './entryPoint.component.html',
    styleUrls: ['./entryPoint.component.css']
})
export class EntryPointComponent {
    /* Initilize the filters identifiers */
    competencyId: number;
    levelId: number;
    domainId: number;

    /* Declare options to store the filter data */
    competencyOptions: ICompetency[];
    levelOptions: ILevel[];
    domainOptions: IDomain[];
    skillMatrixItems: SkillMatrixItem[];

    /* Auxiliar flags */
    isSkillGridVisible: boolean;
    isTreeCreated: boolean;
    isSearchDisabled: boolean;

    /* Constructor to inject the diferent services */
    constructor(private router: Router, private elementRef: ElementRef,
        private competencyService: CompetencyService,
        private levelService: LevelService,
        private domainService: DomainService,
        private skillMatrixService: SkillMatrixService) {
    };

    /* Start Initilizers */
    ngOnInit(): void {
        this.initializeCompetencyData();
    }

    initializeCompetencyData(): void {
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

    initializeLevelData(): void {
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

    initializeDomainData(): void {
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
    onSearch(): void {

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
                setTimeout(() => {this.createTree();}, 0);
            },
            error => console.log(<any>error));
    }

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

    onNext(): void {

        // todo: here we will call to an api method to persist the list of selected skill ids
        // let selectedSkills = this.skillMatrixItems.filter(x=> x.isSelected).map(x=> x.id);

        let skillMatrixId = this.domainOptions.find(x=> x.id == this.domainId).skillMatrixId;
        this.router.navigate(['./script-viewer/' + skillMatrixId,]);
    }

    onSkillSelected(skill: SkillMatrixItem): void {
        this.cascadeChilds(skill);
        this.cascadeParent(skill);
    }
    /*End event functions*/

    /*Start helper functions */
    createTree(): void {

        // the id we use to add or remove the script
        let scriptId = 'treegridScript';

        // if the script is already added to the view lets remove it
        if (this.isTreeCreated){
            // remove script from dom
            this.elementRef.nativeElement.removeChild(document.getElementById(scriptId));
        }

        // prepare the script element
        let script = document.createElement('script');
        script.id =  scriptId;
        script.type = 'text/javascript';
        script.innerHTML = '$(\'.uui-table.treegrid\').uui_tree_grid({ collapsed:false,padding_automation:false,padding:10 });';

        // attach script element to the dom
        this.elementRef.nativeElement.appendChild(script);

        // set the flag to true
        this.isTreeCreated = true;
    }

    cascadeChilds(skill: SkillMatrixItem): void {
        if (!skill.hasChildren) {
            return;
        }

        this.skillMatrixItems.filter(x => x.parentId == skill.id).forEach(x => {
            x.isSelected = skill.isSelected;
            this.cascadeChilds(x);
        });
    }

    cascadeParent(skill: SkillMatrixItem): void {
        if (skill.parentId == null) {
            return;
        }

        let parent = this.skillMatrixItems.find(x => x.id == skill.parentId);
        if (parent == null || parent.isSelected == skill.isSelected) {
            return;
        }

        let anyFalse = this.skillMatrixItems.filter(x => x.parentId == parent.id).some(x => !x.isSelected);

        parent.isSelected = !anyFalse;

        this.cascadeParent(parent);
    }

    checkSearchButtonStatus(): void {
        this.isSearchDisabled = (this.competencyId == 0 || this.levelId == 0 || this.domainId == 0);
    }

    competencyComparer(first: ICompetency, second: ICompetency): number {
        if (first.name > second.name) {
            return 1;
        }

        if (first.name < second.name) {
            return -1;
        }

        return 0;
    }

    levelComparer(first: ILevel, second: ILevel): number {
        if (first.name > second.name) {
            return 1;
        }

        if (first.name < second.name) {
            return -1;
        }

        return 0;
    }

    domainComparer(first: IDomain, second: IDomain): number {
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
