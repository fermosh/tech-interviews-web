/* Defines the interview-question entity */
import { IQuestion } from './../../questions/question';
import { IComment } from './comment';

export interface IInterviewQuestion {
    question: IQuestion;
    rating: number;
    comments?: IComment[];
    selected?: boolean;
}
