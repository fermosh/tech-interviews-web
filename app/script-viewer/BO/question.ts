export class Question {
    // API Properties
    id: number;
    question: string;
    answer?: string;
    
    // Persistance Properties
    comments: string;
    rating: number;
 
    constructor(_id: number, _question: string, _answer?: string) {
        this.id = _id;
        this.question = _question;
        this.answer = _answer;
        this.comments = "";
        this.rating = 0;
    }
}