/* Defines exercise entity */
import { Tag } from './tag';
import { ICompetency } from '../../entryPoint/classes/competency';

export class Exercise {
    id: number;
    title: string;
    body: string;
    solution?: string;
    tag: Tag;
    competency?: ICompetency;
}
