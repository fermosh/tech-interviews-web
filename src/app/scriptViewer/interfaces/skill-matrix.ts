/* Defines the skill matrix */
import { ISkill } from './skill';
import { ILevel } from '../../entryPoint/level';

export interface ISkillMatrix {
    id: number;
    hasContent?: boolean;
    competencyId?: number;
    competencyName: string;
    domain: string;
    level: ILevel;
    skills?: ISkill[];
}
