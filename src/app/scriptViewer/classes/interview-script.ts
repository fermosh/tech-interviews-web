import { InterviewExercise } from './../classes/interview-exercise';
import { Skill } from './../../shared/classes/skill';
import { ILevel } from './../../shared/classes/level';

export class InterviewScript {
    name: string;
    skills: Skill[];
    competencyId: number;
    competencyName: string;
    jobFunctionLevel: number;
    domain?: string;
    level: ILevel;
    interviewExercises?: InterviewExercise[];
}
