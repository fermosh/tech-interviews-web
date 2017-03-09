/* Defines the interview-question entity */
import { IQuestion } from './../../questions/question';
import { IComment } from './comment';

export interface IInterviewQuestion {
    question: IQuestion;
    selected: boolean;
    comments?: IComment[];
    rating: number;
}
