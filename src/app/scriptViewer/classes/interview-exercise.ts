/* Defines the interview-exercise entity */
import { Exercise } from './../../shared/classes/exercise';
import { IComment } from './../../shared/classes/comment';

export class InterviewExercise extends Exercise {
    selected: boolean;
    comments?: IComment[];
    rating: number;
    canBeRemoved?: boolean;
}
