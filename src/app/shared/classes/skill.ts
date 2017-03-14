/* Defines the skill entity */
import { ITopic } from './topic';
import { Tag } from './tag';
import { InterviewQuestion } from './../../scriptViewer/classes/interview-question';
import { InterviewExercise } from './../../scriptViewer/classes/interview-exercise';

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
    interviewExercises?: InterviewExercise[];
    parentId: number;
    isSelectable: boolean;
    skillLevel?: number;
    hasChildren?: boolean;
    priority?: string;
    startingFrom?: string;
}
