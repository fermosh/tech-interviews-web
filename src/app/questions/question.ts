/* Defines question entity */
import { ISkill } from './../scriptViewer/interfaces/skill';

export interface IQuestion {
    id: number;
    text: string;
    answer?: string;
    skills?: ISkill[];
}
