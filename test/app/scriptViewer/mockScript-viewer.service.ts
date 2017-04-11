import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { ScriptViewerService } from '../../../src/app/scriptViewer/script-viewer.service';

import { InterviewScript } from '../../../src/app/scriptViewer/classes/interview-script';
import { Skill } from '../../../src/app/shared/classes/skill';
import { Question } from '../../../src/app/shared/classes/question';
import { Exercise } from '../../../src/app/shared/classes/exercise';

export class MockScriptViewerService extends ScriptViewerService {
    private interviewScripts: InterviewScript = {
        competencyName: '.Net',
        domain: 'Front-End Web Developemnt',
        level:
        {
            id: 3,
            name: 'L3',
            description: 'Senior Software Engineer'
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

    constructor() {
        super(null);
    }

    getScriptViewer(id: string): Observable<InterviewScript> {
        return Observable.of(this.interviewScripts);
    }

    getFinalRating(interviewScript: InterviewScript): number {
        return 5;
    }

    getSkillsRating(interviewScript: InterviewScript): number {
        return 5;
    }

    getExercisesRating(interviewScript: InterviewScript): number {
        return 5;
    }

    getRatingBySkill(skill: Skill): number {
        return 5;
    }
}
