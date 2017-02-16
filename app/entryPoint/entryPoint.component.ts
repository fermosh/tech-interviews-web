import { Component, ElementRef } from '@angular/core';
import 'node_modules/uui-framework/js/uui-tree-grid.min.js';

import { ICompetency } from './competency';
import { IDomain } from './domain';
import { ILevel } from './level';

import { EntryPointService } from './entryPoint.service';

@Component({
    selector: 'ip-entryPoint',
    templateUrl: 'app/entryPoint/entryPoint.component.html',
    styleUrls:['app/entryPoint/entryPoint.component.css']
    }
)
export class EntryPointComponent {
    competencyId: number = 0;
    levelId: number = 0;
    domainId: number = 0;

    competencyOptions: ICompetency[];
    levelOptions: ILevel[];
    domainOptions: IDomain[];

    isSkillGridVisible: boolean = false;
    isTreeCreated:boolean= false;

    constructor(private elementRef:ElementRef, private service: EntryPointService) {};

    show():void {
        this.isSkillGridVisible = !this.isSkillGridVisible;

        if(!this.isTreeCreated){
            this.createTree();
            this.isTreeCreated = true;
        }
    }

    ngOnInit(): void {
        this.competencyId = 0;
        this.service.getCompetencies().subscribe(
            competencies => this.competencyOptions = competencies,
            error => alert(<any>error));
    }

    createTree(): void {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.innerHTML = "$('.uui-table.treegrid').uui_tree_grid({ collapsed:false,padding_automation:false,padding:10 });";
        this.elementRef.nativeElement.appendChild(s);
    }

    onCompetencyChange(competencyId:number):void
    {
        // clear the level Selection and the level Options Array
        this.levelId = 0;
        this.levelOptions = [];

        // clear the domain Selection and the competency Options Array
        this.domainId = 0;
        this.domainOptions = [];

        this.service.getLevels().subscribe(
            levels => this.levelOptions = levels.filter(x=> x.competencyId == competencyId),
            error => alert(<any>error));
    }

    onLevelChange(levelId:number):void
    {
        // clear the domain Selection
        this.domainId = 0;
        
        this.service.getDomains().subscribe(
            domains => this.domainOptions = domains.filter(x=> x.competencyId == this.competencyId && x.levelId == levelId),
            error => alert(<any>error));
    }

    onNext():void
    {
        alert("CompetencyId:" + this.competencyId + ", LevelId:" + this.levelId + ", DomainId:" + this.domainId);
    }
}