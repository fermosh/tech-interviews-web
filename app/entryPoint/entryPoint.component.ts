import { AfterContentInit, Component, ElementRef } from '@angular/core';
import 'node_modules/uui-framework/js/uui-tree-grid.min.js';
@Component({
    selector: 'ip-entryPoint',
    templateUrl: 'app/entryPoint/entryPoint.component.html',
    styleUrls:['app/entryPoint/entryPoint.component.css']
    }
)
export class EntryPointComponent {
    competencyOptions: string[] =['.Net', 'FrontEnd', 'DevOps'];
    levelOptions: string[]=['Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5'];
    domainOptions: string[] = ['FrontEnd web development', 'Backend development', 'Azure development'];
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
}