import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import 'node_modules/uui-framework/uui/js/uui-tree-grid.min.js';

import { ICompetency } from './competency';
import { IDomain } from './domain';
import { ILevel } from './level';

import { CompetencyService } from './competency.service';
import { LevelService } from './level.service';
import { DomainService } from './domain.service';
import { SkillMatrixService } from './SkillMatrix.service';

import { ISkill } from '../scriptViewer/interfaces/skill';
import { SkillMatrixItem } from '../scriptViewer/classes/skillMatrixItem';

@Component({
    selector: 'ip-entryPoint',
    templateUrl: 'app/entryPoint/entryPoint.component.html',
    styleUrls: ['app/entryPoint/entryPoint.component.css']
})
export class EntryPointComponent {
    competencyId: number = 0;
    levelId: number = 0;
    domainId: number = 0;

    competencyOptions: ICompetency[];
    levelOptions: ILevel[];
    domainOptions: IDomain[];

    skillMatrixItems: SkillMatrixItem[];

    isSkillGridVisible: boolean;
    isTreeCreated: boolean;
    isSearchDisabled: boolean;

    constructor(private router: Router, private elementRef: ElementRef,
        private competencyService: CompetencyService,
        private levelService: LevelService,
        private domainService: DomainService,
        private skillMatrixService: SkillMatrixService) {
    };

    /* Start Initilizers */
    ngOnInit(): void {
        this.initializeCompetencyData();
        this.createTree();
    }

    initializeCompetencyData(): void {
        // load competency dropdown
        this.competencyService.getCompetencies().subscribe(
            competencies => {
                // fill the available competencies with the ones from the datasource
                this.competencyOptions = competencies.sort((c1, c2) => this.competencyComparer(c1, c2));

                if (this.competencyOptions.length > 0) {
                    this.competencyId = this.competencyOptions[0].id;
                }

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
                if (possibleLevels.length > 0) {
                    this.levelId = possibleLevels[0].id;
                }

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
                if (possibleDomains.length > 0) {
                    this.domainId = possibleDomains[0].id;
                }

                this.checkSearchButtonStatus();
            },
            error => console.log(<any>error));
    }
    /* End Initilizers */

    /*Start event functions*/
    onSearch(): void {

        this.isSkillGridVisible = false;
        
        // get the skillMatrixId from the selected domain
        let skillMatrixId = this.domainOptions.find(x=> x.id == this.domainId).skillMatrixId;

        this.skillMatrixService.getSkillMatrix(skillMatrixId).subscribe(
            skillMatrix => {
                this.skillMatrixItems = skillMatrix.skills.map(skill => new SkillMatrixItem(skill.id, skill.parentId, skill.name, skill.skillLevel, skill.hasChilds));
                this.isSkillGridVisible = true;
            },
            error => console.log(<any>error));
    }

    onCompetencyChange(competencyId: number): void {
        this.levelId = 0;
        this.domainId = 0;
        this.checkSearchButtonStatus();
    }

    onLevelChange(levelId: number): void {
        this.domainId = 0;
        this.checkSearchButtonStatus();
    }

    onDomainChange(domainId: number): void {
        this.checkSearchButtonStatus();
    }

    onNext(): void {

        // todo: here we will call to an api method to persist the list of selected skill ids
        //let selectedSkills = this.skillMatrixItems.filter(x=> x.isSelected).map(x=> x.id);

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
        let scriptName = 'treegridScript';

        if(this.isTreeCreated)
        {
            // remove script from dom
            let treegridScript = document.getElementById(scriptName);
            treegridScript.parentElement.removeChild(treegridScript);
        }

        let s = document.createElement('script');
        s.id =  scriptName;
        s.type = 'text/javascript';
        s.innerHTML = '$(\'.uui-table.treegrid\').uui_tree_grid({ collapsed:false,padding_automation:false,padding:10 });';
        this.elementRef.nativeElement.appendChild(s);

        this.isTreeCreated = true;
    }

    cascadeChilds(skill: SkillMatrixItem): void {
        if (!skill.hasChilds) {
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

    getClassName(skill: SkillMatrixItem): string {
        if (skill.skillLevel === 1) {
            return 'treegrid-parent';
        }

        return skill.hasChilds ? 'treegrid-parent treegrid-child' : 'treegrid-child';
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