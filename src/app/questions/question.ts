/* Defines question entity */
import { ISkill } from './../scriptViewer/interfaces/skill';
import { ITag } from './tag';

export interface IQuestion {
    id: number;
    text: string;
    answer?: string;
    tags?: ITag[];
}
