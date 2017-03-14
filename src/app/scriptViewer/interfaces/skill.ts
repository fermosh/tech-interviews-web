/* Defines the skill entity */
import { ITopic } from './topic';
import { IInterviewQuestion } from './interview-question';

export interface ISkill {
    rootId: number;
    displayOrder: number;
    requiredSkillLevel: number;
    userSkillLevel: number;
    levelSet: number;
    competencyId: number;
    jobFunctionLevel: number;
    topics?: ITopic[];
    interviewQuestions?: IInterviewQuestion[];
    id: number;
    parentId: number;
    name: string;
    isSelectable: boolean;
    skillLevel?: number;
    hasChildren?: boolean;
    priority?: string;
    startingFrom?: string;
}
