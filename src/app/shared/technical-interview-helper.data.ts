import { InMemoryDbService } from 'angular-in-memory-web-api';

import { ICompetency } from '../entryPoint/competency';
import { ISkillMatrix } from '../scriptViewer/interfaces/skill-matrix';
import { IDomain } from '../entryPoint/domain';
import { ILevel } from '../entryPoint/level';

export class TechnicalInterviewData implements InMemoryDbService {

    createDb() {
        let competencies: ICompetency[] = [
            {
                id: 1,
                name: '.Net'
            },
            {
                id: 2,
                name: 'Javascript'
            },
            {
                id: 3,
                name: 'DevOps'
            }
        ];

        let domains: IDomain[] = [
            {
                id: 1,
                name: 'FrontEnd web development',
                competencyId: 1,
                levelId: 1,
                skillMatrixId: 13
            },
            {
                id: 2,
                name: 'Backend development',
                competencyId: 1,
                levelId: 1,
                skillMatrixId: 14
            },
            {
                id: 3,
                name: 'FrontEnd desktop development',
                competencyId: 1,
                levelId: 1,
				skillMatrixId: 13
            },
            {
                id: 4,
                name: 'Azure development',
                competencyId: 1,
                levelId: 1,
				skillMatrixId: 14
            },
            {
                id: 5,
                name: 'FrontEnd web development',
                competencyId: 1,
                levelId: 2,
				skillMatrixId: 13
            },
            {
                id: 6,
                name: 'Backend development',
                competencyId: 1,
                levelId: 2,
				skillMatrixId: 14
            },
            {
                id: 7,
                name: 'FrontEnd desktop development',
                competencyId: 1,
                levelId: 2,
				skillMatrixId: 13
            },
            {
                id: 8,
                name: 'Azure development',
                competencyId: 1,
                levelId: 2,
				skillMatrixId: 14
            },
            {
                id: 9,
                name: 'FrontEnd web development',
                competencyId: 1,
                levelId: 3,
				skillMatrixId: 13
            },
            {
                id: 10,
                name: 'Backend development',
                competencyId: 1,
                levelId: 3,
				skillMatrixId: 14
            },
            {
                id: 11,
                name: 'FrontEnd desktop development',
                competencyId: 1,
                levelId: 3,
				skillMatrixId: 13
            },
            {
                id: 12,
                name: 'Azure development',
                competencyId: 1,
                levelId: 4,
				skillMatrixId: 14
            },
            {
                id: 13,
                name: 'FrontEnd web development',
                competencyId: 1,
                levelId: 4,
                skillMatrixId: 13
            },
            {
                id: 14,
                name: 'Backend development',
                competencyId: 1,
                levelId: 4,
                skillMatrixId: 14
            },
            {
                id: 15,
                name: 'FrontEnd desktop development',
                competencyId: 1,
                levelId: 4,
                skillMatrixId: 13
            },
            {
                id: 16,
                name: 'Azure development',
                competencyId: 1,
                levelId: 5,
                skillMatrixId: 14
            },
            {
                id: 17,
                name: 'FrontEnd web development',
                competencyId: 1,
                levelId: 5,
                skillMatrixId: 13
            },
            {
                id: 18,
                name: 'Backend development',
                competencyId: 1,
                levelId: 5,
                skillMatrixId: 14
            },
            {
                id: 19,
                name: 'FrontEnd desktop development',
                competencyId: 1,
                levelId: 5,
                skillMatrixId: 13
            }
        ];

        let levels: ILevel[] = [
            {
                id: 1,
                name: 'L1',
                description: 'Junior Software Engineer',
                competencyId: 1
            },
            {
                id: 2,
                name: 'L2',
                description: 'Software Engineer',
                competencyId: 1
            },
            {
                id: 3,
                name: 'L3',
                description: 'Senior Software Engineer',
                competencyId: 1
            },
            {
                id: 4,
                name: 'L4',
                description: 'Lead Software Engineer',
                competencyId: 1
            },
            {
                id: 5,
                name: 'L5',
                description: 'Chief Software Engineer',
                competencyId: 1
            },
            {
                id: 6,
                name: 'L1',
                description: '',
                competencyId: 2
            },
            {
                id: 7,
                name: 'L2',
                description: '',
                competencyId: 2
            },
            {
                id: 8,
                name: 'L3',
                description: '',
                competencyId: 2
            }
        ];

        let skillMatrix: ISkillMatrix[] = [
            {
                id: 13,
                hasContent: true,
                competencyName: '.Net',
                domain: 'FrontEnd web development',
                level:
                {
                    id: 3,
                    name: 'L3',
                    description: 'Senior Software Engineer',
                    competencyId: 13
                },
                skills: [
                    {
                        rootId: 7,
                        displayOrder: -100500,
                        requiredSkillLevel: 0,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [],
                        id: 7,
                        parentId: null,
                        name: 'Hard skills',
                        isSelectable: true,
                        skillLevel: 1,
                        hasChildren: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 95,
                        requiredSkillLevel: 0,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [],
                        id: 973,
                        parentId: 7,
                        name: 'Management',
                        isSelectable: true,
                        skillLevel: 2,
                        hasChildren: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 96,
                        requiredSkillLevel: 0,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [],
                        id: 479,
                        parentId: 973,
                        name: 'General Management',
                        isSelectable: true,
                        skillLevel: 3,
                        hasChildren: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 97,
                        requiredSkillLevel: 10,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Leadership - Novice',
                                isRequired: true
                            },
                            {
                                name: 'Leadership - Advanced',
                                isRequired: false
                            },
                            {
                                name: 'Leadership - Intermediate',
                                isRequired: false
                            }
                        ],
                        id: 573,
                        parentId: 479,
                        name: 'Leadership',
                        isSelectable: true,
                        skillLevel: 4,
                        hasChildren: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 97,
                        requiredSkillLevel: 10,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [],
                        id: 8080,
                        parentId: 573,
                        name: 'Leadership 1',
                        isSelectable: true,
                        skillLevel: 5,
                        hasChildren: false
                    },
                    {
                        rootId: 7,
                        displayOrder: 99,
                        requiredSkillLevel: 10,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Planning and Organizing - Novice',
                                isRequired: true
                            },
                            {
                                name: 'Planning and Organizing - Advanced',
                                isRequired: false
                            },
                            {
                                name: 'Planning and Organizing - Intermediate',
                                isRequired: false
                            }
                        ],
                        id: 569,
                        parentId: 479,
                        name: 'Planning and Organizing',
                        isSelectable: true,
                        skillLevel: 4,
                        hasChildren: false
                    },
                    {
                        rootId: 7,
                        displayOrder: 100,
                        requiredSkillLevel: 10,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Delegation - Novice',
                                isRequired: true
                            },
                            {
                                name: 'Delegation - Advanced',
                                isRequired: false
                            },
                            {
                                name: 'Delegation - Intermediate',
                                isRequired: false
                            }
                        ],
                        id: 570,
                        parentId: 479,
                        name: 'Delegation',
                        isSelectable: true,
                        skillLevel: 4,
                        hasChildren: false
                    },
                    {
                        rootId: 7,
                        displayOrder: 101,
                        requiredSkillLevel: 10,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Control - Novice',
                                isRequired: true
                            },
                            {
                                name: 'Control - Advanced',
                                isRequired: false
                            },
                            {
                                name: 'Control - Intermediate',
                                isRequired: false
                            }
                        ],
                        id: 571,
                        parentId: 479,
                        name: 'Control',
                        isSelectable: true,
                        skillLevel: 4,
                        hasChildren: false
                    }]
            },
            {
                id: 14,
                hasContent: true,
                competencyName: '.Net',
                domain: 'Azure development',
                level:
                    {
                        id: 4,
                        name: 'L4',
                        description: 'Lead Software Engineer',
                        competencyId: 1
                    },
                skills: [
                    {
                        rootId: 7,
                        displayOrder: -100500,
                        requiredSkillLevel: 0,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [],
                        id: 7,
                        parentId: null,
                        name: 'Hard skills',
                        isSelectable: true,
                        skillLevel: 1,
                        hasChildren: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 95,
                        requiredSkillLevel: 0,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [],
                        id: 973,
                        parentId: 7,
                        name: 'Development',
                        isSelectable: true,
                        skillLevel: 2,
                        hasChildren: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 96,
                        requiredSkillLevel: 0,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [],
                        id: 479,
                        parentId: 973,
                        name: '.Net Development',
                        isSelectable: true,
                        skillLevel: 3,
                        hasChildren: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 97,
                        requiredSkillLevel: 10,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Leadership - Novice',
                                isRequired: true
                            },
                            {
                                name: 'Leadership - Advanced',
                                isRequired: false
                            },
                            {
                                name: 'Leadership - Intermediate',
                                isRequired: false
                            }
                        ],
                        id: 573,
                        parentId: 479,
                        name: '.Net Web development',
                        isSelectable: true,
                        skillLevel: 4,
                        hasChildren: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 97,
                        requiredSkillLevel: 10,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [],
                        id: 8080,
                        parentId: 573,
                        name: 'Asp.Net MVC',
                        isSelectable: true,
                        skillLevel: 5,
                        hasChildren: false
                    },
                    {
                        rootId: 7,
                        displayOrder: 97,
                        requiredSkillLevel: 10,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [],
                        id: 8081,
                        parentId: 573,
                        name: 'Asp.Net Web Forms',
                        isSelectable: true,
                        skillLevel: 5,
                        hasChildren: false
                    },
                    {
                        rootId: 7,
                        displayOrder: 99,
                        requiredSkillLevel: 10,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Planning and Organizing - Novice',
                                isRequired: true
                            },
                            {
                                name: 'Planning and Organizing - Advanced',
                                isRequired: false
                            },
                            {
                                name: 'Planning and Organizing - Intermediate',
                                isRequired: false
                            }
                        ],
                        id: 569,
                        parentId: 479,
                        name: '.Net WPF Development',
                        isSelectable: true,
                        skillLevel: 4,
                        hasChildren: false
                    },
                    {
                        rootId: 7,
                        displayOrder: 100,
                        requiredSkillLevel: 10,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Delegation - Novice',
                                isRequired: true
                            },
                            {
                                name: 'Delegation - Advanced',
                                isRequired: false
                            },
                            {
                                name: 'Delegation - Intermediate',
                                isRequired: false
                            }
                        ],
                        id: 570,
                        parentId: 479,
                        name: '.Net Winforms development',
                        isSelectable: true,
                        skillLevel: 4,
                        hasChildren: false
                    },
                    {
                        rootId: 7,
                        displayOrder: 101,
                        requiredSkillLevel: 10,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Control - Novice',
                                isRequired: true
                            },
                            {
                                name: 'Control - Advanced',
                                isRequired: false
                            },
                            {
                                name: 'Control - Intermediate',
                                isRequired: false
                            }
                        ],
                        id: 571,
                        parentId: 479,
                        name: '.Net Backen Development',
                        isSelectable: true,
                        skillLevel: 4,
                        hasChildren: false
                    }]
            }];

        let interviewScriptData: ISkillMatrix[] = [
            {
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
                        questions: [
                            {
                                id: 1,
                                question: 'Whats the purpose of standards/conventions in .NET C#?',
                                answer: '',
                                selected: true,
                                rating: 0,
                                comments: []
                            },
                            {
                                id: 2,
                                question: 'When to use string and when StringBuilder?',
                                answer: '',
                                selected: true,
                                rating: 0,
                                comments: []
                            },
                            {
                                id: 3,
                                question: 'When to use var and when the exact data type?',
                                answer: '',
                                selected: true,
                                rating: 0,
                                comments: []
                            }
                        ],
                        exercises: []
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
                        questions: [
                            {
                                id: 1,
                                question: 'What is SOLID? Explain the principles and provide examples',
                                answer: '',
                                selected: true,
                                rating: 0,
                                comments: []
                            },
                            {
                                id: 2,
                                question: 'What is Value Type and Reference Type?',
                                answer: '',
                                selected: true,
                                rating: 0,
                                comments: []
                            },
                            {
                                id: 3,
                                question: 'What is Boxing and Un-Boxing?',
                                answer: '',
                                selected: true,
                                rating: 0,
                                comments: []
                            }
                        ],
                        exercises: [
                            {
                                id: 1,
                                title: 'Palindrome',
                                description: `A palindrome is a word, phrase, number, or other
                                    sequence of characters which reads the same backward or forward,
                                    such as madam or kayak. Write an function that receives an string
                                    parameters and return true if it is a palindrome.`,
                                solution: '',
                                selected: true,
                                rating: 0,
                                comments: []
                            },
                            {
                                id: 2,
                                title: 'Balanced Brakets',
                                description: `Type of Brackets: () Round brackets or parentheses, {}
                                    Curly brackets or braces, [] Square brackets. Implement an algorithm
                                    to resolve the balanced brackets problems, ie. \'{([])}\' is balanced.`,
                                solution: '',
                                selected: true,
                                rating: 0,
                                comments: []
                            }
                        ]
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
                        questions: [
                            {
                                id: 1,
                                question: 'Explain SCRUM',
                                answer: '',
                                selected: true,
                                rating: 0,
                                comments: []
                            },
                            {
                                id: 2,
                                question: 'How do you face or deal with problems in an Agile project?',
                                answer: '',
                                selected: true,
                                rating: 0,
                                comments: []
                            },
                            {
                                id: 3,
                                answer: '',
                                question: `When you need to solve something you don't know, how do you deal with it?`,
                                selected: true,
                                rating: 0,
                                comments: []
                            }
                        ],
                        exercises: []
                    }]
            },
            {
                id: 14,
                competencyName: '.Net',
                domain: 'Azure development',
                level:
                    {
                        id: 4,
                        name: 'L4',
                        description: 'Lead Software Engineer',
                        competencyId: 14
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
                        questions: [
                            {
                                id: 1,
                                question: `What's the purpose of standards/conventions in .NET C#?`,
                                answer: '',
                                selected: true,
                                rating: 4.1,
                                comments: []
                            },
                            {
                                id: 2,
                                question: 'When to use string and when StringBuilder?',
                                answer: '',
                                selected: true,
                                rating: 3,
                                comments: []
                            },
                            {
                                id: 3,
                                question: 'When to use var and when the exact data type?',
                                answer: '',
                                selected: true,
                                rating: 4,
                                comments: []
                            }
                        ],
                        exercises: []
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
                        questions: [
                            {
                                id: 1,
                                question: 'What is SOLID? Explain the principles and provide examples',
                                answer: '',
                                selected: true,
                                rating: 3,
                                comments: [{
                                    text: `He did had an overall idea of the 5 principles but he was not able 
                                        to explain nor them properly`,
                                    user: `Victor Parra`,
                                    date: new Date(`Feb 22, 2017, 4:54:35 PM`)
                                }]
                            },
                            {
                                id: 2,
                                question: 'What is Value Type and Reference Type?',
                                answer: '',
                                selected: true,
                                rating: 4,
                                comments: [{
                                    text: `He did explained on detail memory allocation process and 
                                        how the runtime mamange primitives and objects...`,
                                    user: `Victor Parra`,
                                    date: new Date(`Feb 22, 2017, 4:35:12 PM`)
                                }]
                            },
                            {
                                id: 3,
                                question: 'What is Boxing and Un-Boxing?',
                                answer: '',
                                selected: true,
                                rating: 4,
                                comments: []
                            }
                        ],
                        exercises: [
                            {
                                id: 1,
                                title: 'Palindrome',
                                description: `A palindrome is a word, phrase, number, or other
                                    sequence of characters which reads the same backward or forward,
                                    such as madam or kayak. Write an function that receives an string
                                    parameters and return true if it is a palindrome.`,
                                solution: '',
                                selected: true,
                                rating: 4,
                                comments: [{
                                    text: `Followed Microsoft's coding standards, applied SOLID principles, 
                                        and good clean overall coding`,
                                    user: `Victor Parra`,
                                    date: new Date(`Feb 23, 2017, 12:26:55 PM`)
                                }]
                            },
                            {
                                id: 2,
                                title: 'Balanced Brakets',
                                description: `Type of Brackets: () Round brackets or parentheses, {}
                                    Curly brackets or braces, [] Square brackets. Implement an algorithm
                                    to resolve the balanced brackets problems, ie. \'{([])}\' is balanced.`,
                                solution: '',
                                selected: true,
                                rating: 5,
                                comments: [{
                                    text: `Outstanding implementation using only two lines of code`,
                                    user: `Victor Parra`,
                                    date: new Date(`Feb 23, 2017, 11:58:04 PM`)
                                }]

                            }
                        ]
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
                        questions: [
                            {
                                id: 1,
                                question: 'Explain SCRUM',
                                answer: '',
                                selected: true,
                                rating: 3,
                                comments: [{
                                    text: `Was able to identify roles such Scrum Master, Product Owner, etc. but he's not
                                        familiar with ceremonies and what is performed in those other than scrum`,
                                    user: `Victor Parra`,
                                    date: new Date(`Feb 23, 2017, 12:33:15 PM`)
                                }]
                            },
                            {
                                id: 2,
                                question: 'How do you face or deal with problems in an Agile project?',
                                answer: '',
                                selected: true,
                                rating: 3,
                                comments: [{
                                    text: `When I asked him about a real prolem such includind a user story
                                        to the sprint whitout capatity abailable he answer that you cannot do that.`,
                                    user: `Victor Parra`,
                                    date: new Date(`Feb 23, 2017, 12:36:02 PM`)
                                }]
                            },
                            {
                                id: 3,
                                answer: '',
                                question: `When you need to solve something you don't know, how do you deal with it?`,
                                selected: true,
                                rating: 4,
                                comments: [{
                                    text: `It looks like he is self driven and able to learn things on his own, good
                                        analytic and troubleshooting habilities`,
                                    user: `Victor Parra`,
                                    date: new Date(`Feb 23, 2017, 12:40:33 PM`)
                                }]
                            }
                        ],
                        exercises: []
                    }]
            }];

        return { interviewScriptData, competencies, levels, domains, skillMatrix };
    }
}
