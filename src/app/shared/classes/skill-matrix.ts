/* Defines the skill matrix */
import { Skill } from './skill';
import { ILevel } from './level';

export class SkillMatrix {
    hasContent?: boolean;
    competencyId?: number;
    skills?: Skill[];
}
