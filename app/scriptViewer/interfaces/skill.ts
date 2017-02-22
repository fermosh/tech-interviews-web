/* Defines the skill entity */
import { ITopic } from './topic';
import { IQuestion } from './question';
import { IExercise } from './exercise';

export interface ISkill {
    rootId: number;
    displayOrder: number;
    requiredSkillLevel: number;
    userSkillLevel: number;
    levelSet: number;
    competencyId: number;
    jobFunctionLevel: number;
    topics?: ITopic[];
    questions?: IQuestion[];
    exercises?: IExercise[];
    id: number;
    parentId: number;
    name: string;
    isSelectable: boolean;
    skillLevel?: number;
    hasChilds?: boolean;
    priority?: string;
}
