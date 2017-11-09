import { ISkillTemplate } from './skillTemplate';
import { ILevel } from './level';

export interface ITemplate {
    id: string;
    name: string;
    competencyId: number;
    jobFunctionLevel: number;  
    skills: ISkillTemplate[];
    exercises: string[];
    competencyName?: string;
    domain?: string;
    level?: ILevel;
}
