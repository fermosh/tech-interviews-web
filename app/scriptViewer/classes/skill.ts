import { Topic } from '../classes/Topic';
import { Question } from '../classes/question';
import { Exercise } from '../classes/exercise';

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
        this.startingFrom = _startingFrom ? _startingFrom : 'Intermediate';
        this.priority = _priority ? _priority : 'medium';
        this.topics = _topics.map(item => new Topic(item.name, item.isRequired));
        this.questions = _questions ? _questions.map(item => new Question(item.id, item.question, item.selected, item.answer)) : [];
        this.exercises = _exercises ? _exercises.map(item => new Exercise(item.id, item.title, item.description, item.selected, item.solution)) : [];
    }

    get priorityStyle(): string {
        let priorityStyle: string = this.priority.toLowerCase().trim().replace(" ", "-");
        return "priority-" + priorityStyle + "-label-value";
    }

    get rating(): number {
        let sum: number = 0;
        let numberOfItems: number = 0;

        if (this.questions && this.questions.length > 0) {
            for (let question of this.questions.filter(q => q.selected)) {
                sum += question.rating;
                numberOfItems++;
            }
        }
        if (this.exercises && this.exercises.length > 0) {
            for (let exercise of this.exercises.filter(e => e.selected)) {
                sum += exercise.rating;
                numberOfItems++;
            }
        }

        if (sum > 0) {
            return sum / numberOfItems;
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

    get topicList(): string {
        let topicList: string = "";

        if (this.topics && this.topics.length > 0) {
            for (let topic of this.topics) {
                if (topic.isRequired) {
                    topicList += "- " + topic.name + "";
                } else {
                    topicList += "<span style='color:#888;'>- " + topic.name + "</span>";
                }
                topicList += "<br>";
            }
        } else {
            topicList = "No topics related";
        }

        return topicList;
    }
}