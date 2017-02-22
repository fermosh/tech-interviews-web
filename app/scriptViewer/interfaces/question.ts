/* Defines question entity */
import { IComment } from './comment';

export interface IQuestion {
    id: number;
    question: string;
    selected: boolean;
    answer?: string;
    comments: IComment[];
    rating: number;
}
