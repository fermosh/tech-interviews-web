/* Defines exercise entity */
import { Tag } from './tag';
import { ICompetency } from './competency';

export class Exercise {
    id: number;
    title: string;
    body: string;
    solution?: string;
    tags?: Tag[];
    competency?: ICompetency;
}
