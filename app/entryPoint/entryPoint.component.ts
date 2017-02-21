import { Component, ElementRef } from '@angular/core';
import 'node_modules/uui-framework/uui/js/uui-tree-grid.min.js';

import { ICompetency } from './competency';
import { IDomain } from './domain';
import { ILevel } from './level';

import { CompetencyService } from './competency.service';
import { LevelService } from './level.service';
import { DomainService } from './domain.service';

import { ISkill } from '../scriptViewer/interfaces/skill';
import { SkillMatrixItem } from '../scriptViewer/classes/skillMatrixItem';

@Component({
    selector: 'ip-entryPoint',
    templateUrl: 'app/entryPoint/entryPoint.component.html',
    styleUrls: ['app/entryPoint/entryPoint.component.css']
})
export class EntryPointComponent {
    competencyId: number;
    levelId: number;
    domainId: number;

    competencyOptions: ICompetency[];
    levelOptions: ILevel[];
    domainOptions: IDomain[];

    isSkillGridVisible: boolean;
    isTreeCreated: boolean;

    constructor(private elementRef: ElementRef, 
        private competencyService: CompetencyService,
        private levelService: LevelService,
        private domainService: DomainService){
    };

    show(): void {
        this.isSkillGridVisible = !this.isSkillGridVisible;

        if (!this.isTreeCreated) {
            this.createTree();
            this.isTreeCreated = true;
        }
    }

    ngOnInit(): void {
        this.competencyId = 0;
        this.competencyService.getCompetencies().subscribe(
            competencies => {
                this.competencyOptions = competencies;

                if (this.competencyOptions.length > 0) {
                    this.competencyId = this.competencyOptions[0].id;
                    this.onCompetencyChange(this.competencyId);
                }
            },
            error => console.log(<any>error));

        this.skillMatrixItems = this.skillMatrix.map(x => new SkillMatrixItem(x.id, x.name, x.skillLevel, x.hasChilds));
    }

    onCompetencyChange(competencyId: number): void {

        // clear the domain Selection and the competency Options Array
        this.domainId = 0;
        this.domainOptions = [];

        this.levelService.getLevels().subscribe(
            levels => {
                this.levelOptions = levels.filter(x => x.competencyId == competencyId);

                if (this.levelOptions.length > 0) {
                    this.levelId = this.levelOptions[0].id;
                    this.onLevelChange(this.levelId);
                }
                else {
                    // clear the level Selection and the level Options Array
                    this.levelId = 0;
                }
            },
            error => console.log(<any>error));
    }

    onLevelChange(levelId: number): void {
        // clear the domain Selection
        this.domainId = 0;

        this.domainService.getDomains().subscribe(
            domains => {
                this.domainOptions = domains.filter(x => x.competencyId == this.competencyId && x.levelId == levelId);

                if (this.domainOptions.length > 0) {
                    this.domainId = this.domainOptions[0].id;
                }
            },
            error => console.log(<any>error));
    }

    onNext(): void {
        alert('CompetencyId:' + this.competencyId + ', LevelId:' + this.levelId + ', DomainId:' + this.domainId);
    }

    createTree(): void {
        let s = document.createElement('script');
        s.type = 'text/javascript';
        s.innerHTML = '$(\'.uui-table.treegrid\').uui_tree_grid({ collapsed:false,padding_automation:false,padding:10 });';
        this.elementRef.nativeElement.appendChild(s);
    }

    skillMatrixItems: SkillMatrixItem[];

    skillMatrix: ISkill[] = [{
        rootId: 7,
        displayOrder: -100500,
        requiredSkillLevel: 0,
        userSkillLevel: 0,
        levelSet: 0,
        competencyId: 13,
        jobFunctionLevel: 3,
        topics: [],
        id: 7,
        parentId: null,
        name: 'Hard skills',
        isSelectable: true,
        skillLevel: 1,
        hasChilds: true
    },
    {
        rootId: 7,
        displayOrder: 95,
        requiredSkillLevel: 0,
        userSkillLevel: 0,
        levelSet: 0,
        competencyId: 13,
        jobFunctionLevel: 3,
        topics: [],
        id: 973,
        parentId: 7,
        name: 'Management',
        isSelectable: true,
        skillLevel: 2,
        hasChilds: true
    },
    {
        rootId: 7,
        displayOrder: 96,
        requiredSkillLevel: 0,
        userSkillLevel: 0,
        levelSet: 0,
        competencyId: 13,
        jobFunctionLevel: 3,
        topics: [],
        id: 479,
        parentId: 973,
        name: 'General Management',
        isSelectable: true,
        skillLevel: 3,
        hasChilds: true
    },
    {
        rootId: 7,
        displayOrder: 97,
        requiredSkillLevel: 10,
        userSkillLevel: 0,
        levelSet: 0,
        competencyId: 13,
        jobFunctionLevel: 3,
        topics: [
            {
                name: 'Leadership - Novice',
                isRequired: true
            },
            {
                name: 'Leadership - Advanced',
                isRequired: false
            },
            {
                name: 'Leadership - Intermediate',
                isRequired: false
            }
        ],
        id: 573,
        parentId: 479,
        name: 'Leadership',
        isSelectable: true,
        skillLevel: 4,
        hasChilds: true
    },

    {
        rootId: 7,
        displayOrder: 97,
        requiredSkillLevel: 10,
        userSkillLevel: 0,
        levelSet: 0,
        competencyId: 13,
        jobFunctionLevel: 3,
        topics: [],
        id: 573,
        parentId: 479,
        name: 'Leadership 1',
        isSelectable: true,
        skillLevel: 5,
        hasChilds: false
    },

    {
        rootId: 7,
        displayOrder: 99,
        requiredSkillLevel: 10,
        userSkillLevel: 0,
        levelSet: 0,
        competencyId: 13,
        jobFunctionLevel: 3,
        topics: [
            {
                name: 'Planning and Organizing - Novice',
                isRequired: true
            },
            {
                name: 'Planning and Organizing - Advanced',
                isRequired: false
            },
            {
                name: 'Planning and Organizing - Intermediate',
                isRequired: false
            }
        ],
        id: 569,
        parentId: 479,
        name: 'Planning and Organizing',
        isSelectable: true,
        skillLevel: 4,
        hasChilds: false
    },
    {
        rootId: 7,
        displayOrder: 100,
        requiredSkillLevel: 10,
        userSkillLevel: 0,
        levelSet: 0,
        competencyId: 13,
        jobFunctionLevel: 3,
        topics: [
            {
                name: 'Delegation - Novice',
                isRequired: true
            },
            {
                name: 'Delegation - Advanced',
                isRequired: false
            },
            {
                name: 'Delegation - Intermediate',
                isRequired: false
            }
        ],
        id: 570,
        parentId: 479,
        name: 'Delegation',
        isSelectable: true,
        skillLevel: 4,
        hasChilds: false
    },
    {
        rootId: 7,
        displayOrder: 101,
        requiredSkillLevel: 10,
        userSkillLevel: 0,
        levelSet: 0,
        competencyId: 13,
        jobFunctionLevel: 3,
        topics: [
            {
                name: 'Control - Novice',
                isRequired: true
            },
            {
                name: 'Control - Advanced',
                isRequired: false
            },
            {
                name: 'Control - Intermediate',
                isRequired: false
            }
        ],
        id: 571,
        parentId: 479,
        name: 'Control',
        isSelectable: true,
        skillLevel: 4,
        hasChilds: false
    }];
}