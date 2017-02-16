export class Exercise {
    // API Properties
    id: number;
    title: string;
    description: string;
    solution?: string;

    // Persistance Properties
    comments: string;
    rating: number;
 
    constructor(_id: number, _title: string, _description: string, _solution?: string) {
        this.id = _id;
        this.title = _title;
        this.description = _description;
        this.solution = _solution;
        this.comments = "";
        this.rating = 0;
    }
}