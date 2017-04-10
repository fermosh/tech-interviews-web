import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SkillMatrixItem } from '../../../entryPoint/classes/skillMatrixItem';

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
    @Input() collapsed = false;

    @Output() selectionChanged: EventEmitter<void> = new EventEmitter<void>();

    ngOnInit(): void {
        this.skills.forEach(skill => skill.className = this.getClassName(skill));
    }

    // function that returns the class of the skill item
    private getClassName(skill: SkillMatrixItem): string {
        return skill.skillLevel === 1 ? 'treegrid-parent' : (skill.hasChildren ? 'treegrid-parent treegrid-child' : 'treegrid-child');
    }

    private ngAfterViewChecked(): void {
        this.createTree();
    }

    // event fired when an skill selection has changed
    private onSkillSelected(skill: SkillMatrixItem): void {
        // verify or set childs selection
        this.cascadeChilds(skill);

        // ver or set parent selection
        this.cascadeParent(skill);

        this.selectionChanged.emit();
    }

    // Verify or set childs selection when a Skill parent has changed
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

    // Verify or set childs selection when a Skill child has changed
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

    // Function that returns true if the given skill has some child selected
    private isAnyChildSelected(parentSkill: SkillMatrixItem): boolean {
        return this.skills.filter(x => x.parentId == parentSkill.id).some(x => x.isSelected || x.anyChildSelected);
    }

    // function that executes the treegrid jquery instruction
    private createTree(): void {
        if (!this.isTreeCreated) {

            // calls this jQuery function to initialize the uui Tree Grid
            jQuery('.uui-table.treegrid')
                .uui_tree_grid({ collapsed: this.collapsed, animate: true, padding_automation: false, padding: 0 });

            if (!this.collapsed) {
                jQuery('.uui-table').find('span').each(function () { jQuery(this).removeClass('fa-angle-up').addClass('fa-angle-down'); });
            }

            // set the flag to true
            this.isTreeCreated = true;
        }
    }
}
