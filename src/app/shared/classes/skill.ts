/* Defines the skill entity */
import { ITopic } from './topic';
import { Tag } from './tag';
import { InterviewQuestion } from './../../scriptViewer/classes/interview-question';

export class Skill extends Tag {
    rootId: number;
    displayOrder: number;
    requiredSkillLevel: number;
    userSkillLevel: number;
    levelSet: number;
    competencyId: number;
    jobFunctionLevel: number;
    topics?: ITopic[];
    interviewQuestions?: InterviewQuestion[];
    parentId: number;
    isSelectable: boolean;
    skillLevel?: number;
    hasChildren?: boolean;
    priority?: string;
    startingFrom?: string;

    isSelected?: boolean;
}
