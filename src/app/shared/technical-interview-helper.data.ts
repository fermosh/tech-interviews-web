import { InMemoryDbService } from 'angular-in-memory-web-api';
import { SkillMatrix } from './classes/skill-matrix';
import { InterviewScript } from './../scriptViewer/classes/interview-script';
import { Question } from './classes/question';
import { Exercise } from './classes/exercise';
import { ITemplate } from './classes/template';
import { Position } from '../entryPoint/classes/position';

export class TechnicalInterviewData implements InMemoryDbService {

    createDb() {
        let templates: ITemplate[] = [];

        let questions: Question[] = [
            {
                id: 1,
                body: `What's the purpose of standards/conventions in .NET C#?`,
                answer: ``,
                tag: {
                    id: 973,
                    name: 'Development',
                },
                competency: {
                    code: 'DotNET',
                    jobFunctions: [15],
                    id: 1,
                    parentId: null,
                    name: '.NET',
                    isSelectable: false
                }
            },
            {
                id: 2,
                body: 'When to use string and when StringBuilder?',
                answer: ``,
                tag: {
                    id: 973,
                    name: 'Development',
                },
                competency: {
                    code: 'DotNET',
                    jobFunctions: [15],
                    id: 1,
                    parentId: null,
                    name: '.NET',
                    isSelectable: false
                }
            },
            {
                id: 3,
                body: 'When to use var and when the exact data type?',
                answer: ``,
                tag: {
                    id: 973,
                    name: 'Development',
                },
                competency: {
                    code: 'DotNET',
                    jobFunctions: [15],
                    id: 1,
                    parentId: null,
                    name: '.NET',
                    isSelectable: false
                }
            },
            {
                id: 4,
                body: 'What is SOLID? Explain the principles and provide examples',
                answer: ``,
                tag: {
                    id: 973,
                    name: 'Development',
                },
                competency: {
                    code: 'DotNET',
                    jobFunctions: [15],
                    id: 1,
                    parentId: null,
                    name: '.NET',
                    isSelectable: false
                }
            },
            {
                id: 5,
                body: 'What is Value Type and Reference Type?',
                answer: ``,
                tag: {
                    id: 973,
                    name: 'Development',
                },
                competency: {
                    code: 'DotNET',
                    jobFunctions: [15],
                    id: 1,
                    parentId: null,
                    name: '.NET',
                    isSelectable: false
                }
            },
            {
                id: 6,
                body: 'What is Boxing and Un-Boxing?',
                answer: ``,
                tag: {
                    id: 973,
                    name: 'Development',
                },
                competency: {
                    code: 'DotNET',
                    jobFunctions: [15],
                    id: 1,
                    parentId: null,
                    name: '.NET',
                    isSelectable: false
                }
            }
        ];

        let exercises: Exercise[] = [
            {
                id: 1,
                title: 'Palindrome',
                body: `A palindrome is a word, phrase, number, or other
                    sequence of characters which reads the same backward or forward,
                    such as madam or kayak. Write an function that receives an string
                    parameters and return true if it is a palindrome.`,
                solution: '',
                tag: {
                    id: 973,
                    name: 'Development',
                },
                competency: {
                    code: 'DotNET',
                    jobFunctions: [15],
                    id: 1,
                    parentId: null,
                    name: '.NET',
                    isSelectable: false
                }
            },
            {
                id: 2,
                title: 'Balanced Brakets',
                body: `Type of Brackets: () Round brackets or parentheses, {}
                    Curly brackets or braces, [] Square brackets. Implement an algorithm
                    to resolve the balanced brackets problems, ie. \'{([])}\' is balanced.`,
                solution: '',
                tag: {
                    id: 973,
                    name: 'Development',
                },
                competency: {
                    code: 'DotNET',
                    jobFunctions: [15],
                    id: 1,
                    parentId: null,
                    name: '.NET',
                    isSelectable: false
                }
            }
        ];

        let skillMatrix: SkillMatrix[] = [
            {
                hasContent: true,
                competencyId: 13,
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
                hasContent: true,
                competencyId: 14,
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
                    }
                ]
            }
        ];

        let interviewScriptData: InterviewScript[] = [
            {
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
            },
            {
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
                        interviewQuestions: [
                            {
                                id: 1,
                                body: `What's the purpose of standards/conventions in .NET C#?`,
                                answer: '',
                                tag: {
                                    id: 973,
                                    name: 'Development'
                                },
                                selected: true,
                                rating: 4.1,
                                comments: []
                            },
                            {
                                id: 2,
                                body: 'When to use string and when StringBuilder?',
                                answer: '',
                                tag: {
                                    id: 973,
                                    name: 'Development'
                                },
                                selected: true,
                                rating: 3,
                                comments: []
                            },
                            {
                                id: 3,
                                body: 'When to use var and when the exact data type?',
                                answer: '',
                                tag: {
                                    id: 973,
                                    name: 'Development'
                                },
                                selected: true,
                                rating: 4,
                                comments: []
                            }
                        ]
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
                        interviewQuestions: [
                            {
                                id: 4,
                                body: 'What is SOLID? Explain the principles and provide examples',
                                answer: '',
                                tag: {
                                    id: 2,
                                    name: 'Development'
                                },
                                selected: true,
                                rating: 3,
                                comments: [
                                    {
                                        text: `He did had an overall idea of the 5 principles but he was not able 
                                            to explain nor them properly`,
                                        user: `Victor Parra`,
                                        date: new Date(`Feb 22, 2017, 4:54:35 PM`)
                                    }
                                ]
                            },
                            {
                                id: 5,
                                body: 'What is Value Type and Reference Type?',
                                answer: '',
                                tag: {
                                    id: 2,
                                    name: 'Development'
                                },
                                selected: true,
                                rating: 4,
                                comments: [
                                    {
                                        text: `He did explained on detail memory allocation process and 
                                            how the runtime mamange primitives and objects...`,
                                        user: `Victor Parra`,
                                        date: new Date(`Feb 22, 2017, 4:35:12 PM`)
                                    }
                                ]
                            },
                            {
                                id: 6,
                                body: 'What is Boxing and Un-Boxing?',
                                answer: '',
                                tag: {
                                    id: 2,
                                    name: 'Development'
                                },
                                selected: true,
                                rating: 4,
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
                        interviewQuestions: [
                            {

                                id: 7,
                                body: 'Explain SCRUM',
                                answer: '',
                                tag: {
                                    id: 3,
                                    name: 'Scrum / Agile'
                                },
                                rating: 5,
                                comments: [
                                    {
                                        text: `Was able to identify roles such Scrum Master, Product Owner, etc. but he's not
                                            familiar with ceremonies and what is performed in those other than scrum`,
                                        user: `Victor Parra`,
                                        date: new Date(`Feb 23, 2017, 12:33:15 PM`)
                                    }
                                ]
                            },
                            {
                                id: 8,
                                body: 'How do you face or deal with problems in an Agile project?',
                                answer: '',
                                tag: {
                                    id: 3,
                                    name: 'Scrum / Agile'
                                },
                                rating: 3,
                                comments: [
                                    {
                                        text: `When I asked him about a real prolem such includind a user story
                                            to the sprint whitout capatity abailable he answer that you cannot do that.`,
                                        user: `Victor Parra`,
                                        date: new Date(`Feb 23, 2017, 12:36:02 PM`)
                                    }
                                ]
                            },
                            {
                                id: 9,
                                body: `When you need to solve something you don't know, how do you deal with it?`,
                                answer: '',
                                tag: {
                                    id: 3,
                                    name: 'Scrum / Agile'
                                },
                                rating: 4,
                                comments: [
                                    {
                                        text: `It looks like he is self driven and able to learn things on his own, good
                                            analytic and troubleshooting habilities`,
                                        user: `Victor Parra`,
                                        date: new Date(`Feb 23, 2017, 12:40:33 PM`)
                                    }
                                ]
                            }
                        ]
                    }],
                interviewExercises: [
                    {
                        id: 1,
                        title: 'Palindrome',
                        body: `A palindrome is a word, phrase, number, or other
                                        sequence of characters which reads the same backward or forward,
                                        such as madam or kayak. Write an function that receives an string
                                        parameters and return true if it is a palindrome.`,
                        solution: '',
                        tag: {
                            id: 1,
                            name: 'Code Standards'
                        },
                        selected: true,
                        rating: 4,
                        comments: [
                            {
                                text: `Followed Microsoft's coding standards, applied SOLID principles, 
                                            and good clean overall coding`,
                                user: `Victor Parra`,
                                date: new Date(`Feb 23, 2017, 12:26:55 PM`)
                            }
                        ]
                    },
                    {
                        id: 2,
                        title: 'Balanced Brakets',
                        body: `Type of Brackets: () Round brackets or parentheses, {}
                                        Curly brackets or braces, [] Square brackets. Implement an algorithm
                                        to resolve the balanced brackets problems, ie. \'{([])}\' is balanced.`,
                        solution: '',
                        tag: {
                            id: 2,
                            name: '.NET Development'
                        },
                        selected: true,
                        rating: 5,
                        comments: [
                            {
                                text: `Outstanding implementation using only two lines of code`,
                                user: `Victor Parra`,
                                date: new Date(`Feb 23, 2017, 11:58:04 PM`)
                            }
                        ]
                    }
                ]
            }];

        let questionsByTemplateId: Question[] = [
            {
                id: 1,
                body: `What's the purpose of standards/conventions in .NET C#?`,
                answer: '',
                tag: {
                    id: 1,
                    name: 'Code Standards'
                }
            },
            {
                id: 2,
                body: 'When to use string and when StringBuilder?',
                answer: '',
                tag: {
                    id: 1,
                    name: 'Code Standards'
                }
            },
            {
                id: 3,
                body: 'When to use var and when the exact data type?',
                answer: '',
                tag: {
                    id: 1,
                    name: 'Code Standards'
                }
            },
            {
                id: 4,
                body: 'What is SOLID? Explain the principles and provide examples',
                answer: '',
                tag: {
                    id: 2,
                    name: 'NET Development'
                }
            },
            {
                id: 5,
                body: 'What is Value Type and Reference Type?',
                answer: '',
                tag: {
                    id: 2,
                    name: 'NET Development'
                }
            },
            {
                id: 6,
                body: 'What is Boxing and Un-Boxing?',
                answer: '',
                tag: {
                    id: 2,
                    name: 'NET Development'
                }
            },
            {
                id: 7,
                body: 'Explain SCRUM',
                answer: '',
                tag: {
                    id: 3,
                    name: 'Scrum / Agile'
                }
            },
            {
                id: 8,
                body: 'How do you face or deal with problems in an Agile project?',
                answer: '',
                tag: {
                    id: 3,
                    name: 'Scrum / Agile'
                }
            },
            {
                id: 9,
                body: `When you need to solve something you don't know, how do you deal with it?`,
                answer: '',
                tag: {
                    id: 3,
                    name: 'Scrum / Agile'
                }
            },
        ];

        let exercisesByTemplateId: Exercise[] = [
            {
                id: 1,
                title: 'Palindrome',
                body: `A palindrome is a word, phrase, number, or other
                                        sequence of characters which reads the same backward or forward,
                                        such as madam or kayak. Write an function that receives an string
                                        parameters and return true if it is a palindrome.`,
                solution: '',
                tag: {
                    id: 1,
                    name: 'Code Standards'
                }
            },
            {
                id: 2,
                title: 'Balanced Brakets',
                body: `Type of Brackets: () Round brackets or parentheses, {}
                                        Curly brackets or braces, [] Square brackets. Implement an algorithm
                                        to resolve the balanced brackets problems, ie. \'{([])}\' is balanced.`,
                solution: '',
                tag: {
                    id: 2,
                    name: '.NET Development'
                }
            }
        ];

        let position: Position = {
            jobFunctions: [
                { id: 6, name: 'Account Management' },
                { id: 44, name: 'Administration' },
                { id: 34, name: 'Agile Coach' },
                { id: 25, name: 'Algorithm Development' },
                { id: 26, name: 'Application Support' },
                { id: 33, name: 'Architecture' },
                { id: 8, name: 'Business Analysis' },
                { id: 7, name: 'Business Consulting' },
                { id: 5, name: 'Business Development' },
                { id: 31, name: 'Content Strategy' },
                { id: 35, name: 'Data Analysis' },
                { id: 32, name: 'DB Development and Administration' },
                { id: 9, name: 'Delivery Management' },
                { id: 30, name: 'Experience Architecture' },
                { id: 29, name: 'Experience Design' },
                { id: 36, name: 'Finance' },
                { id: 1, name: 'Global Mobility and Travel' },
                { id: 37, name: 'Human Resources' },
                { id: 53, name: 'Interim' },
                { id: 19, name: 'IT Infrastructure Support' },
                { id: 40, name: 'Legal' },
                { id: 4, name: 'Marketing' },
                { id: 10, name: 'Performance Optimization' },
                { id: 22, name: 'Pre-Production Training and Development' },
                { id: 23, name: 'Pre-Sales' },
                { id: 12, name: 'Process Engineering' },
                { id: 11, name: 'Project Management' },
                { id: 13, name: 'Resource Management' },
                { id: 14, name: 'Scientific Curation' },
                { id: 81, name: 'Senior Management' },
                { id: 27, name: 'Service Desk' },
                { id: 43, name: 'Service Management' },
                { id: 15, name: 'Software Engineering' },
                { id: 79, name: 'Students' },
                { id: 28, name: 'Systems Engineering' },
                { id: 20, name: 'Talent Acquisition' },
                { id: 16, name: 'Technical Writing' },
                { id: 45, name: 'Technology Consulting' },
                { id: 18, name: 'Test Automation' },
                { id: 17, name: 'Testing' },
                { id: 42, name: 'Training and Development' },
                { id: 80, name: 'Undefined' }
            ],
            competencies: [
                {
                    code: 'DotNET',
                    jobFunctions: [15],
                    id: 1,
                    parentId: null,
                    name: '.NET',
                    isSelectable: false
                },
                {
                    code: 'CG-2DAnim',
                    jobFunctions: [],
                    id: 86,
                    parentId: 83,
                    name: '2D Animation and Vector Art',
                    isSelectable: true
                },
                {
                    code: 'CG-2DRaster',
                    jobFunctions: [],
                    id: 84,
                    parentId: 83,
                    name: '2D Raster Art',
                    isSelectable: true
                },
                {
                    code: 'CG-3D',
                    jobFunctions: [],
                    id: 85,
                    parentId: 83,
                    name: '3D Art',
                    isSelectable: true
                },
                {
                    code: 'ADAM',
                    jobFunctions: [],
                    id: 76,
                    parentId: null,
                    name: 'ADAM',
                    isSelectable: false
                },
                {
                    code: 'ADAM_Core_Dev',
                    jobFunctions: [],
                    id: 78,
                    parentId: 76,
                    name: 'ADAM Core developer',
                    isSelectable: true
                },
                {
                    code: 'ADAM_Web_Dev',
                    jobFunctions: [],
                    id: 77,
                    parentId: 76,
                    name: 'ADAM Web developer',
                    isSelectable: true
                },
                {
                    code: 'AEM',
                    jobFunctions: [],
                    id: 64,
                    parentId: null,
                    name: 'AEM',
                    isSelectable: false
                },
                {
                    code: 'AEM-Dev',
                    jobFunctions: [],
                    id: 65,
                    parentId: 64,
                    name: 'AEM developement',
                    isSelectable: true
                },
                {
                    code: 'Mobile-Android',
                    jobFunctions: [],
                    id: 18,
                    parentId: 2,
                    name: 'Android Development',
                    isSelectable: true
                },
                {
                    code: 'ECommerce-ATG',
                    jobFunctions: [],
                    id: 33,
                    parentId: 32,
                    name: 'ATG Development',
                    isSelectable: true
                },
                {
                    code: 'AutoTest',
                    jobFunctions: [18],
                    id: 37,
                    parentId: null,
                    name: 'Automated Testing',
                    isSelectable: false
                },
                {
                    code: 'DotNET-Azure',
                    jobFunctions: [],
                    id: 13,
                    parentId: 1,
                    name: 'Azure Development',
                    isSelectable: true
                },
                {
                    code: 'DotNET-Backend',
                    jobFunctions: [],
                    id: 12,
                    parentId: 1,
                    name: 'Back-end Development',
                    isSelectable: true
                },
                {
                    code: 'Java-Backend',
                    jobFunctions: [],
                    id: 17,
                    parentId: 7,
                    name: 'Back-end Development',
                    isSelectable: true
                },
                {
                    code: 'BigData',
                    jobFunctions: [15],
                    id: 3,
                    parentId: null,
                    name: 'Big Data',
                    isSelectable: true
                },
                {
                    code: 'BA',
                    jobFunctions: [8],
                    id: 4,
                    parentId: null,
                    name: 'Business Analysis',
                    isSelectable: true
                },
                {
                    code: 'BI-Analysis',
                    jobFunctions: [],
                    id: 25,
                    parentId: 24,
                    name: 'Business Analysis',
                    isSelectable: true
                },
                {
                    code: 'BI',
                    jobFunctions: [15, 32],
                    id: 24,
                    parentId: null,
                    name: 'Business Intelligence',
                    isSelectable: false
                },
                {
                    code: 'C-CDev',
                    jobFunctions: [],
                    id: 59,
                    parentId: 58,
                    name: 'C Development',
                    isSelectable: true
                },
                {
                    code: 'C',
                    jobFunctions: [
                        15
                    ],
                    id: 58,
                    parentId: null,
                    name: 'C\\C++',
                    isSelectable: false
                },
                {
                    code: 'C-CPP-Dev',
                    jobFunctions: [],
                    id: 60,
                    parentId: 58,
                    name: 'C++ Development',
                    isSelectable: true
                },
                {
                    code: 'CGArt',
                    jobFunctions: [],
                    id: 83,
                    parentId: null,
                    name: 'Computer Graphic Art',
                    isSelectable: false
                },
                {
                    code: 'BI-QA',
                    jobFunctions: [],
                    id: 27,
                    parentId: 24,
                    name: 'Data Quality Engineering',
                    isSelectable: true
                },
                {
                    code: 'DB',
                    jobFunctions: [32, 15],
                    id: 5,
                    parentId: null,
                    name: 'DB',
                    isSelectable: false
                },
                {
                    code: 'MGMT-Delivery',
                    jobFunctions: [9, 11, 13],
                    id: 30,
                    parentId: null,
                    name: 'Delivery Management',
                    isSelectable: true
                },
                {
                    code: 'Design',
                    jobFunctions: [63, 62],
                    id: 8,
                    parentId: null,
                    name: 'Design',
                    isSelectable: false
                },
                {
                    code: 'PHP-Drupal',
                    jobFunctions: [],
                    id: 54,
                    parentId: 51,
                    name: 'Drupal Developer',
                    isSelectable: true
                },
                {
                    code: 'ECommerce',
                    jobFunctions: [
                        15
                    ],
                    id: 32,
                    parentId: null,
                    name: 'E-Commerce',
                    isSelectable: false
                },
                {
                    code: 'BI-ETLDev',
                    jobFunctions: [],
                    id: 28,
                    parentId: 24,
                    name: 'ETL Development',
                    isSelectable: true
                },
                {
                    code: 'UXD',
                    jobFunctions: [
                        15
                    ],
                    id: 9,
                    parentId: null,
                    name: 'Front-end',
                    isSelectable: false
                },
                {
                    code: 'DotNET-Desktop',
                    jobFunctions: [],
                    id: 11,
                    parentId: 1,
                    name: 'Front-end Desktop Development',
                    isSelectable: true
                },
                {
                    code: 'DotNET-Web',
                    jobFunctions: [],
                    id: 10,
                    parentId: 1,
                    name: 'Front-end Web Development',
                    isSelectable: true
                },
                {
                    code: 'Java-Web',
                    jobFunctions: [],
                    id: 16,
                    parentId: 7,
                    name: 'Front-end Web Development',
                    isSelectable: true
                },
                {
                    code: 'QA',
                    jobFunctions: [
                        17
                    ],
                    id: 6,
                    parentId: null,
                    name: 'Functional Testing',
                    isSelectable: true
                },
                {
                    code: 'Java-GA',
                    jobFunctions: [],
                    id: 31,
                    parentId: 7,
                    name: 'Google account Development',
                    isSelectable: true
                },
                {
                    code: 'Design-Graphic',
                    jobFunctions: [],
                    id: 21,
                    parentId: 8,
                    name: 'Graphic Design',
                    isSelectable: true
                },
                {
                    code: 'ECommerce-Hybris',
                    jobFunctions: [],
                    id: 34,
                    parentId: 32,
                    name: 'Hybris Development',
                    isSelectable: true
                },
                {
                    code: 'Mobile-IOS',
                    jobFunctions: [],
                    id: 19,
                    parentId: 2,
                    name: 'iOS Development',
                    isSelectable: true
                },
                {
                    code: 'Java',
                    jobFunctions: [
                        15
                    ],
                    id: 7,
                    parentId: null,
                    name: 'Java',
                    isSelectable: false
                },
                {
                    code: 'UXD-JS',
                    jobFunctions: [],
                    id: 23,
                    parentId: 9,
                    name: 'JavaScript Development',
                    isSelectable: true
                },
                {
                    code: 'AutoTest-Mobile',
                    jobFunctions: [],
                    id: 47,
                    parentId: 37,
                    name: 'Layer expert: Mobile',
                    isSelectable: true
                },
                {
                    code: 'PHP-Magneto',
                    jobFunctions: [],
                    id: 55,
                    parentId: 51,
                    name: 'Magento Developer',
                    isSelectable: true
                },
                {
                    code: 'Mobile',
                    jobFunctions: [
                        15
                    ],
                    id: 2,
                    parentId: null,
                    name: 'Mobile',
                    isSelectable: false
                },
                {
                    code: 'DB-MSSQL',
                    jobFunctions: [],
                    id: 14,
                    parentId: 5,
                    name: 'MS SQL Development',
                    isSelectable: true
                },
                {
                    code: 'DB-Oracle',
                    jobFunctions: [],
                    id: 15,
                    parentId: 5,
                    name: 'Oracle Development',
                    isSelectable: true
                },
                {
                    code: 'Perf',
                    jobFunctions: [
                        10
                    ],
                    id: 35,
                    parentId: null,
                    name: 'Performance Analysis',
                    isSelectable: true
                },
                {
                    code: 'PHP',
                    jobFunctions: [
                        15
                    ],
                    id: 51,
                    parentId: null,
                    name: 'PHP',
                    isSelectable: false
                },
                {
                    code: 'PHP-Dev',
                    jobFunctions: [],
                    id: 53,
                    parentId: 51,
                    name: 'PHP Developer',
                    isSelectable: true
                },
                {
                    code: 'AutoTest-DotNet',
                    jobFunctions: [],
                    id: 39,
                    parentId: 37,
                    name: 'Platform expert: .NET',
                    isSelectable: true
                },
                {
                    code: 'AutoTest-Java',
                    jobFunctions: [],
                    id: 38,
                    parentId: 37,
                    name: 'Platform expert: Java',
                    isSelectable: true
                },
                {
                    code: 'AutoTest-JS',
                    jobFunctions: [],
                    id: 41,
                    parentId: 37,
                    name: 'Platform expert: JavaScript',
                    isSelectable: true
                },
                {
                    code: 'AutoTest-Python',
                    jobFunctions: [],
                    id: 40,
                    parentId: 37,
                    name: 'Platform expert: Python',
                    isSelectable: true
                },
                {
                    code: 'AutoTest-Ruby',
                    jobFunctions: [],
                    id: 42,
                    parentId: 37,
                    name: 'Platform expert: Ruby',
                    isSelectable: true
                },
                {
                    code: 'AutoTest-TC',
                    jobFunctions: [],
                    id: 44,
                    parentId: 37,
                    name: 'Platform expert: TestComplete',
                    isSelectable: true
                },
                {
                    code: 'AutoTest-UFT',
                    jobFunctions: [],
                    id: 43,
                    parentId: 37,
                    name: 'Platform expert: UFT',
                    isSelectable: true
                },
                {
                    code: 'BI-Dev',
                    jobFunctions: [],
                    id: 26,
                    parentId: 24,
                    name: 'Report Development',
                    isSelectable: true
                },
                {
                    code: 'Salesforce',
                    jobFunctions: [],
                    id: 74,
                    parentId: null,
                    name: 'Salesforce',
                    isSelectable: false
                },
                {
                    code: 'SaleF-Dev',
                    jobFunctions: [],
                    id: 75,
                    parentId: 74,
                    name: 'Salesforce developer',
                    isSelectable: true
                },
                {
                    code: 'SAP-Dev-ABAP',
                    jobFunctions: [],
                    id: 62,
                    parentId: 61,
                    name: 'SAP ABAP developer',
                    isSelectable: true
                },
                {
                    code: 'SAP-BI',
                    jobFunctions: [],
                    id: 66,
                    parentId: null,
                    name: 'SAP BI',
                    isSelectable: false
                },
                {
                    code: 'SAP-BI-BO',
                    jobFunctions: [],
                    id: 68,
                    parentId: 66,
                    name: 'SAP BI (BO) Consultant',
                    isSelectable: true
                },
                {
                    code: 'SAP-BI-BW',
                    jobFunctions: [],
                    id: 67,
                    parentId: 66,
                    name: 'SAP BI (BW) Consultant',
                    isSelectable: true
                },
                {
                    code: 'SAP-Dev',
                    jobFunctions: [],
                    id: 61,
                    parentId: null,
                    name: 'SAP Development',
                    isSelectable: false
                },
                {
                    code: 'SAP-ERPC',
                    jobFunctions: [],
                    id: 79,
                    parentId: null,
                    name: 'SAP ERP',
                    isSelectable: false
                },
                {
                    code: 'SAPFICons',
                    jobFunctions: [],
                    id: 81,
                    parentId: 79,
                    name: 'SAP FI/CO consultant',
                    isSelectable: true
                },
                {
                    code: 'SAP-BI-HANA',
                    jobFunctions: [],
                    id: 69,
                    parentId: 66,
                    name: 'SAP HANA Consultant',
                    isSelectable: true
                },
                {
                    code: 'SAPHRCons',
                    jobFunctions: [],
                    id: 82,
                    parentId: 79,
                    name: 'SAP HR Consultant',
                    isSelectable: true
                },
                {
                    code: 'SAPLOCons',
                    jobFunctions: [],
                    id: 80,
                    parentId: 79,
                    name: 'SAP LO consultant',
                    isSelectable: true
                },
                {
                    code: 'SAP-Dev-Consult',
                    jobFunctions: [],
                    id: 63,
                    parentId: 61,
                    name: 'SAP Technical consultant',
                    isSelectable: true
                },
                {
                    code: 'SP',
                    jobFunctions: [
                        15
                    ],
                    id: 36,
                    parentId: null,
                    name: 'Sharepoint',
                    isSelectable: true
                },
                {
                    code: 'Sitecore',
                    jobFunctions: [
                        15
                    ],
                    id: 56,
                    parentId: null,
                    name: 'Sitecore',
                    isSelectable: false
                },
                {
                    code: 'Sitecore-Dev',
                    jobFunctions: [],
                    id: 57,
                    parentId: 56,
                    name: 'Sitecore developer',
                    isSelectable: true
                },
                {
                    code: 'SArchitect',
                    jobFunctions: [],
                    id: 71,
                    parentId: 70,
                    name: 'Solution Architect',
                    isSelectable: true
                },
                {
                    code: 'SA',
                    jobFunctions: [],
                    id: 70,
                    parentId: null,
                    name: 'Solution Architecture',
                    isSelectable: false
                },
                {
                    code: 'Design-UX',
                    jobFunctions: [],
                    id: 20,
                    parentId: 8,
                    name: 'User Experience Design',
                    isSelectable: true
                },
                {
                    code: 'UXD-UX',
                    jobFunctions: [],
                    id: 22,
                    parentId: 9,
                    name: 'UX Development',
                    isSelectable: true
                },
                {
                    code: 'XamDev',
                    jobFunctions: [],
                    id: 73,
                    parentId: 2,
                    name: 'Xamarin developer',
                    isSelectable: true
                }
            ]
        };

        return { questions, exercises, skillMatrix, interviewScriptData, templates, questionsByTemplateId, 
            exercisesByTemplateId, position };
    }
}
