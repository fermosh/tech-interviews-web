import { Skill } from '../BO/skill'
import { Exercise } from '../BO/exercise'

export class ScriptViewer {
    // API Properties
    competencyId: number;
    competencyName: string;
    domain: string;
    levelName: string;
    levelDescription: string;
    skills: Skill[];
    exercises: Exercise[];

    constructor(_competencyId: number, _competencyName: string, _domain: string, _levelName: string, _levelDescription: string, _skills: Skill[], _exercises: Exercise[]) {
        this.competencyId= _competencyId;
        this.competencyName = _competencyName;
        this.domain = _domain;
        this.levelName = _levelName;
        this.levelDescription = _levelDescription;
        this.skills = _skills.map(item => new Skill(item.skillId, item.skillName, item.topic, item.startingFrom, item.priority, item.questions));
        this.exercises = _exercises.map(item => new Exercise(item.id, item.title, item.description));
    }

    get rating(): number {
        let sum: number = 0;

        if (this.skills && this.skills.length > 0) {
            for (let skill of this.skills) {
                sum += skill.rating; 
            }
        }
        if (this.exercises && this.exercises.length > 0) {
            for (let exercise of this.exercises) {
                sum += exercise.rating; 
            }
        }
        
        if (sum > 0) {
            return sum / (this.skills.length + this.exercises.length);
        } else {
            return 0;
        }
    }
}