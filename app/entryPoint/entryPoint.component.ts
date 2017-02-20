import { Component, ElementRef } from '@angular/core';
import 'node_modules/uui-framework/js/uui-tree-grid.min.js';

import { ICompetency } from './competency';
import { IDomain } from './domain';
import { ILevel } from './level';

import { CompetencyService } from './competency.service';

@Component({
    selector: 'ip-entryPoint',
    templateUrl: 'app/entryPoint/entryPoint.component.html',
    styleUrls: ['app/entryPoint/entryPoint.component.css']
    }
)

export class EntryPointComponent {
    competencyId: number;
    levelId: number;
    domainId: number;

    competencies: ICompetency[];
    levels: ILevel[];
    domains: IDomain[];

    isSkillGridVisible: boolean;
    isTreeCreated: boolean;

    constructor(private elementRef: ElementRef, private competencyService: CompetencyService) {};

    show(): void {
        this.isSkillGridVisible = !this.isSkillGridVisible;

        if (!this.isTreeCreated) {
            this.createTree();
            this.isTreeCreated = true;
        }
    }

    ngOnInit(): void {
        this.competencyId = 0;
        this.competencyService.getCompetencies()
                .subscribe(competencies => this.competencies = competencies,
                        error => alert(<any>error));
    }

    createTree(): void {
        let s = document.createElement('script');
        s.type = 'text/javascript';
        s.innerHTML = '$(\'.uui-table.treegrid\').uui_tree_grid({ collapsed:false,padding_automation:false,padding:10 });';
        this.elementRef.nativeElement.appendChild(s);
    }

    onCompetencyChange(competencyId: number): void {
        // clear the level Selection and the level Options Array
        this.levelId = 0;
        this.levels = [];

        // clear the domain Selection and the competency Options Array
        this.domainId = 0;
        this.domains = [];

        // this.service.getLevels().subscribe(
        //     levels => this.levelOptions = levels.filter(x => x.competencyId === competencyId),
        //     error => alert(<any>error));
    }

    onLevelChange(levelId: number): void {
        // clear the domain Selection
        this.domainId = 0;

        // this.service.getDomains().subscribe(
        //     domains => this.domainOptions = domains.filter(x => x.competencyId === this.competencyId && x.levelId === levelId),
        //     error => alert(<any>error));
    }

    onNext(): void {
        alert('CompetencyId:' + this.competencyId + ', LevelId:' + this.levelId + ', DomainId:' + this.domainId);
    }
}
