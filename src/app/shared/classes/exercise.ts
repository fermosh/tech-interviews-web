/* Defines exercise entity */
import { Tag } from './tag';
import { ICompetency } from '../../entryPoint/classes/competency';

export class Exercise {
    id: string;
    title: string;
    body: string;
    solution?: string;
    skills?: Tag[];
    competency?: ICompetency;
}
