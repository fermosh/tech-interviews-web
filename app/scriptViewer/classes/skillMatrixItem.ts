/* Defines the skill entity */
import { ITopic } from '../interfaces/topic';
import { IQuestion } from '../interfaces/question';
import { IExercise } from '../interfaces/exercise';

export class SkillMatrixItem {
    id: number;
    parentId: number;
    name: string;
    isSelected: boolean;
    className: string;
    skillLevel: number;
    hasChilds: boolean;

    constructor(id: number, parentId: number, name: string, skillLevel: number, hasChilds: boolean) {
        this.id = id;
        this.parentId = parentId;
        this.name = name;
        this.skillLevel = skillLevel;
        this.hasChilds = hasChilds;
        this.isSelected = true;
        this.className = this.getClassName();
    }

    getClassName(): string {
        if (this.skillLevel == 1) {
            return "treegrid-parent";
        }
        if (this.hasChilds) {
            return "treegrid-parent treegrid-child";
        }
        else {
            return "treegrid-child";
        }
    }
}