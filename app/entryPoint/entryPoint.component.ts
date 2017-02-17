import { Component, ElementRef } from '@angular/core';
import 'node_modules/uui-framework/js/uui-tree-grid.min.js';

import { ICompetency } from './competency';
import { IDomain } from './domain';
import { ILevel } from './level';

import { EntryPointService } from './entryPoint.service';
import { CompetencyService } from './competency-service';

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

    constructor(private elementRef: ElementRef, private cService: CompetencyService, private service: EntryPointService) { };

    show(): void {
        this.isSkillGridVisible = !this.isSkillGridVisible;

        if (!this.isTreeCreated) {
            this.createTree();
            this.isTreeCreated = true;
        }
    }

    ngOnInit(): void {
        this.competencyId = 0;
        this.cService.getCompetencies().subscribe(
            competencies => {
                this.competencyOptions = competencies;

                if (this.competencyOptions.length > 0) {
                    this.competencyId = this.competencyOptions[0].id;
                    this.onCompetencyChange(this.competencyId);
                }
            },
            error => console.log(<any>error));


    }

    onCompetencyChange(competencyId: number): void {
        
        // clear the domain Selection and the competency Options Array
        this.domainId = 0;
        this.domainOptions = [];

        this.service.getLevels().subscribe(
            levels => {
                this.levelOptions = levels.filter(x => x.competencyId == competencyId);

                if (this.levelOptions.length > 0) {
                    this.levelId = this.levelOptions[0].id;
                    this.onLevelChange(this.levelId);
                }
                else{
                    // clear the level Selection and the level Options Array
                    this.levelId = 0;
                }
            },
            error => console.log(<any>error));


    }

    onLevelChange(levelId: number): void {
        // clear the domain Selection
        this.domainId = 0;

        this.service.getDomains().subscribe(
            domains => {
                this.domainOptions = domains.filter(x => x.competencyId == this.competencyId && x.levelId == levelId);

                if (this.domainOptions.length > 0) {
                    console.log(this.domainOptions);
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
}
