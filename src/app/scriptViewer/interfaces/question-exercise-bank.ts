import { InterviewQuestion } from './../classes/interview-question';
import { InterviewExercise } from './../classes/interview-exercise';

export interface QuestionExerciseBank {
    id: number; // Skill Id
    interviewQuestions?: InterviewQuestion[];
    interviewExercises?: InterviewExercise[];
}
