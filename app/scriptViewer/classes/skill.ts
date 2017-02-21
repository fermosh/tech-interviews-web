import { ITopic } from '../interfaces/topic';
import { IQuestion } from '../interfaces/question';
import { IExercise } from '../interfaces/exercise';

export class Skill {
    // API Properties
    id: number;
    name: string;
    startingFrom: string;
    priority: string;
    topics: ITopic[];
    questions: IQuestion[];
    exercises: IExercise[];

    constructor(_id: number, _name: string, _startingFrom: string, _priority: string, _topics: ITopic[], _questions: IQuestion[], _exercises: IExercise[]) {
        this.id = _id;
        this.name = _name;
        this.startingFrom = _startingFrom ? _startingFrom : 'Intermediate';
        this.priority = _priority ? _priority : 'medium';
        this.topics = _topics;
        this.questions = _questions;
        this.exercises = _exercises;
    }

    get priorityStyle(): string {
        let priorityStyle: string = this.priority.toLowerCase().trim().replace(' ', '-');
        return 'priority-' + priorityStyle + '-label-value';
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
        let ratingStyle: string = 'score-label-value-';

        switch (true) {
            case (this.rating === 0): ratingStyle += '0';
                break;
            case (this.rating < 2): ratingStyle += '1';
                break;
            case (this.rating < 3): ratingStyle += '2';
                break;
            case (this.rating < 4): ratingStyle += '3';
                break;
            case (this.rating < 5): ratingStyle += '4';
                break;
            case (this.rating === 5): ratingStyle += '5';
                break;
            default:
                ratingStyle += '0';
        }

        return ratingStyle;
    }

    get topicList(): string {
        let topicList: string = '';

        if (this.topics && this.topics.length > 0) {
            for (let topic of this.topics) {
                if (topic.isRequired) {
                    topicList += '- ' + topic.name + '';
                } else {
                    topicList += "<span style='color:#888;'>- " + topic.name + '</span>';
                }
                topicList += '<br>';
            }
        } else {
            topicList = 'No topics related';
        }

        return topicList;
    }
}
