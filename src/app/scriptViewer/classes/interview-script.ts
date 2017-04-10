import { InterviewExercise } from './../classes/interview-exercise';
import { SkillMatrix } from './../../shared/classes/skill-matrix';
import { ILevel } from './../../shared/classes/level';

export class InterviewScript extends SkillMatrix {
    competencyName: string;
    domain?: string;
    level: ILevel;
    interviewExercises?: InterviewExercise[];
}
