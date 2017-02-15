import { Component, ElementRef } from '@angular/core';

import 'node_modules/uui-framework/js/uui-tree-grid.min.js';
@Component({
    selector: 'ip-entryPoint',
    templateUrl: 'app/entryPoint/entryPoint.component.html',
    styleUrls:['app/entryPoint/entryPoint.component.css']
    }
)
export class EntryPointComponent {
    competency: string;
    level: string;
    domain: string;

    competencyOptions: string[]=['FrontEnd','.Net'];
    levelOptions: string[];//=['Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5'];
    domainOptions: string[]; //= ['FrontEnd web development', 'Backend development', 'Azure development'];

    isSkillGridVisible: boolean = false;
    isTreeCreated:boolean= false;

    constructor(private elementRef:ElementRef) {};

    show():void {
        this.isSkillGridVisible = !this.isSkillGridVisible;

        if(!this.isTreeCreated){
            this.createTree();
            this.isTreeCreated = true;
        }
    }

    createTree(): void {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.innerHTML = "$('.uui-table.treegrid').uui_tree_grid({ collapsed:false,padding_automation:false,padding:10 });";
        this.elementRef.nativeElement.appendChild(s);
    }

    onCompetencyChange(competency:string):void
    {
        // reset the level selected
        this.level = '';

        switch (competency) {
            case 'FrontEnd':
                this.levelOptions = ['Level 2','Level 3', 'Level 4'];
                break;
            case '.Net':
                this.levelOptions = ['Level 3', 'Level 4', 'Level 5'];
                break;
            default:
                this.levelOptions = [];
                break;
        }

        this.domain = '';
        this.domainOptions = [];
    }

    onLevelChange(level:string):void
    {
        this.domain = '';
        this.domainOptions = [];

        if(this.competency === '.Net'){
            switch (level) {
                case 'Level 3':
                    this.domainOptions = ['FrontEnd web development'];
                    break;
                case 'Level 4':
                    this.domainOptions = ['FrontEnd web development', 'Backend development'];
                    break;
                default:
                    this.domainOptions = ['FrontEnd web development', 'Backend development', 'Azure development']
                    break;
            }
        }
        else{
            switch (level) {
                case 'Level 2':
                    this.domainOptions = ['Html5'];
                    break;
                case 'Level 3':
                    this.domainOptions = ['Html5', 'CSS3'];
                    break;
                default:
                    this.domainOptions = ['Html5', 'CSS3', 'Javascript'];
                    break;
            }
        }
    }
}