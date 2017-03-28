import { IJobFunction } from './jobFunction';
import { ICompetency } from './competency';

export class Position {
    jobFunctions: IJobFunction[];
    competencies: ICompetency[];
}
