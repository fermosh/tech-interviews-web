export class SkillMatrixItem {
    id: number;
    parentId: number;
    name: string;
    isSelected: boolean;
    skillLevel: number;
    hasChildren: boolean;
    className?: string;
    anyChildSelected: boolean;

    constructor(id: number, parentId: number, name: string, skillLevel: number, hasChildren: boolean, className: string) {
        this.id = id;
        this.parentId = parentId;
        this.name = name;
        this.skillLevel = skillLevel;
        this.hasChildren = hasChildren;
        this.isSelected = true;
        this.className = className;
    }
}
