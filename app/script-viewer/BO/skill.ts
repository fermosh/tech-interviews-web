import { Question } from '../BO/question'

export class Skill {
    // API Properties
    skillId: number;
    skillName: string;
    topic: string;
    startingFrom: string;
    priority: string;
    questions: Question[];

    constructor(_skillId: number, _skillName: string, _topic: string, _startingFrom: string, _priority: string, _questions: Question[]) {
        this.skillId = _skillId;
        this.skillName = _skillName;
        this.topic = _topic;
        this.startingFrom = _startingFrom;
        this.priority = _priority;
        this.questions = _questions.map(item => new Question(item.questionId, item.question));
    }

    get priorityStyle(): string {
        let priorityStyle: string = this.priority.toLowerCase().trim().replace(" ","-");
        return "priority-" + priorityStyle + "-label-value";
    }

    get rating(): number {
        let sum: number = 0;
        if (this.questions && this.questions.length > 0) {
            for (let question of this.questions) {
                sum += question.rating; 
            }
            return sum / this.questions.length;
        } else {
            return 0;
        }
    }

    get ratingStyle(): string {
        let ratingStyle: string = "score-label-value-";

        switch (true) {
            case (this.rating == 0): ratingStyle += "0";
                        break;
            case (this.rating < 2): ratingStyle += "1";
                        break;
            case (this.rating < 3): ratingStyle += "2";
                        break;
            case (this.rating < 4): ratingStyle += "3";
                        break;
            case (this.rating < 5): ratingStyle += "4";
                        break;
            case (this.rating == 5): ratingStyle += "5";
                        break;
            default:
                ratingStyle += "0";
        }

        return ratingStyle;
    }
}