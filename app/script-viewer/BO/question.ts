export class Question {
    // API Properties
    id: number;
    question: string;
    answer?: string;
    selected: boolean;
    
    // Persistance Properties
    comments: string;
    rating: number;
 
    constructor(_id: number, _question: string, _selected: boolean, _answer?: string) {
        this.id = _id;
        this.question = _question;
        this.answer = _answer;
        this.selected = _selected;
        this.comments = "";
        this.rating = 0;
    }
}