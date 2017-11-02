import { ILevel } from './level';

export interface ITemplate{
    id: string;
    competencyId: number;
    competencyName?: string;
    domain?: string;
    jobfubctionLevel: number;
    skillIds: number[];
    level?: ILevel;
}
