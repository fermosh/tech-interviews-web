export class Exercise {
    // API Properties
    id: number;
    title: string;
    description: string;

    // Persistance Properties
    comments: string;
    rating: number;
 
    constructor(_id: number, _title: string, _description: string) {
        this.id = _id;
        this.title = _title;
        this.description = _description;
        this.comments = "";
        this.rating = 0;
    }
}