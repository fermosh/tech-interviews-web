export class SkillMatrixItem {
    id: number;
    name: string;
    isSelected: boolean;
    className: string;
    skillLevel: number;
    hasChilds: boolean;

    constructor(id: number, name: string, skillLevel: number, hasChilds: boolean) {
        this.id = id;
        this.name = name;
        this.skillLevel = skillLevel;
        this.hasChilds = hasChilds;
        this.isSelected = true;
        this.className = this.getClassName();
    }

    getClassName(): string
    {
        if (this.skillLevel === 1) {
            return 'treegrid-parent';
        }
        if (this.hasChilds) {
            return 'treegrid-parent treegrid-child';
        }

        return 'treegrid-child';
    }
}
