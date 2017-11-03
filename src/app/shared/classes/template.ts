import { ISkillTemplate } from './skillTemplate';

export interface ITemplate {
    id: string;
    name: string;
    competencyId: number;
    jobFunctionLevel: number;
    skills: ISkillTemplate[];
    exercises: string[];
}