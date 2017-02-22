import { IComment } from './comment';

export interface IExercise {
    id: number;
    title: string;
    description: string;
    selected: boolean;
    solution?: string;
    comments?: IComment[];
    rating: number;
}
