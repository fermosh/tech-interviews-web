/* Defines the skill matrix */
import { ISkill } from './skill';

export interface ISkillMatrix {
    hasContent: boolean;
    competencyId: number;
    skills?: ISkill[];
}
