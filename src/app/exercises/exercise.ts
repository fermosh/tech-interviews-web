/* Defines question entity */
import { ITag } from './../shared/tag';

export interface IExercise {
    id: number;
    title: string;
    text: string;
    solution?: string;
    tags?: ITag[];
}
