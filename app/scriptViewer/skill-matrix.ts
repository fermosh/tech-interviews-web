/* Defines the skill matrix */
import { ISkill } from './skill';
import { ILevel } from '../entryPoint/level';

export interface ISkillMatrix {
    hasContent: boolean;
    competencyId: number;
    competencyName: string;
    level: ILevel;
    skills?: ISkill[];
}
