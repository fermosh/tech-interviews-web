/* Defines the interview-question entity */
import { Question } from './../../shared/classes/question';
import { IComment } from './../../shared/classes/comment';

export class InterviewQuestion extends Question {
    rating: number;
    comments?: IComment[];
    selected?: boolean;
}
