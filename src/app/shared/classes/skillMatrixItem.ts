import { Skill } from './skill';
export class SkillMatrixItem extends Skill {
    className?: string;
    anyChildSelected: boolean;

    constructor(id: number, parentId: number, name: string, skillLevel: number, hasChildren: boolean) {
        super();

        this.id = id;
        this.parentId = parentId;
        this.name = name;
        this.skillLevel = skillLevel;
        this.hasChildren = hasChildren;
        this.isSelected = true;
    }
}
