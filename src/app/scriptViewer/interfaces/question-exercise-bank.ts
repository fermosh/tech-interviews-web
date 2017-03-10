import { IInterviewQuestion } from './interview-question';
import { IInterviewExercise } from './interview-exercise';

export interface QuestionExerciseBank {
    id: number; // Skill Id
    interviewQuestions?: IInterviewQuestion[];
    interviewExercises?: IInterviewExercise[];
}