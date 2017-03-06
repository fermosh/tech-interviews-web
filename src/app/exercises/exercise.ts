/* Defines question entity */
import { ITag } from './tag';

export interface IExercise {
    id: number;
    title: string;
    text: string;
    solution?: string;
    tags?: ITag[];
}
