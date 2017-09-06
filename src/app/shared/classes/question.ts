/* Defines question entity */
import { Tag } from './tag';
import { ICompetency } from './competency';

export class Question {
    id: string;
    body: string;
    answer?: string;
    skill: Tag;
    competency?: Tag;
}
