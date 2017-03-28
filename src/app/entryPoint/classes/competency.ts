export interface ICompetency {
    code: string;
    jobFunctions: number[];
    id: number;
    parentId?: number;
    name: string;
    isSelectable: boolean;
}
