import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { ScriptViewerService } from '../../../src/app/scriptViewer/script-viewer.service';

import { IInterviewScript } from '../../../src/app/scriptViewer/interfaces/interview-script';
import { Skill } from '../../../src/app/shared/classes/skill';
import { Question } from '../../../src/app/shared/classes/question';
import { Exercise } from '../../../src/app/shared/classes/exercise';

export class MockScriptViewerService extends ScriptViewerService {

    private interviewScripts: IInterviewScript = {
        id: 13,
        competencyName: '.Net',
        domain: 'Front-End Web Developemnt',
        level:
        {
            id: 3,
            name: 'L3',
            description: 'Senior Software Engineer',
            competencyId: 13
        },
        skills: [
            {
                id: 1,
                name: 'Code Standards',
                startingFrom: 'Novice',
                priority: 'Low',
                rootId: 7,
                displayOrder: 101,
                requiredSkillLevel: 10,
                userSkillLevel: 0,
                levelSet: 0,
                competencyId: 13,
                jobFunctionLevel: 3,
                parentId: 479,
                isSelectable: true,
                skillLevel: 4,
                hasChildren: false,
                topics: [
                    {
                        name: 'Code Conventions',
                        isRequired: true
                    },
                    {
                        name: 'Code Standards usage',
                        isRequired: true
                    },
                    {
                        name: 'Code Standards Implementation',
                        isRequired: false
                    }
                ],
                interviewQuestions: []
            },
            {
                id: 2,
                name: '.NET Development',
                startingFrom: 'Novice',
                priority: 'High',
                rootId: 7,
                displayOrder: 101,
                requiredSkillLevel: 10,
                userSkillLevel: 0,
                levelSet: 0,
                competencyId: 13,
                jobFunctionLevel: 3,
                parentId: 479,
                isSelectable: true,
                skillLevel: 4,
                hasChildren: false,
                topics: [
                    {
                        name: '.NET Framework',
                        isRequired: true
                    },
                    {
                        name: '.NET Framework fundamentals',
                        isRequired: true
                    },
                    {
                        name: 'Advanced .NET',
                        isRequired: true
                    },
                    {
                        name: 'Advanced debugging',
                        isRequired: true
                    },
                    {
                        name: 'Analyze and fix performance bottlenecks',
                        isRequired: true
                    },
                    {
                        name: 'Application architecture concepts',
                        isRequired: true
                    },
                    {
                        name: 'Application configuration principles',
                        isRequired: true
                    },
                    {
                        name: 'Debugging fundamentals',
                        isRequired: true
                    },
                    {
                        name: 'Exception Handling',
                        isRequired: true
                    },
                    {
                        name: 'Inversion of control principles, base libraries',
                        isRequired: true
                    },
                    {
                        name: 'LINQ',
                        isRequired: true
                    },
                    {
                        name: 'Multi-threading and async app',
                        isRequired: true
                    },
                    {
                        name: 'OOP fundamentals',
                        isRequired: true
                    },
                    {
                        name: 'Reflection',
                        isRequired: true
                    },
                    {
                        name: 'TDD, Unit tests, BDD',
                        isRequired: true
                    },
                    {
                        name: 'Unit-testing fundamentals',
                        isRequired: true
                    },
                    {
                        name: 'Windows security',
                        isRequired: true
                    }
                ],
                interviewQuestions: [],
            },
            {
                id: 3,
                name: 'Scrum / Agile',
                startingFrom: 'Novice',
                priority: 'Medium',
                rootId: 7,
                displayOrder: 101,
                requiredSkillLevel: 10,
                userSkillLevel: 0,
                levelSet: 0,
                competencyId: 13,
                jobFunctionLevel: 3,
                parentId: 479,
                isSelectable: true,
                skillLevel: 4,
                hasChildren: false,
                topics: [
                    {
                        name: 'Scrum/Agile - Base',
                        isRequired: true
                    },
                    {
                        name: 'Scrum/Agile - Master',
                        isRequired: true
                    }
                ],
                interviewQuestions: []
            }],
        interviewExercises: []
    };

    private exercisesByTemplateId: Exercise[] = [
        {
            id: 1,
            title: 'Palindrome',
            body: `A palindrome is a word, phrase, number, or other
                                        sequence of characters which reads the same backward or forward,
                                        such as madam or kayak. Write an function that receives an string
                                        parameters and return true if it is a palindrome.`,
            solution: '',
            tag: { id: 1, name: 'Code Standards' }
        },
        {
            id: 2,
            title: 'Balanced Brakets',
            body: `Type of Brackets: () Round brackets or parentheses, {}
                                        Curly brackets or braces, [] Square brackets. Implement an algorithm
                                        to resolve the balanced brackets problems, ie. \'{([])}\' is balanced.`,
            solution: '',
            tag: { id: 2, name: '.NET Development' }
        }
    ];

    private questionsByTemplateId: Question[] = [
        {
            id: 1,
            body: `What's the purpose of standards/conventions in .NET C#?`,
            answer: '',
            tag: { id: 1, name: 'Code Standards' }
        },
        {
            id: 2,
            body: 'When to use string and when StringBuilder?',
            answer: '',
            tag: { id: 1, name: 'Code Standards' }
        }];

    constructor() {
        super(null);
    }

    getScriptViewer(id: number): Observable<IInterviewScript> {
        return Observable.of(this.interviewScripts);
    }

    getQuestionsByTemplateId(id: number): Observable<Question[]> {
        return Observable.of(this.questionsByTemplateId);
    }

    getExercisesByTemplateId(id: number): Observable<Exercise[]> {
        return Observable.of(this.exercisesByTemplateId);
    }

    getFinalRating(interviewScript: IInterviewScript): number {
        return 5;
    }

    getRatingBySkill(skill: Skill): number {
        return 5;
    }
}
