import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SkillMatrixItem } from '../../../entryPoint/classes/skillMatrixItem';
import { Skill } from '../../classes/skill';

declare var jQuery: any;

@Component({
    selector: 'app-skill-picker',
    templateUrl: './skillPicker.component.html',
    styleUrls: ['./skillPicker.component.css']
})
export class SkillPickerComponent {

    private isTreeCreated = false;

    skills: SkillMatrixItem[];
    @Input() header: string;
    @Input() collapsed = false;
    @Output() selectionChanged: EventEmitter<number[]> = new EventEmitter<number[]>();

    @Input('skillSource')
    set skillSource(skills: Skill[]) {
        if (skills == undefined) {
            this.skills = [];
            return;
        }

        this.skills = this.processSkills(skills)
            .map(skill => new SkillMatrixItem(skill.id, skill.parentId, skill.name, skill.skillLevel, skill.hasChildren));

        this.skills.forEach(skill => skill.className = this.getClassName(skill));

        this.emmitChanges();
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

        this.emmitChanges();
    }

    private emmitChanges(){
        this.selectionChanged.emit(this.skills.filter(x => x.isSelected).map(x=> x.id));
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

    private processSkills(skills: Skill[]): Skill[] {

        // initialize a new skill array
        let output: Skill[] = [];

        // apply the fillSkillInfo function to the first level objects
        // this will also unchain the same function to their children
        skills.filter(x => x.parentId == null).forEach(x => this.fillSkillInfo(x, 1, skills, output));

        // return the output array
        return output;
    }

    private fillSkillInfo(skill: Skill, initialLevel: number, source: Skill[], output: Skill[]) {

        // add the skill to the new array
        output.push(skill);

        // set the level to the current skill
        skill.skillLevel = initialLevel;

        // look for the current skill children
        let children = source.filter(x => x.parentId == skill.id);

        // set the haschildren flag for the skill
        // hack: for the moment we just allow maximum 5 levels
        skill.hasChildren = children.length > 0;

        if (!skill.hasChildren) {
            return;
        };

        // apply this same function to every children of the skill
        children.forEach(y => this.fillSkillInfo(y, initialLevel + 1, source, output));
    }
}
