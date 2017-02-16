import { Skill } from '../BO/skill'
import { Exercise } from '../BO/exercise';

export class ScriptViewer {
    // API Properties
    competencyId: number;
    competencyName: string;
    domain: string;
    levelName: string;
    levelDescription: string;
    skills: Skill[];
    
    constructor(_competencyId: number, _competencyName: string, _domain: string, _levelName: string, _levelDescription: string, _skills: Skill[]) {
        this.competencyId= _competencyId;
        this.competencyName = _competencyName;
        this.domain = _domain;
        this.levelName = _levelName;
        this.levelDescription = _levelDescription;
        this.skills = _skills.map(item => new Skill(item.id, item.name, item.startingFrom, item.priority, item.topics, item.questions, item.exercises));
    }

    get rating(): number {
        let sum: number = 0;
        if (this.skills && this.skills.length > 0) {
            for (let skill of this.skills) {
                sum += skill.rating; 
            }
            return sum / this.skills.length;
        }
        return 0;
    }
    get exercises(): Exercise[] {
        let exercises: Exercise[] = [];
        for (let skill of this.skills) {
            for (let exercise of skill.exercises) {
                exercises.push(exercise);
            }
        }
        return exercises;
    }
}