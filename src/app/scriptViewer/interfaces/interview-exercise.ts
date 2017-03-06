/* Defines the interview-exercise entity */
import { IExercise } from './../../exercises/exercise';
import { IComment } from './comment';

export interface IInterviewExercise {
    exercise: IExercise;
    selected: boolean;
    solution?: string;
    comments?: IComment[];
    rating: number;
}
