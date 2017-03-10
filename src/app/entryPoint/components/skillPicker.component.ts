import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SkillMatrixItem } from './../../scriptViewer/classes/skillMatrixItem';

import { ICompetency } from './../competency';
import { IDomain } from './../domain';
import { ILevel } from './../level';

declare var jQuery: any;

@Component({
    selector: 'app-skill-picker',
    templateUrl: './skillPicker.component.html',
    styleUrls: ['./skillPicker.component.css']
})
export class SkillPickerComponent {

    private isTreeCreated = false;

    @Input() skills: SkillMatrixItem[];
    @Input() header: string;

    @Output() selectedSkill: EventEmitter<SkillMatrixItem> = new EventEmitter<SkillMatrixItem>();

    ngOnInit(): void {
        this.skills.forEach(skill => skill.className = this.getClassName(skill));
    }

    private getClassName(skill: SkillMatrixItem): string  {
        return skill.skillLevel === 1 ? 'treegrid-parent' : (skill.hasChildren ? 'treegrid-parent treegrid-child' : 'treegrid-child');
    }

    private ngAfterViewChecked(): void {
        if (!this.isTreeCreated) {
            this.createTree();
            this.isTreeCreated = true;
        }
    }

    onSkillSelected(skill: SkillMatrixItem): void {
        // verify or set childs selection
        this.cascadeChilds(skill);

        // ver or set parent selection
        this.cascadeParent(skill);

        this.selectedSkill.emit(skill);
    }

    /* Verify or set childs selection when a Skill parent has changed*/
    private cascadeChilds(skill: SkillMatrixItem): void {
        // if the skill has no children we skip
        if (!skill.hasChildren) {
            return;
        }

        // set the is selected parent flag for each child
        this.skills.filter(x => x.parentId == skill.id).forEach(x => {
            x.isSelected = skill.isSelected;
            this.cascadeChilds(x);
        });

        // determines if the current skill has any child selected
        skill.anyChildSelected = this.isAnyChildSelected(skill);
    }
    /* Verify or set childs selection when a Skill child has changed*/
    private cascadeParent(skill: SkillMatrixItem): void {

        skill.anyChildSelected = this.isAnyChildSelected(skill);

        // check if this is root skill
        if (skill.parentId == null) {
            return;
        }

        // get the parent skill and double check if it is null
        let parent = this.skills.find(x => x.id == skill.parentId);
        if (parent == null) {
            return;
        }

        // determines if the parent has any child selected
        parent.anyChildSelected = this.isAnyChildSelected(parent);

        // in the case the parent state is equal to the child skill state we skip
        if (parent.isSelected !== skill.isSelected) {
            // set the parent state acording to the children state
            parent.isSelected = !this.skills.filter(x => x.parentId == parent.id).some(x => !x.isSelected);
        }

        // evaluate the parent skill
        this.cascadeParent(parent);
    }

    /* Function that returns true if the given skill has some child selected */
    private isAnyChildSelected(parentSkill: SkillMatrixItem): boolean {
        return this.skills.filter(x => x.parentId == parentSkill.id).some(x => x.isSelected || x.anyChildSelected);
    }

    /*Start helper functions */
    private createTree(): void {
        // calls this jQuery function to initialize the uui Tree Grid
        jQuery('.uui-table.treegrid').uui_tree_grid({ collapsed: false, animate: true, padding_automation: false, padding: 0 });
    }
}
