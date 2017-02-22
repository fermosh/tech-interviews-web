export class SkillMatrixItem {
    id: number;
    parentId: number;
    name: string;
    isSelected: boolean;
    skillLevel: number;
    hasChilds: boolean;

    constructor(id: number, parentId: number, name: string, skillLevel: number, hasChilds: boolean) {
        this.id = id;
        this.parentId = parentId;
        this.name = name;
        this.skillLevel = skillLevel;
        this.hasChilds = hasChilds;
        this.isSelected = true;
    }
}