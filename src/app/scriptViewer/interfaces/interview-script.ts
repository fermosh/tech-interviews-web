/* Defines the skill matrix */
import { ISkill } from './skill';
import { ILevel } from './../../entryPoint/level';
import { IInterviewExercise } from './interview-exercise';

export interface IInterviewScript {
    id: number;
    hasContent?: boolean;
    competencyId?: number;
    competencyName: string;
    domain: string;
    level: ILevel;
    skills?: ISkill[];
    interviewExercises?: IInterviewExercise[];
}
