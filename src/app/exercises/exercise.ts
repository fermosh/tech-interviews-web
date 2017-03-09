/* Defines exercise entity */
import { ITag } from './../questions/tag';

export interface IExercise {
    id: number;
    title: string;
    text: string;
    solution?: string;
    tags?: ITag[];
}
