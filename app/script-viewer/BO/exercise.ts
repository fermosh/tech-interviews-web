export class Exercise {
    // API Properties
    id: number;
    title: string;
    description: string;
    solution?: string;
    selected: boolean;

    // Persistance Properties
    comments: string;
    rating: number;
 
    constructor(_id: number, _title: string, _description: string, _selected: boolean, _solution?: string) {
        this.id = _id;
        this.title = _title;
        this.description = _description;
        this.solution = _solution;
        this.selected = _selected;
        this.comments = "";
        this.rating = 0;
    }
}