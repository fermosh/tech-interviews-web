/* Defines exercise entity */
export interface IExercise {
    id: number;
    title: string;
    description: string;
    selected: boolean;
    solution?: string;
    comments: string;
    rating: number;
}
