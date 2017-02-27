export class SkillMatrixItem {
    id: number;
    parentId: number;
    name: string;
    isSelected: boolean;
    skillLevel: number;
    hasChildren: boolean;

    constructor(id: number, parentId: number, name: string, skillLevel: number, hasChildren: boolean) {
        this.id = id;
        this.parentId = parentId;
        this.name = name;
        this.skillLevel = skillLevel;
        this.hasChildren = hasChildren;
        this.isSelected = true;
    }
}