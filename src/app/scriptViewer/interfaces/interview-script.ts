/* Defines the skill matrix */
import { Skill } from './../../shared/classes/skill';
import { ILevel } from './../../shared/classes/level';
import { InterviewExercise } from './../classes/interview-exercise';

export interface IInterviewScript {
    id: number;
    hasContent?: boolean;
    competencyId?: number;
    competencyName: string;
    domain: string;
    level: ILevel;
    skills?: Skill[];
    interviewExercises?: InterviewExercise[];
}
