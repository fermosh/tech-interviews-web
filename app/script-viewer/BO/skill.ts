import { Topic } from '../BO/topic'
import { Question } from '../BO/question'
import { Exercise } from '../BO/exercise'

export class Skill {
    // API Properties
    skillId: number;
    skillName: string;
    startingFrom: string;
    priority: string;
    topics: Topic[];
    questions: Question[];
    exercises: Exercise[];

    constructor(_skillId: number, _skillName: string, _startingFrom: string, _priority: string, _topics:  Topic[], _questions: Question[], _exercises: Exercise[]) {
        this.skillId = _skillId;
        this.skillName = _skillName;
        this.startingFrom = _startingFrom;
        this.priority = _priority;
        this.topics = _topics.map(item => new Topic(item.id, item.name, item.isRequired));
        this.questions = _questions.map(item => new Question(item.id, item.question, item.selected, item.answer));
        this.exercises = _exercises.map(item => new Exercise(item.id, item.title, item.description, item.selected, item.solution));
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

    get topicList(): string {
        let topicList: string = "";

        if (this.topics && this.topics.length > 0) {
            for (let topic of this.topics) {
                topicList += "- " + topic.name + "<br>";
            }
        } else {
            topicList = "No topics related";
        }

        return topicList;
    }
}