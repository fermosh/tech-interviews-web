import { Topic } from '../BO/Topic';
import { Question } from '../BO/question';
import { Exercise } from '../BO/exercise';

export class Skill {
    // API Properties
    id: number;
    name: string;
    startingFrom: string;
    priority: string;
    topics: Topic[];
    questions: Question[];
    exercises: Exercise[];

    constructor(_id: number, _name: string, _startingFrom: string, _priority: string, _topics: Topic[], _questions: Question[], _exercises: Exercise[]) {
        this.id = _id;
        this.name = _name;
        this.startingFrom = _startingFrom;
        this.priority = _priority;
        this.topics = _topics.map(item => new Topic(item.id, item.name));
        this.questions = _questions.map(item => new Question(item.id, item.question, item.answer));
        this.exercises = _exercises.map(item => new Exercise(item.id, item.title, item.description, item.solution));
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