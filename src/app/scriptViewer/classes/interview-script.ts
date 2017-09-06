import { InterviewExercise } from './../classes/interview-exercise';
import { Skill } from './../../shared/classes/skill';
import { ILevel } from './../../shared/classes/level';

export class InterviewScript {
    Skills: Skill[];
    competencyName: string;
    domain?: string;
    level: ILevel;
    interviewExercises?: InterviewExercise[];
}
