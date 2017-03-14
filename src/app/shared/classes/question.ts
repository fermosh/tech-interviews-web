/* Defines question entity */
import { Tag } from './tag';
import { ICompetency } from './competency';

export class Question {
    id: number;
    body: string;
    answer?: string;
    tag: Tag;
    competency?: ICompetency;
}
