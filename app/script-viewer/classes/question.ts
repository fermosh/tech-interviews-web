export class Question {
    // API Properties
    id: number;
    question: string;
    selected: boolean;
    answer?: string;

    // Persistance Properties
    comments: string;
    rating: number;
 
    constructor(_id: number, _question: string, _selected: boolean, _answer?: string) {
        this.id = _id;
        this.question = _question;
        this.selected = _selected;
        this.answer = _answer;

        this.comments = "";
        this.rating = 0;
    }
}