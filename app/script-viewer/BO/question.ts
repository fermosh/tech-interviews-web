export class Question {
    // API Properties
    questionId: number;
    question: string;
    
    // Persistance Properties
    comments: string;
    rating: number;
 
    constructor(_questionId: number, _question: string) {
        this.questionId = _questionId;
        this.question = _question;
        this.comments = "";
        this.rating = 0;
    }
}