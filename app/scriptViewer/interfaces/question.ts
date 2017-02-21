/* Defines question entity */
export interface IQuestion {
    id: number;
    question: string;
    selected: boolean;
    answer?: string;
    comments: string;
    rating: number;
}
