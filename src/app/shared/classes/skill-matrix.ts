/* Defines the skill matrix */
import { Skill } from './skill';
import { ILevel } from './level';

export class SkillMatrix {
    id: number;
    hasContent?: boolean;
    competencyId?: number;
    competencyName: string;
    domain: string;
    level: ILevel;
    skills?: Skill[];
}
