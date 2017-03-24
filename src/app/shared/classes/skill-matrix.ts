/* Defines the skill matrix */
import { Skill } from './skill';
import { ILevel } from './level';

export interface ISkillMatrix {
    id: number;
    hasContent?: boolean;
    competencyId?: number;
    competencyName: string;
    domain: string;
    level: ILevel;
    skills?: Skill[];
}
