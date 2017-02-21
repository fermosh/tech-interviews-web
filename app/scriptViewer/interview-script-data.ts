import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InterviewScriptData implements InMemoryDbService {

    createDb() {
        let interviewScriptData: any = [
            {
                hasContent: true,
                competencyId: 13,
                competencyName: '.Net',
                domain: 'Front-End Web Developemnt',
                level: {
                    id: 3,
                    name: 'L3',
                    description: 'Senior Software Engineer',
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
                        isSelectable: true
                    },
                    {
                        rootId: 472,
                        displayOrder: 35,
                        requiredSkillLevel: 0,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [],
                        id: 472,
                        parentId: null,
                        name: 'Soft skills',
                        isSelectable: true
                    },
                    {
                        rootId: 472,
                        displayOrder: 36,
                        requiredSkillLevel: 0,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [],
                        id: 473,
                        parentId: 472,
                        name: 'Communication',
                        isSelectable: true
                    },
                    {
                        rootId: 472,
                        displayOrder: 37,
                        requiredSkillLevel: 0,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [],
                        id: 474,
                        parentId: 473,
                        name: 'Basic communication skills',
                        isSelectable: true
                    },
                    {
                        rootId: 472,
                        displayOrder: 38,
                        requiredSkillLevel: 20,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Establishing contact/building relationship - Intermediate',
                                isRequired: true
                            },
                            {
                                name: 'Establishing contact/building relationship - Novice',
                                isRequired: true
                            },
                            {
                                name: 'Establishing contact/building relationship - Advanced',
                                isRequired: false
                            }
                        ],
                        id: 987,
                        parentId: 474,
                        name: 'Establishing contact/building relationship',
                        isSelectable: true
                    },
                    {
                        rootId: 472,
                        displayOrder: 39,
                        requiredSkillLevel: 20,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Clarity and argumentation - Intermediate',
                                isRequired: true
                            },
                            {
                                name: 'Clarity and argumentation - Novice',
                                isRequired: true
                            },
                            {
                                name: 'Clarity and argumentation - Advanced',
                                isRequired: false
                            }
                        ],
                        id: 552,
                        parentId: 474,
                        name: 'Clarity and argumentation',
                        isSelectable: true
                    },
                    {
                        rootId: 472,
                        displayOrder: 40,
                        requiredSkillLevel: 20,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Managing/leading the conversation - Intermediate',
                                isRequired: true
                            },
                            {
                                name: 'Managing/leading the conversation - Novice',
                                isRequired: true
                            },
                            {
                                name: 'Managing/leading the conversation - Advanced',
                                isRequired: false
                            }
                        ],
                        id: 553,
                        parentId: 474,
                        name: 'Managing/leading the conversation',
                        isSelectable: true
                    },
                    {
                        rootId: 472,
                        displayOrder: 41,
                        requiredSkillLevel: 20,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Effective group discussion - Intermediate',
                                isRequired: true
                            },
                            {
                                name: 'Effective group discussion - Novice',
                                isRequired: true
                            },
                            {
                                name: 'Effective group discussion - Advanced',
                                isRequired: false
                            }
                        ],
                        id: 554,
                        parentId: 474,
                        name: 'Effective group discussion',
                        isSelectable: true
                    },
                    {
                        rootId: 472,
                        displayOrder: 42,
                        requiredSkillLevel: 0,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [],
                        id: 475,
                        parentId: 473,
                        name: 'Specific communication skills',
                        isSelectable: true
                    },
                    {
                        rootId: 472,
                        displayOrder: 43,
                        requiredSkillLevel: 10,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Conflict management - Novice',
                                isRequired: true
                            },
                            {
                                name: 'Conflict management - Advanced',
                                isRequired: false
                            },
                            {
                                name: 'Conflict management - Intermediate',
                                isRequired: false
                            }
                        ],
                        id: 555,
                        parentId: 475,
                        name: 'Conflict management',
                        isSelectable: true
                    },
                    {
                        rootId: 472,
                        displayOrder: 45,
                        requiredSkillLevel: 20,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Business Correspondence - Intermediate',
                                isRequired: true
                            },
                            {
                                name: 'Business Correspondence - Novice',
                                isRequired: true
                            },
                            {
                                name: 'Business Correspondence - Advanced',
                                isRequired: false
                            }
                        ],
                        id: 557,
                        parentId: 475,
                        name: 'Business Correspondence (internal/external)',
                        isSelectable: true
                    },
                    {
                        rootId: 472,
                        displayOrder: 46,
                        requiredSkillLevel: 0,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [],
                        id: 476,
                        parentId: 472,
                        name: 'Presentation skills',
                        isSelectable: true
                    },
                    {
                        rootId: 472,
                        displayOrder: 48,
                        requiredSkillLevel: 10,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Art of speaking - Novice',
                                isRequired: true
                            },
                            {
                                name: 'Art of speaking - Advanced',
                                isRequired: false
                            },
                            {
                                name: 'Art of speaking - Intermediate',
                                isRequired: false
                            }
                        ],
                        id: 559,
                        parentId: 476,
                        name: 'Art of speaking',
                        isSelectable: true
                    },
                    {
                        rootId: 472,
                        displayOrder: 49,
                        requiredSkillLevel: 10,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Visual representation of information - Novice',
                                isRequired: true
                            },
                            {
                                name: 'Visual representation of information - Advanced',
                                isRequired: false
                            },
                            {
                                name: 'Visual representation of information - Intermediate',
                                isRequired: false
                            }
                        ],
                        id: 560,
                        parentId: 476,
                        name: 'Visual representation of information',
                        isSelectable: true
                    },
                    {
                        rootId: 472,
                        displayOrder: 50,
                        requiredSkillLevel: 10,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Content of speech - Novice',
                                isRequired: true
                            },
                            {
                                name: 'Content of speech - Advanced',
                                isRequired: false
                            },
                            {
                                name: 'Content of speech - Intermediate',
                                isRequired: false
                            }
                        ],
                        id: 561,
                        parentId: 476,
                        name: 'Content of speech',
                        isSelectable: true
                    },
                    {
                        rootId: 472,
                        displayOrder: 51,
                        requiredSkillLevel: 0,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [],
                        id: 477,
                        parentId: 472,
                        name: 'Self efficiency',
                        isSelectable: true
                    },
                    {
                        rootId: 472,
                        displayOrder: 52,
                        requiredSkillLevel: 20,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Adaptability - Intermediate',
                                isRequired: true
                            },
                            {
                                name: 'Adaptability - Novice',
                                isRequired: true
                            },
                            {
                                name: 'Adaptability - Advanced',
                                isRequired: false
                            }
                        ],
                        id: 562,
                        parentId: 477,
                        name: 'Adaptability',
                        isSelectable: true
                    },
                    {
                        rootId: 472,
                        displayOrder: 53,
                        requiredSkillLevel: 20,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Continuous learning - Intermediate',
                                isRequired: true
                            },
                            {
                                name: 'Continuous learning - Novice',
                                isRequired: true
                            },
                            {
                                name: 'Continuous learning - Advanced',
                                isRequired: false
                            }
                        ],
                        id: 563,
                        parentId: 477,
                        name: 'Continuous learning',
                        isSelectable: true
                    },
                    {
                        rootId: 472,
                        displayOrder: 54,
                        requiredSkillLevel: 20,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Stress tolerance - Intermediate',
                                isRequired: true
                            },
                            {
                                name: 'Stress tolerance - Novice',
                                isRequired: true
                            },
                            {
                                name: 'Stress tolerance - Advanced',
                                isRequired: false
                            }
                        ],
                        id: 564,
                        parentId: 477,
                        name: 'Stress tolerance',
                        isSelectable: true
                    },
                    {
                        rootId: 472,
                        displayOrder: 55,
                        requiredSkillLevel: 20,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Team work - Intermediate',
                                isRequired: true
                            },
                            {
                                name: 'Team work - Novice',
                                isRequired: true
                            },
                            {
                                name: 'Team work - Advanced',
                                isRequired: false
                            }
                        ],
                        id: 565,
                        parentId: 477,
                        name: 'Team work (team player)',
                        isSelectable: true
                    },
                    {
                        rootId: 472,
                        displayOrder: 56,
                        requiredSkillLevel: 20,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Self management - Intermediate',
                                isRequired: true
                            },
                            {
                                name: 'Self management - Novice',
                                isRequired: true
                            },
                            {
                                name: 'Self management - Advanced',
                                isRequired: false
                            }
                        ],
                        id: 566,
                        parentId: 477,
                        name: 'Self management (including time management)',
                        isSelectable: true
                    },
                    {
                        rootId: 472,
                        displayOrder: 57,
                        requiredSkillLevel: 10,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Decision making - Novice',
                                isRequired: true
                            },
                            {
                                name: 'Decision making - Advanced',
                                isRequired: false
                            },
                            {
                                name: 'Decision making - Intermediate',
                                isRequired: false
                            }
                        ],
                        id: 567,
                        parentId: 477,
                        name: 'Decision making',
                        isSelectable: true
                    },
                    {
                        rootId: 472,
                        displayOrder: 59,
                        requiredSkillLevel: 0,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [],
                        id: 481,
                        parentId: 472,
                        name: 'Business development',
                        isSelectable: true
                    },
                    {
                        rootId: 472,
                        displayOrder: 60,
                        requiredSkillLevel: 10,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Take responsibility and show ownership - Novice',
                                isRequired: true
                            },
                            {
                                name: 'Take responsibility and show ownership - Advanced',
                                isRequired: false
                            },
                            {
                                name: 'Take responsibility and show ownership - Intermediate',
                                isRequired: false
                            }
                        ],
                        id: 988,
                        parentId: 481,
                        name: 'Take responsibility and show ownership',
                        isSelectable: true
                    },
                    {
                        rootId: 472,
                        displayOrder: 62,
                        requiredSkillLevel: 10,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Customer focus - Novice',
                                isRequired: true
                            },
                            {
                                name: 'Customer focus - Advanced',
                                isRequired: false
                            },
                            {
                                name: 'Customer focus - Intermediate',
                                isRequired: false
                            }
                        ],
                        id: 580,
                        parentId: 481,
                        name: 'Customer focus',
                        isSelectable: true
                    },
                    {
                        rootId: 482,
                        displayOrder: 63,
                        requiredSkillLevel: 25,
                        userSkillLevel: 0,
                        levelSet: 2,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'A1 - Business English',
                                isRequired: true
                            },
                            {
                                name: 'A2 - Business English',
                                isRequired: true
                            },
                            {
                                name: 'B1 - Business English',
                                isRequired: true
                            },
                            {
                                name: 'B2 - Business English',
                                isRequired: true
                            },
                            {
                                name: 'C1 - Business English',
                                isRequired: false
                            },
                            {
                                name: 'C2 - Business English',
                                isRequired: false
                            }
                        ],
                        id: 482,
                        parentId: null,
                        name: 'English',
                        isSelectable: true
                    },
                    {
                        rootId: 482,
                        displayOrder: 64,
                        requiredSkillLevel: 25,
                        userSkillLevel: 0,
                        levelSet: 2,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [],
                        id: 483,
                        parentId: 482,
                        name: 'English Writing',
                        isSelectable: true
                    },
                    {
                        rootId: 482,
                        displayOrder: 65,
                        requiredSkillLevel: 25,
                        userSkillLevel: 0,
                        levelSet: 2,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Writing Work Correspondence A1',
                                isRequired: true
                            },
                            {
                                name: 'Writing Work Correspondence A2',
                                isRequired: true
                            },
                            {
                                name: 'Writing Work Correspondence B1',
                                isRequired: true
                            },
                            {
                                name: 'Writing Work Correspondence B2',
                                isRequired: true
                            },
                            {
                                name: 'Writing Work Correspondence C1',
                                isRequired: false
                            },
                            {
                                name: 'Writing Work Correspondence C2',
                                isRequired: false
                            }
                        ],
                        id: 581,
                        parentId: 483,
                        name: 'English Writing Correspondence',
                        isSelectable: true
                    },
                    {
                        rootId: 482,
                        displayOrder: 66,
                        requiredSkillLevel: 25,
                        userSkillLevel: 0,
                        levelSet: 2,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Writing Work Meetings and seminars A1',
                                isRequired: true
                            },
                            {
                                name: 'Writing Work Meetings and seminars A2',
                                isRequired: true
                            },
                            {
                                name: 'Writing Work Meetings and seminars B1',
                                isRequired: true
                            },
                            {
                                name: 'Writing Work Meetings and seminars B2',
                                isRequired: true
                            },
                            {
                                name: 'Writing Work Meetings and seminars C1',
                                isRequired: false
                            },
                            {
                                name: 'Writing Work Meetings and seminars C2',
                                isRequired: false
                            }
                        ],
                        id: 582,
                        parentId: 483,
                        name: 'English Writing Meetings and seminars',
                        isSelectable: true
                    },
                    {
                        rootId: 482,
                        displayOrder: 67,
                        requiredSkillLevel: 25,
                        userSkillLevel: 0,
                        levelSet: 2,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Writing Work Formal presentations and demonstrations A1',
                                isRequired: true
                            },
                            {
                                name: 'Writing Work Formal presentations and demonstrations A2',
                                isRequired: true
                            },
                            {
                                name: 'Writing Work Formal presentations and demonstrations B1',
                                isRequired: true
                            },
                            {
                                name: 'Writing Work Formal presentations and demonstrations B2',
                                isRequired: true
                            },
                            {
                                name: 'Writing Work Formal presentations and demonstrations C1',
                                isRequired: false
                            },
                            {
                                name: 'Writing Work Formal presentations and demonstrations C2',
                                isRequired: false
                            }
                        ],
                        id: 583,
                        parentId: 483,
                        name: 'English Writing Formal Presentations and Demonstrations',
                        isSelectable: true
                    },
                    {
                        rootId: 482,
                        displayOrder: 68,
                        requiredSkillLevel: 25,
                        userSkillLevel: 0,
                        levelSet: 2,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Writing Work Reports A1',
                                isRequired: true
                            },
                            {
                                name: 'Writing Work Reports A2',
                                isRequired: true
                            },
                            {
                                name: 'Writing Work Reports B1',
                                isRequired: true
                            },
                            {
                                name: 'Writing Work Reports B2',
                                isRequired: true
                            },
                            {
                                name: 'Writing Work Reports C1',
                                isRequired: false
                            },
                            {
                                name: 'Writing Work Reports C2',
                                isRequired: false
                            }
                        ],
                        id: 584,
                        parentId: 483,
                        name: 'English Writing Reports',
                        isSelectable: true
                    },
                    {
                        rootId: 482,
                        displayOrder: 69,
                        requiredSkillLevel: 25,
                        userSkillLevel: 0,
                        levelSet: 2,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Writing Work Documentation (job specific) A1',
                                isRequired: true
                            },
                            {
                                name: 'Writing Work Documentation (job specific) A2',
                                isRequired: true
                            },
                            {
                                name: 'Writing Work Documentation (job specific) B1',
                                isRequired: true
                            },
                            {
                                name: 'Writing Work Documentation (job specific) B2',
                                isRequired: true
                            },
                            {
                                name: 'Writing Work Documentation (job specific) C1',
                                isRequired: false
                            },
                            {
                                name: 'Writing Work Documentation (job specific) C2',
                                isRequired: false
                            }
                        ],
                        id: 585,
                        parentId: 483,
                        name: 'English Writing Documentation',
                        isSelectable: true
                    },
                    {
                        rootId: 482,
                        displayOrder: 70,
                        requiredSkillLevel: 25,
                        userSkillLevel: 0,
                        levelSet: 2,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Writing Work Promo materials A1',
                                isRequired: true
                            },
                            {
                                name: 'Writing Work Promo materials A2',
                                isRequired: true
                            },
                            {
                                name: 'Writing Work Promo materials B1',
                                isRequired: true
                            },
                            {
                                name: 'Writing Work Promo materials B2',
                                isRequired: true
                            },
                            {
                                name: 'Writing Work Promo materials C1',
                                isRequired: false
                            },
                            {
                                name: 'Writing Work Promo materials C2',
                                isRequired: false
                            }
                        ],
                        id: 586,
                        parentId: 483,
                        name: 'English Writing Promo materials',
                        isSelectable: true
                    },
                    {
                        rootId: 482,
                        displayOrder: 71,
                        requiredSkillLevel: 25,
                        userSkillLevel: 0,
                        levelSet: 2,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Writing Travel Business trips A1',
                                isRequired: true
                            },
                            {
                                name: 'Writing Travel Business trips A2',
                                isRequired: true
                            },
                            {
                                name: 'Writing Travel Business trips B1',
                                isRequired: true
                            },
                            {
                                name: 'Writing Travel Business trips B2',
                                isRequired: true
                            },
                            {
                                name: 'Writing Travel Business trips C1',
                                isRequired: false
                            },
                            {
                                name: 'Writing Travel Business trips C2',
                                isRequired: false
                            }
                        ],
                        id: 587,
                        parentId: 483,
                        name: 'English Writing Business Trips',
                        isSelectable: true
                    },
                    {
                        rootId: 482,
                        displayOrder: 72,
                        requiredSkillLevel: 25,
                        userSkillLevel: 0,
                        levelSet: 2,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Writing Study Talks, presentations, demonstrations, and workshops A1',
                                isRequired: true
                            },
                            {
                                name: 'Writing Study Talks, presentations, demonstrations, and workshops A2',
                                isRequired: true
                            },
                            {
                                name: 'Writing Study Talks, presentations, demonstrations, and workshops B1',
                                isRequired: true
                            },
                            {
                                name: 'Writing Study Talks, presentations, demonstrations, and workshops B2',
                                isRequired: true
                            },
                            {
                                name: 'Writing Study Talks, presentations, demonstrations, and workshops C1',
                                isRequired: false
                            },
                            {
                                name: 'Writing Study Talks, presentations, demonstrations, and workshops C2',
                                isRequired: false
                            }
                        ],
                        id: 588,
                        parentId: 483,
                        name: 'English Writing Talks, presentations, demonstrations, and workshops',
                        isSelectable: true
                    },
                    {
                        rootId: 482,
                        displayOrder: 73,
                        requiredSkillLevel: 25,
                        userSkillLevel: 0,
                        levelSet: 2,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Writing Study Textbooks, articles, computer database, dictionaries, etc. A1',
                                isRequired: true
                            },
                            {
                                name: 'Writing Study Textbooks, articles, computer database, dictionaries, etc. A2',
                                isRequired: true
                            },
                            {
                                name: 'Writing Study Textbooks, articles, computer database, dictionaries, etc. B1',
                                isRequired: true
                            },
                            {
                                name: 'Writing Study Textbooks, articles, computer database, dictionaries, etc. B2',
                                isRequired: true
                            },
                            {
                                name: 'Writing Study Textbooks, articles, computer database, dictionaries, etc. C1',
                                isRequired: false
                            },
                            {
                                name: 'Writing Study Textbooks, articles, computer database, dictionaries, etc. C2',
                                isRequired: false
                            }
                        ],
                        id: 589,
                        parentId: 483,
                        name: 'English Writing Textbooks, articles, computer database, dictionaries, etc.',
                        isSelectable: true
                    },
                    {
                        rootId: 482,
                        displayOrder: 74,
                        requiredSkillLevel: 25,
                        userSkillLevel: 0,
                        levelSet: 2,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [],
                        id: 484,
                        parentId: 482,
                        name: 'English Reading',
                        isSelectable: true
                    },
                    {
                        rootId: 482,
                        displayOrder: 75,
                        requiredSkillLevel: 25,
                        userSkillLevel: 0,
                        levelSet: 2,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Reading Work Correspondence A1',
                                isRequired: true
                            },
                            {
                                name: 'Reading Work Correspondence A2',
                                isRequired: true
                            },
                            {
                                name: 'Reading Work Correspondence B1',
                                isRequired: true
                            },
                            {
                                name: 'Reading Work Correspondence B2',
                                isRequired: true
                            },
                            {
                                name: 'Reading Work Correspondence C1',
                                isRequired: false
                            },
                            {
                                name: 'Reading Work Correspondence C2',
                                isRequired: false
                            }
                        ],
                        id: 590,
                        parentId: 484,
                        name: 'English Reading Correspondence',
                        isSelectable: true
                    },
                    {
                        rootId: 482,
                        displayOrder: 76,
                        requiredSkillLevel: 25,
                        userSkillLevel: 0,
                        levelSet: 2,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Reading Work Reports A1',
                                isRequired: true
                            },
                            {
                                name: 'Reading Work Reports A2',
                                isRequired: true
                            },
                            {
                                name: 'Reading Work Reports B1',
                                isRequired: true
                            },
                            {
                                name: 'Reading Work Reports B2',
                                isRequired: true
                            },
                            {
                                name: 'Reading Work Reports C1',
                                isRequired: false
                            },
                            {
                                name: 'Reading Work Reports C2',
                                isRequired: false
                            }
                        ],
                        id: 591,
                        parentId: 484,
                        name: 'English Reading Reports',
                        isSelectable: true
                    },
                    {
                        rootId: 482,
                        displayOrder: 77,
                        requiredSkillLevel: 25,
                        userSkillLevel: 0,
                        levelSet: 2,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Reading Work Professional literature A1',
                                isRequired: true
                            },
                            {
                                name: 'Reading Work Professional literature A2',
                                isRequired: true
                            },
                            {
                                name: 'Reading Work Professional literature B1',
                                isRequired: true
                            },
                            {
                                name: 'Reading Work Professional literature B2',
                                isRequired: true
                            },
                            {
                                name: 'Reading Work Professional literature C1',
                                isRequired: false
                            },
                            {
                                name: 'Reading Work Professional literature C2',
                                isRequired: false
                            }
                        ],
                        id: 592,
                        parentId: 484,
                        name: 'English Reading Professional literature',
                        isSelectable: true
                    },
                    {
                        rootId: 482,
                        displayOrder: 78,
                        requiredSkillLevel: 25,
                        userSkillLevel: 0,
                        levelSet: 2,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Reading Work Documentation and notices A1',
                                isRequired: true
                            },
                            {
                                name: 'Reading Work Documentation and notices A2',
                                isRequired: true
                            },
                            {
                                name: 'Reading Work Documentation and notices B1',
                                isRequired: true
                            },
                            {
                                name: 'Reading Work Documentation and notices B2',
                                isRequired: true
                            },
                            {
                                name: 'Reading Work Documentation and notices C1',
                                isRequired: false
                            },
                            {
                                name: 'Reading Work Documentation and notices C2',
                                isRequired: false
                            }
                        ],
                        id: 593,
                        parentId: 484,
                        name: 'English Reading Documentation and notices',
                        isSelectable: true
                    },
                    {
                        rootId: 482,
                        displayOrder: 79,
                        requiredSkillLevel: 25,
                        userSkillLevel: 0,
                        levelSet: 2,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Reading Travel Business Trips A1',
                                isRequired: true
                            },
                            {
                                name: 'Reading Travel Business Trips A2',
                                isRequired: true
                            },
                            {
                                name: 'Reading Travel Business Trips B1',
                                isRequired: true
                            },
                            {
                                name: 'Reading Travel Business Trips B2',
                                isRequired: true
                            },
                            {
                                name: 'Reading Travel Business Trips C1',
                                isRequired: false
                            },
                            {
                                name: 'Reading Travel Business Trips C2',
                                isRequired: false
                            }
                        ],
                        id: 594,
                        parentId: 484,
                        name: 'English Reading Business Trips',
                        isSelectable: true
                    },
                    {
                        rootId: 482,
                        displayOrder: 80,
                        requiredSkillLevel: 25,
                        userSkillLevel: 0,
                        levelSet: 2,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Reading Study Textbooks, articles, computer databases, libraries, presentations, handouts etc. A1',
                                isRequired: true
                            },
                            {
                                name: 'Reading Study Textbooks, articles, computer databases, libraries, presentations, handouts etc. A2',
                                isRequired: true
                            },
                            {
                                name: 'Reading Study Textbooks, articles, computer databases, libraries, presentations, handouts etc. B1',
                                isRequired: true
                            },
                            {
                                name: 'Reading Study Textbooks, articles, computer databases, libraries, presentations, handouts etc. B2',
                                isRequired: true
                            },
                            {
                                name: 'Reading Study Textbooks, articles, computer databases, libraries, presentations, handouts etc. C1',
                                isRequired: false
                            },
                            {
                                name: 'Reading Study Textbooks, articles, computer databases, libraries, presentations, handouts etc. C2',
                                isRequired: false
                            }
                        ],
                        id: 595,
                        parentId: 484,
                        name: 'English Reading Textbooks, articles, computer databases, libraries, presentations, handouts etc.',
                        isSelectable: true
                    },
                    {
                        rootId: 482,
                        displayOrder: 81,
                        requiredSkillLevel: 25,
                        userSkillLevel: 0,
                        levelSet: 2,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [],
                        id: 485,
                        parentId: 482,
                        name: 'English Listening&Speaking',
                        isSelectable: true
                    },
                    {
                        rootId: 482,
                        displayOrder: 82,
                        requiredSkillLevel: 25,
                        userSkillLevel: 0,
                        levelSet: 2,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Overall oral production A1',
                                isRequired: true
                            },
                            {
                                name: 'Overall oral production A2',
                                isRequired: true
                            },
                            {
                                name: 'Overall oral production B1',
                                isRequired: true
                            },
                            {
                                name: 'Overall oral production B2',
                                isRequired: true
                            },
                            {
                                name: 'Overall oral production C1',
                                isRequired: false
                            },
                            {
                                name: 'Overall oral production C2',
                                isRequired: false
                            }
                        ],
                        id: 596,
                        parentId: 485,
                        name: 'English Listening&Speaking Overall oral production',
                        isSelectable: true
                    },
                    {
                        rootId: 482,
                        displayOrder: 83,
                        requiredSkillLevel: 25,
                        userSkillLevel: 0,
                        levelSet: 2,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Overall speech structure A1',
                                isRequired: true
                            },
                            {
                                name: 'Overall speech structure A2',
                                isRequired: true
                            },
                            {
                                name: 'Overall speech structure B1',
                                isRequired: true
                            },
                            {
                                name: 'Overall speech structure B2',
                                isRequired: true
                            },
                            {
                                name: 'Overall speech structure C1',
                                isRequired: false
                            },
                            {
                                name: 'Overall speech structure C2',
                                isRequired: false
                            }
                        ],
                        id: 597,
                        parentId: 485,
                        name: 'English Listening&Speaking Overall speech structure',
                        isSelectable: true
                    },
                    {
                        rootId: 482,
                        displayOrder: 84,
                        requiredSkillLevel: 25,
                        userSkillLevel: 0,
                        levelSet: 2,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Overall listening comprehension A1',
                                isRequired: true
                            },
                            {
                                name: 'Overall listening comprehension A2',
                                isRequired: true
                            },
                            {
                                name: 'Overall listening comprehension B1',
                                isRequired: true
                            },
                            {
                                name: 'Overall listening comprehension B2',
                                isRequired: true
                            },
                            {
                                name: 'Overall listening comprehension C1',
                                isRequired: false
                            },
                            {
                                name: 'Overall listening comprehension C2',
                                isRequired: false
                            }
                        ],
                        id: 598,
                        parentId: 485,
                        name: 'English Listening&Speaking Overall listening comprehension',
                        isSelectable: true
                    },
                    {
                        rootId: 482,
                        displayOrder: 85,
                        requiredSkillLevel: 25,
                        userSkillLevel: 0,
                        levelSet: 2,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Compensation for lexical gaps A1',
                                isRequired: true
                            },
                            {
                                name: 'Compensation for lexical gaps A2',
                                isRequired: true
                            },
                            {
                                name: 'Compensation for lexical gaps B1',
                                isRequired: true
                            },
                            {
                                name: 'Compensation for lexical gaps B2',
                                isRequired: true
                            },
                            {
                                name: 'Compensation for lexical gaps C1',
                                isRequired: false
                            },
                            {
                                name: 'Compensation for lexical gaps C2',
                                isRequired: false
                            }
                        ],
                        id: 599,
                        parentId: 485,
                        name: 'English Listening&Speaking Compensation for lexical gaps',
                        isSelectable: true
                    },
                    {
                        rootId: 482,
                        displayOrder: 86,
                        requiredSkillLevel: 25,
                        userSkillLevel: 0,
                        levelSet: 2,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Repair in interactive communication A1',
                                isRequired: true
                            },
                            {
                                name: 'Repair in interactive communication A2',
                                isRequired: true
                            },
                            {
                                name: 'Repair in interactive communication B1',
                                isRequired: true
                            },
                            {
                                name: 'Repair in interactive communication B2',
                                isRequired: true
                            },
                            {
                                name: 'Repair in interactive communication C1',
                                isRequired: false
                            },
                            {
                                name: 'Repair in interactive communication C2',
                                isRequired: false
                            }
                        ],
                        id: 600,
                        parentId: 485,
                        name: 'English Listening&Speaking Repair in interactive communication',
                        isSelectable: true
                    },
                    {
                        rootId: 482,
                        displayOrder: 87,
                        requiredSkillLevel: 25,
                        userSkillLevel: 0,
                        levelSet: 2,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Listening&Speaking Work Meetings A1',
                                isRequired: true
                            },
                            {
                                name: 'Listening&Speaking Work Meetings A2',
                                isRequired: true
                            },
                            {
                                name: 'Listening&Speaking Work Meetings B1',
                                isRequired: true
                            },
                            {
                                name: 'Listening&Speaking Work Meetings B2',
                                isRequired: true
                            },
                            {
                                name: 'Listening&Speaking Work Meetings C1',
                                isRequired: false
                            },
                            {
                                name: 'Listening&Speaking Work Meetings C2',
                                isRequired: false
                            }
                        ],
                        id: 601,
                        parentId: 485,
                        name: 'English Listening&Speaking Meetings',
                        isSelectable: true
                    },
                    {
                        rootId: 482,
                        displayOrder: 88,
                        requiredSkillLevel: 25,
                        userSkillLevel: 0,
                        levelSet: 2,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Listening&Speaking Work Teleconferencing A1',
                                isRequired: true
                            },
                            {
                                name: 'Listening&Speaking Work Teleconferencing A2',
                                isRequired: true
                            },
                            {
                                name: 'Listening&Speaking Work Teleconferencing B1',
                                isRequired: true
                            },
                            {
                                name: 'Listening&Speaking Work Teleconferencing B2',
                                isRequired: true
                            },
                            {
                                name: 'Listening&Speaking Work Teleconferencing C1',
                                isRequired: false
                            },
                            {
                                name: 'Listening&Speaking Work Teleconferencing C2',
                                isRequired: false
                            }
                        ],
                        id: 602,
                        parentId: 485,
                        name: 'English Listening&Speaking Teleconferencing',
                        isSelectable: true
                    },
                    {
                        rootId: 482,
                        displayOrder: 89,
                        requiredSkillLevel: 25,
                        userSkillLevel: 0,
                        levelSet: 2,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Listening&Speaking Work Interviews  B1',
                                isRequired: true
                            },
                            {
                                name: 'Listening&Speaking Work Interviews A1',
                                isRequired: true
                            },
                            {
                                name: 'Listening&Speaking Work Interviews A2',
                                isRequired: true
                            },
                            {
                                name: 'Listening&Speaking Work Interviews B2',
                                isRequired: true
                            },
                            {
                                name: 'Listening&Speaking Work Interviews C1',
                                isRequired: false
                            },
                            {
                                name: 'Listening&Speaking Work Interviews C2',
                                isRequired: false
                            }
                        ],
                        id: 603,
                        parentId: 485,
                        name: 'English Listening&Speaking Interviews',
                        isSelectable: true
                    },
                    {
                        rootId: 482,
                        displayOrder: 90,
                        requiredSkillLevel: 25,
                        userSkillLevel: 0,
                        levelSet: 2,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Listening&Speaking Work Formal presentations and demonstrations A1',
                                isRequired: true
                            },
                            {
                                name: 'Listening&Speaking Work Formal presentations and demonstrations A2',
                                isRequired: true
                            },
                            {
                                name: 'Listening&Speaking Work Formal presentations and demonstrations B1',
                                isRequired: true
                            },
                            {
                                name: 'Listening&Speaking Work Formal presentations and demonstrations B2',
                                isRequired: true
                            },
                            {
                                name: 'Listening&Speaking Work Formal presentations and demonstrations C1',
                                isRequired: false
                            },
                            {
                                name: 'Listening&Speaking Work Formal presentations and demonstrations C2',
                                isRequired: false
                            }
                        ],
                        id: 604,
                        parentId: 485,
                        name: 'English Listening&Speaking Formal presentations and demonstrations',
                        isSelectable: true
                    },
                    {
                        rootId: 482,
                        displayOrder: 91,
                        requiredSkillLevel: 25,
                        userSkillLevel: 0,
                        levelSet: 2,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Listening&Speaking Social Life Socialising A1',
                                isRequired: true
                            },
                            {
                                name: 'Listening&Speaking Social Life Socialising A2',
                                isRequired: true
                            },
                            {
                                name: 'Listening&Speaking Social Life Socialising B1',
                                isRequired: true
                            },
                            {
                                name: 'Listening&Speaking Social Life Socialising B2',
                                isRequired: true
                            },
                            {
                                name: 'Listening&Speaking Social Life Socialising C1',
                                isRequired: false
                            },
                            {
                                name: 'Listening&Speaking Social Life Socialising C2',
                                isRequired: false
                            }
                        ],
                        id: 605,
                        parentId: 485,
                        name: 'English Listening&Speaking  Socialising',
                        isSelectable: true
                    },
                    {
                        rootId: 482,
                        displayOrder: 92,
                        requiredSkillLevel: 25,
                        userSkillLevel: 0,
                        levelSet: 2,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Listening&Speaking Travel Business Trips A1',
                                isRequired: true
                            },
                            {
                                name: 'Listening&Speaking Travel Business Trips A2',
                                isRequired: true
                            },
                            {
                                name: 'Listening&Speaking Travel Business Trips B1',
                                isRequired: true
                            },
                            {
                                name: 'Listening&Speaking Travel Business Trips B2',
                                isRequired: true
                            },
                            {
                                name: 'Listening&Speaking Travel Business Trips C1',
                                isRequired: false
                            },
                            {
                                name: 'Listening&Speaking Travel Business Trips C2',
                                isRequired: false
                            }
                        ],
                        id: 606,
                        parentId: 485,
                        name: 'English Listening&Speaking Business Trips',
                        isSelectable: true
                    },
                    {
                        rootId: 482,
                        displayOrder: 93,
                        requiredSkillLevel: 25,
                        userSkillLevel: 0,
                        levelSet: 2,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Listening&Speaking Study Talks, tutorials, workshops, presentations and demonstrations A1',
                                isRequired: true
                            },
                            {
                                name: 'Listening&Speaking Study Talks, tutorials, workshops, presentations and demonstrations A2',
                                isRequired: true
                            },
                            {
                                name: 'Listening&Speaking Study Talks, tutorials, workshops, presentations and demonstrations B1',
                                isRequired: true
                            },
                            {
                                name: 'Listening&Speaking Study Talks, tutorials, workshops, presentations and demonstrations B2',
                                isRequired: true
                            },
                            {
                                name: 'Listening&Speaking Study Talks, tutorials, workshops, presentations and demonstrations C1',
                                isRequired: false
                            },
                            {
                                name: 'Listening&Speaking Study Talks, tutorials, workshops, presentations and demonstrations C2',
                                isRequired: false
                            }
                        ],
                        id: 607,
                        parentId: 485,
                        name: 'English Listening&Speaking Talks, tutorials, workshops, presentations and demonstrations',
                        isSelectable: true
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
                        isSelectable: true
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
                        isSelectable: true
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
                        isSelectable: true
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
                        isSelectable: true
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
                        isSelectable: true
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
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 113,
                        requiredSkillLevel: 0,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [],
                        id: 976,
                        parentId: 973,
                        name: 'Resource Management',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 114,
                        requiredSkillLevel: 0,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [],
                        id: 480,
                        parentId: 976,
                        name: 'People development',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 116,
                        requiredSkillLevel: 20,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Emotional intelligence - Intermediate',
                                isRequired: true
                            },
                            {
                                name: 'Emotional intelligence - Novice',
                                isRequired: true
                            },
                            {
                                name: 'Emotional intelligence - Advanced',
                                isRequired: false
                            }
                        ],
                        id: 576,
                        parentId: 480,
                        name: 'Emotional intelligence',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 117,
                        requiredSkillLevel: 10,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Motivation/engagement - Novice',
                                isRequired: true
                            },
                            {
                                name: 'Motivation/engagement - Advanced',
                                isRequired: false
                            },
                            {
                                name: 'Motivation/engagement - Intermediate',
                                isRequired: false
                            }
                        ],
                        id: 577,
                        parentId: 480,
                        name: 'Motivation/engagement',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 118,
                        requiredSkillLevel: 20,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Mentoring/Coaching - Intermediate',
                                isRequired: true
                            },
                            {
                                name: 'Mentoring/Coaching - Novice',
                                isRequired: true
                            },
                            {
                                name: 'Mentoring/Coaching - Advanced',
                                isRequired: false
                            }
                        ],
                        id: 578,
                        parentId: 480,
                        name: 'Mentoring/Coaching',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 134,
                        requiredSkillLevel: 0,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [],
                        id: 979,
                        parentId: 7,
                        name: 'Software Craftmanship and Development Process',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 135,
                        requiredSkillLevel: 0,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [],
                        id: 1127,
                        parentId: 979,
                        name: 'Software Engineering Practices',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 136,
                        requiredSkillLevel: 20,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
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
                        id: 1206,
                        parentId: 1127,
                        name: 'Code Standards',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 137,
                        requiredSkillLevel: 30,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Code Review Best practices',
                                isRequired: true
                            },
                            {
                                name: 'Code Review Fundamentals',
                                isRequired: true
                            },
                            {
                                name: 'Code Review Process implementation',
                                isRequired: true
                            },
                            {
                                name: 'Code Review Tools',
                                isRequired: true
                            },
                            {
                                name: 'Code Review tools configuration',
                                isRequired: false
                            }
                        ],
                        id: 1141,
                        parentId: 1127,
                        name: 'Code Review Process',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 138,
                        requiredSkillLevel: 30,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Branching strategies',
                                isRequired: true
                            },
                            {
                                name: 'Common operations with Version Control',
                                isRequired: true
                            },
                            {
                                name: 'Configuration Management Fundamentals',
                                isRequired: true
                            },
                            {
                                name: 'Release Repository',
                                isRequired: true
                            },
                            {
                                name: 'Release Strategy Implementation',
                                isRequired: true
                            },
                            {
                                name: 'Version Control Basics',
                                isRequired: true
                            },
                            {
                                name: 'Version Control Systems',
                                isRequired: true
                            },
                            {
                                name: 'Configuration Management Automation',
                                isRequired: false
                            }
                        ],
                        id: 1142,
                        parentId: 1127,
                        name: 'Release Strategy',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 139,
                        requiredSkillLevel: 20,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Build Tools usage',
                                isRequired: true
                            },
                            {
                                name: 'CI Tools',
                                isRequired: true
                            },
                            {
                                name: 'Continuous Integration Fundamentals',
                                isRequired: true
                            },
                            {
                                name: 'Continuous Integration process usage',
                                isRequired: true
                            },
                            {
                                name: 'Build Tools enhancements',
                                isRequired: false
                            },
                            {
                                name: 'Continuous Integration process implementation',
                                isRequired: false
                            }
                        ],
                        id: 1143,
                        parentId: 1127,
                        name: 'Continuous Integration',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 140,
                        requiredSkillLevel: 10,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Continuous Delivery Fundamentals',
                                isRequired: true
                            },
                            {
                                name: 'Build CI/CD pipeline',
                                isRequired: false
                            },
                            {
                                name: 'Continuous Delivery Tools',
                                isRequired: false
                            }
                        ],
                        id: 1144,
                        parentId: 1127,
                        name: 'Continuous Delivery & Deployment',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 141,
                        requiredSkillLevel: 20,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Mocking Libraries',
                                isRequired: true
                            },
                            {
                                name: 'TDD and BDD approaches - Novice',
                                isRequired: true
                            },
                            {
                                name: 'Test Doubles',
                                isRequired: true
                            },
                            {
                                name: 'Testing Pyramid',
                                isRequired: true
                            },
                            {
                                name: 'Unit testing basics',
                                isRequired: true
                            },
                            {
                                name: 'Code Coverage',
                                isRequired: false
                            },
                            {
                                name: 'Legaсy systems testing',
                                isRequired: false
                            },
                            {
                                name: 'Mutation Testing',
                                isRequired: false
                            },
                            {
                                name: 'TDD and BDD approaches - Advanced',
                                isRequired: false
                            }
                        ],
                        id: 1207,
                        parentId: 1127,
                        name: 'Unit and API Testing (White box)',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 142,
                        requiredSkillLevel: 0,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [],
                        id: 1128,
                        parentId: 1127,
                        name: 'Troubleshooting/monitoring aspects',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 143,
                        requiredSkillLevel: 20,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Logging fundamentals',
                                isRequired: true
                            },
                            {
                                name: 'Logging implementation',
                                isRequired: true
                            }
                        ],
                        id: 1146,
                        parentId: 1128,
                        name: 'Logging',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 144,
                        requiredSkillLevel: 10,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Monitoring fundamentals',
                                isRequired: true
                            },
                            {
                                name: 'Monitoring implementation',
                                isRequired: false
                            }
                        ],
                        id: 1147,
                        parentId: 1128,
                        name: 'Health Check',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 145,
                        requiredSkillLevel: 20,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Advanced debugging',
                                isRequired: true
                            },
                            {
                                name: 'Debugging',
                                isRequired: true
                            },
                            {
                                name: 'Profiling',
                                isRequired: false
                            }
                        ],
                        id: 1148,
                        parentId: 1128,
                        name: 'Troubleshooting',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 150,
                        requiredSkillLevel: 20,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Software development process - Intermediate',
                                isRequired: true
                            },
                            {
                                name: 'Software development process - Novice',
                                isRequired: true
                            }
                        ],
                        id: 55,
                        parentId: 979,
                        name: 'Software Development Processes',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 151,
                        requiredSkillLevel: 10,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Estimations concepts',
                                isRequired: true
                            }
                        ],
                        id: 608,
                        parentId: 55,
                        name: 'Estimations',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 152,
                        requiredSkillLevel: 0,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [],
                        id: 1129,
                        parentId: 979,
                        name: 'Software Development Methodology',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 153,
                        requiredSkillLevel: 20,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
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
                        id: 5,
                        parentId: 1129,
                        name: 'Scrum/Agile',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 155,
                        requiredSkillLevel: 20,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Continuous Integration',
                                isRequired: true
                            },
                            {
                                name: 'Development lifecycle',
                                isRequired: true
                            },
                            {
                                name: 'Planning game',
                                isRequired: true
                            },
                            {
                                name: 'Refactoring',
                                isRequired: true
                            },
                            {
                                name: 'RUP concepts',
                                isRequired: true
                            },
                            {
                                name: 'RUP in practice',
                                isRequired: true
                            },
                            {
                                name: 'Test driven development',
                                isRequired: true
                            },
                            {
                                name: 'Waterfall concepts',
                                isRequired: true
                            },
                            {
                                name: 'Whole team, Onsite customer',
                                isRequired: true
                            },
                            {
                                name: 'XP concepts',
                                isRequired: true
                            },
                            {
                                name: 'Pair programming',
                                isRequired: false
                            }
                        ],
                        id: 113,
                        parentId: 1129,
                        name: 'RUP/Waterfall/XP',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 156,
                        requiredSkillLevel: 30,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Advanced computer science',
                                isRequired: true
                            },
                            {
                                name: 'Automation concepts',
                                isRequired: true
                            },
                            {
                                name: 'Clean Code',
                                isRequired: true
                            },
                            {
                                name: 'Computer science',
                                isRequired: true
                            },
                            {
                                name: 'Computer science fundamentals',
                                isRequired: true
                            },
                            {
                                name: 'Computers and networks',
                                isRequired: true
                            },
                            {
                                name: 'Cryptography',
                                isRequired: true
                            },
                            {
                                name: 'Trees',
                                isRequired: true
                            },
                            {
                                name: 'Version control principles',
                                isRequired: true
                            },
                            {
                                name: 'Xml concepts',
                                isRequired: true
                            }
                        ],
                        id: 114,
                        parentId: 7,
                        name: 'Base IT knowledge',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 166,
                        requiredSkillLevel: 20,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Aspect-oriented programming',
                                isRequired: true
                            },
                            {
                                name: 'Domain-driven design',
                                isRequired: true
                            },
                            {
                                name: 'Layered architecture',
                                isRequired: true
                            },
                            {
                                name: 'Patterns',
                                isRequired: true
                            },
                            {
                                name: 'SOA',
                                isRequired: true
                            },
                            {
                                name: 'Synthesis of solutions',
                                isRequired: true
                            },
                            {
                                name: 'Typically architecture bugs',
                                isRequired: true
                            },
                            {
                                name: 'UML Basics for Developers',
                                isRequired: true
                            },
                            {
                                name: 'Functional programming',
                                isRequired: false
                            },
                            {
                                name: 'Message-oriented architecture',
                                isRequired: false
                            },
                            {
                                name: 'Metaprogramming',
                                isRequired: false
                            }
                        ],
                        id: 9,
                        parentId: 7,
                        name: 'Architecture knowledge',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 176,
                        requiredSkillLevel: 0,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [],
                        id: 56,
                        parentId: 7,
                        name: 'Development',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 191,
                        requiredSkillLevel: 30,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
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
                        id: 57,
                        parentId: 56,
                        name: '.NET Development',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 192,
                        requiredSkillLevel: 20,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Analyzing and profiling tools',
                                isRequired: true
                            },
                            {
                                name: 'Cross-browser concepts',
                                isRequired: true
                            },
                            {
                                name: 'HTML/CSS fundamentals',
                                isRequired: true
                            },
                            {
                                name: 'HTTP fundamentals',
                                isRequired: true
                            },
                            {
                                name: 'IIS fundamentals',
                                isRequired: true
                            },
                            {
                                name: 'Javascript fundamentals',
                                isRequired: true
                            },
                            {
                                name: 'Javascript in practice',
                                isRequired: true
                            },
                            {
                                name: 'REST',
                                isRequired: true
                            },
                            {
                                name: 'Web concepts',
                                isRequired: true
                            },
                            {
                                name: 'Web-design concepts (HCI for web)',
                                isRequired: true
                            },
                            {
                                name: 'Mobile web development',
                                isRequired: false
                            },
                            {
                                name: 'Scaling of web applications',
                                isRequired: false
                            }
                        ],
                        id: 58,
                        parentId: 57,
                        name: '.NET Web Development',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 193,
                        requiredSkillLevel: 20,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'ASP.NET Debugging Overview',
                                isRequired: true
                            },
                            {
                                name: 'ASP.NET Internals',
                                isRequired: true
                            },
                            {
                                name: 'ASP.NET Web Forms fundamentals',
                                isRequired: true
                            },
                            {
                                name: 'ASP.NET Web Forms states',
                                isRequired: true
                            },
                            {
                                name: 'Development of user controls',
                                isRequired: true
                            },
                            {
                                name: 'Personalization in ASP.NET Web Forms',
                                isRequired: true
                            },
                            {
                                name: 'Provider Model',
                                isRequired: true
                            },
                            {
                                name: 'Security in ASP.NET Web Forms',
                                isRequired: true
                            },
                            {
                                name: 'Server Controls in ASP.NET Web Forms',
                                isRequired: true
                            },
                            {
                                name: 'View Pages and Navigation',
                                isRequired: true
                            },
                            {
                                name: 'ASP.NET Advanced Topics',
                                isRequired: false
                            },
                            {
                                name: 'ASP.NET Performance',
                                isRequired: false
                            },
                            {
                                name: 'Extensibility of ASP.NET Web Forms',
                                isRequired: false
                            },
                            {
                                name: 'Implementing async pages',
                                isRequired: false
                            }
                        ],
                        id: 116,
                        parentId: 58,
                        name: 'ASP.NET Webforms Development',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 194,
                        requiredSkillLevel: 20,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'ASP.NET MVC Structure',
                                isRequired: true
                            },
                            {
                                name: 'Controller layer',
                                isRequired: true
                            },
                            {
                                name: 'Hosting of MVC applications',
                                isRequired: true
                            },
                            {
                                name: 'MVC principles',
                                isRequired: true
                            },
                            {
                                name: 'MVC Testing',
                                isRequired: true
                            },
                            {
                                name: 'Request handling',
                                isRequired: true
                            },
                            {
                                name: 'Security in ASP.NET MVC',
                                isRequired: true
                            },
                            {
                                name: 'View layer',
                                isRequired: true
                            },
                            {
                                name: 'View Layer customisation',
                                isRequired: true
                            },
                            {
                                name: 'View Model customisation',
                                isRequired: true
                            },
                            {
                                name: 'Advanced Routing',
                                isRequired: false
                            },
                            {
                                name: 'MVC Advanced Topics',
                                isRequired: false
                            },
                            {
                                name: 'Real-Time Async Communication',
                                isRequired: false
                            }
                        ],
                        id: 117,
                        parentId: 58,
                        name: 'ASP.NET MVC Development',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 199,
                        requiredSkillLevel: 30,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Caching concepts',
                                isRequired: true
                            },
                            {
                                name: 'Compiler services',
                                isRequired: true
                            },
                            {
                                name: 'Custom serialization',
                                isRequired: true
                            },
                            {
                                name: 'Logging concepts',
                                isRequired: true
                            },
                            {
                                name: 'Message queues',
                                isRequired: true
                            },
                            {
                                name: 'Serialization concepts',
                                isRequired: true
                            },
                            {
                                name: 'Service fundamentals',
                                isRequired: true
                            },
                            {
                                name: 'Windows services',
                                isRequired: true
                            },
                            {
                                name: 'Working with XML',
                                isRequired: true
                            },
                            {
                                name: 'Xquery',
                                isRequired: true
                            },
                            {
                                name: 'XSLT transformations',
                                isRequired: true
                            }
                        ],
                        id: 59,
                        parentId: 57,
                        name: '.NET Back-End Development',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 200,
                        requiredSkillLevel: 30,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Advanced Concepts',
                                isRequired: true
                            },
                            {
                                name: 'Advanced Interoperability\\Integration',
                                isRequired: true
                            },
                            {
                                name: 'Advanced WCF security',
                                isRequired: true
                            },
                            {
                                name: 'Data Transfer and Serialization',
                                isRequired: true
                            },
                            {
                                name: 'Designing and Implementing Services',
                                isRequired: true
                            },
                            {
                                name: 'Designing and Implementing Services Advanced',
                                isRequired: true
                            },
                            {
                                name: 'Designing and Implementing Services Fundamentals',
                                isRequired: true
                            },
                            {
                                name: 'Diagnostics and Exceptions Handling',
                                isRequired: true
                            },
                            {
                                name: 'Extensibility',
                                isRequired: true
                            },
                            {
                                name: 'Extensibility Advanced',
                                isRequired: true
                            },
                            {
                                name: 'General Concepts',
                                isRequired: true
                            },
                            {
                                name: 'Interoperability\\Integration',
                                isRequired: true
                            },
                            {
                                name: 'Performance',
                                isRequired: true
                            },
                            {
                                name: 'Security',
                                isRequired: true
                            },
                            {
                                name: 'Security Basics',
                                isRequired: true
                            },
                            {
                                name: 'WCF Configuration',
                                isRequired: true
                            },
                            {
                                name: 'WCF Fundamentals',
                                isRequired: true
                            },
                            {
                                name: 'WCF Tools',
                                isRequired: true
                            }
                        ],
                        id: 122,
                        parentId: 59,
                        name: '.NET Web-Services and WCF Development',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 201,
                        requiredSkillLevel: 30,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'WebAPI Advanced',
                                isRequired: true
                            },
                            {
                                name: 'WebAPI and Odata',
                                isRequired: true
                            },
                            {
                                name: 'WebAPI Fundamentals',
                                isRequired: true
                            },
                            {
                                name: 'WebAPI Hosting',
                                isRequired: true
                            },
                            {
                                name: 'WebAPI intermediate',
                                isRequired: true
                            }
                        ],
                        id: 123,
                        parentId: 59,
                        name: '.NET RESTful services and WebAPI',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 202,
                        requiredSkillLevel: 30,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'ADO.NET fundamentals',
                                isRequired: true
                            },
                            {
                                name: 'Advanced ADO.NET',
                                isRequired: true
                            },
                            {
                                name: 'Database scripting',
                                isRequired: true
                            },
                            {
                                name: 'Entity Framework advanced',
                                isRequired: true
                            },
                            {
                                name: 'NHibernate advanced',
                                isRequired: true
                            },
                            {
                                name: 'ORM fundamentals (Entity Framework)',
                                isRequired: true
                            },
                            {
                                name: 'Overview of micro ORMs',
                                isRequired: true
                            },
                            {
                                name: 'SQL fundamentals',
                                isRequired: true
                            }
                        ],
                        id: 124,
                        parentId: 59,
                        name: '.NET Data Access Development',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 203,
                        requiredSkillLevel: 20,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [],
                        id: 60,
                        parentId: 59,
                        name: 'Windows Azure .NET SDK',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 204,
                        requiredSkillLevel: 30,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Azure Compute Emulator',
                                isRequired: true
                            }
                        ],
                        id: 125,
                        parentId: 60,
                        name: 'Azure Cloud Services',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 205,
                        requiredSkillLevel: 20,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Azure Blob storage',
                                isRequired: true
                            },
                            {
                                name: 'Azure No-SQL Tables',
                                isRequired: true
                            },
                            {
                                name: 'Azure Queues',
                                isRequired: true
                            },
                            {
                                name: 'Azure Storage Services Workflow',
                                isRequired: true
                            },
                            {
                                name: 'Azure Storage Emulator',
                                isRequired: false
                            }
                        ],
                        id: 126,
                        parentId: 60,
                        name: 'Azure Storage Services',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 206,
                        requiredSkillLevel: 20,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Azure Service Bus Publish/Subscriber',
                                isRequired: true
                            },
                            {
                                name: 'Azure Service Bus Queues',
                                isRequired: true
                            },
                            {
                                name: 'Azure Service Bus Subscriptions',
                                isRequired: true
                            },
                            {
                                name: 'Azure Service Bus Topics',
                                isRequired: true
                            },
                            {
                                name: 'Azure Service Bus vs. Azure Queue',
                                isRequired: true
                            },
                            {
                                name: 'Azure Service Bus workflow',
                                isRequired: true
                            },
                            {
                                name: 'Azure Service Bus Relay',
                                isRequired: false
                            }
                        ],
                        id: 61,
                        parentId: 60,
                        name: 'Azure Service Bus',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 208,
                        requiredSkillLevel: 20,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Azure caching configuration models',
                                isRequired: true
                            },
                            {
                                name: 'Azure caching workflow',
                                isRequired: true
                            },
                            {
                                name: 'Azure shared caching service',
                                isRequired: true
                            },
                            {
                                name: 'Microsoft CDN',
                                isRequired: true
                            }
                        ],
                        id: 128,
                        parentId: 60,
                        name: 'Azure Caching',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 209,
                        requiredSkillLevel: 10,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Azure ACS Federation Provider concepts',
                                isRequired: true
                            },
                            {
                                name: 'Azure ACS Identity Provider concepts',
                                isRequired: true
                            },
                            {
                                name: 'Azure ACS Token concepts',
                                isRequired: true
                            },
                            {
                                name: 'Azure ACS Authentication protocols',
                                isRequired: false
                            },
                            {
                                name: 'Azure ACS Rule engine',
                                isRequired: false
                            },
                            {
                                name: 'Azure ACS Token lifecycle',
                                isRequired: false
                            }
                        ],
                        id: 62,
                        parentId: 60,
                        name: 'Azure Access Control Service',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 210,
                        requiredSkillLevel: 10,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Azure Active Directory integration with ACS',
                                isRequired: true
                            },
                            {
                                name: 'Active Directory Federation Services',
                                isRequired: false
                            },
                            {
                                name: 'Azure AD authentication protocols',
                                isRequired: false
                            },
                            {
                                name: 'Single sign-on/out concepts with Azure AD',
                                isRequired: false
                            }
                        ],
                        id: 129,
                        parentId: 62,
                        name: 'Azure Active Directory',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 212,
                        requiredSkillLevel: 10,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Azure Media Services assets',
                                isRequired: true
                            },
                            {
                                name: 'Azure Media Services jobs',
                                isRequired: true
                            },
                            {
                                name: 'Azure Media Services presets',
                                isRequired: true
                            },
                            {
                                name: 'Azure Media Services storage',
                                isRequired: true
                            },
                            {
                                name: 'Azure Media Services tasks',
                                isRequired: true
                            },
                            {
                                name: 'Azure Media Services context',
                                isRequired: false
                            }
                        ],
                        id: 131,
                        parentId: 60,
                        name: 'Azure Media Services',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 257,
                        requiredSkillLevel: 20,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'AJAX',
                                isRequired: true
                            },
                            {
                                name: 'Cross-browser scripting',
                                isRequired: true
                            },
                            {
                                name: 'CSS pre-processors',
                                isRequired: true
                            },
                            {
                                name: 'Custom JS frameworks',
                                isRequired: true
                            },
                            {
                                name: 'JavaScript superset Languages',
                                isRequired: true
                            },
                            {
                                name: 'jQuery fundamentals',
                                isRequired: true
                            },
                            {
                                name: 'jQueryUI fundamentals',
                                isRequired: true
                            },
                            {
                                name: 'JS Core',
                                isRequired: true
                            },
                            {
                                name: 'Json',
                                isRequired: true
                            },
                            {
                                name: 'Localization and globalization',
                                isRequired: true
                            },
                            {
                                name: 'OOP in JS',
                                isRequired: true
                            },
                            {
                                name: 'Advanced AJAX',
                                isRequired: false
                            },
                            {
                                name: 'Advanced JavaScript',
                                isRequired: false
                            },
                            {
                                name: 'Client-side optimization',
                                isRequired: false
                            },
                            {
                                name: 'Javascript performance',
                                isRequired: false
                            },
                            {
                                name: 'Working with web-sockets and web-workers',
                                isRequired: false
                            }
                        ],
                        id: 487,
                        parentId: 56,
                        name: 'UX Development',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 321,
                        requiredSkillLevel: 20,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Complexity of UI implementation',
                                isRequired: true
                            },
                            {
                                name: 'Devices (monitors, notebooks, mobile ets) overview',
                                isRequired: true
                            },
                            {
                                name: 'GUI Design fundamentals',
                                isRequired: true
                            },
                            {
                                name: 'Human-Computer Interaction (HCI) concepts',
                                isRequired: true
                            },
                            {
                                name: 'UI Templates. Implementation features.',
                                isRequired: true
                            },
                            {
                                name: 'Web and desktop applications. UI principles',
                                isRequired: true
                            },
                            {
                                name: 'Front-end prototyping and estimations',
                                isRequired: false
                            },
                            {
                                name: 'HCI advanced',
                                isRequired: false
                            },
                            {
                                name: 'Metro UI fundamentals',
                                isRequired: false
                            },
                            {
                                name: 'UI Automated testing concepts',
                                isRequired: false
                            }
                        ],
                        id: 1279,
                        parentId: 56,
                        name: 'User Experience Design',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 412,
                        requiredSkillLevel: 0,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [],
                        id: 66,
                        parentId: 56,
                        name: 'Database',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 413,
                        requiredSkillLevel: 30,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Base DCL-queries',
                                isRequired: true
                            },
                            {
                                name: 'Base DDL-queries',
                                isRequired: true
                            },
                            {
                                name: 'Base DML-queries',
                                isRequired: true
                            },
                            {
                                name: 'Database architecture concepts',
                                isRequired: true
                            },
                            {
                                name: 'Stored procedures',
                                isRequired: true
                            }
                        ],
                        id: 25,
                        parentId: 66,
                        name: 'Database Development',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 425,
                        requiredSkillLevel: 30,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Dynamic SQL',
                                isRequired: true
                            },
                            {
                                name: 'Execution plan',
                                isRequired: true
                            },
                            {
                                name: 'Full-text search',
                                isRequired: true
                            },
                            {
                                name: 'Query optimization',
                                isRequired: true
                            },
                            {
                                name: 'Reporting',
                                isRequired: true
                            },
                            {
                                name: 'Simple SQL server administration',
                                isRequired: true
                            },
                            {
                                name: 'SQL CLR',
                                isRequired: true
                            },
                            {
                                name: 'SQL memory and Indexes',
                                isRequired: true
                            },
                            {
                                name: 'SQL Profiler',
                                isRequired: true
                            },
                            {
                                name: 'SQL Server DB advanced design',
                                isRequired: true
                            },
                            {
                                name: 'SQL server tools',
                                isRequired: true
                            },
                            {
                                name: 'Stored procedures and functions',
                                isRequired: true
                            },
                            {
                                name: 'Transactions, hints',
                                isRequired: true
                            },
                            {
                                name: 'Triggers',
                                isRequired: true
                            },
                            {
                                name: 'T-SQL features',
                                isRequired: true
                            },
                            {
                                name: 'Views',
                                isRequired: true
                            }
                        ],
                        id: 273,
                        parentId: 25,
                        name: 'MS SQL Server DB Development',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 437,
                        requiredSkillLevel: 20,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Bulk Copy for SQL Azure',
                                isRequired: true
                            },
                            {
                                name: 'Generate Script Wizard for SQL Azure',
                                isRequired: true
                            },
                            {
                                name: 'SQL Azure Data Sync',
                                isRequired: true
                            },
                            {
                                name: 'SQL Azure Editions',
                                isRequired: true
                            },
                            {
                                name: 'SQL Azure vs. SQL Server differencies',
                                isRequired: true
                            },
                            {
                                name: 'SQL Server Integration Services for SQL Azure',
                                isRequired: true
                            },
                            {
                                name: 'SQL Server Migration Assistant for SQL Azure',
                                isRequired: true
                            },
                            {
                                name: 'Physical (internal) architecture of SQL Azure',
                                isRequired: false
                            }
                        ],
                        id: 65,
                        parentId: 273,
                        name: 'SQL Azure',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 438,
                        requiredSkillLevel: 10,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'SQL Azure Federations Atomic unit',
                                isRequired: true
                            },
                            {
                                name: 'SQL Azure Federations limitations',
                                isRequired: false
                            },
                            {
                                name: 'SQL Azure Federations physical (internal) Infrastructure',
                                isRequired: false
                            },
                            {
                                name: 'SQL Azure Federations scaling principles',
                                isRequired: false
                            }
                        ],
                        id: 140,
                        parentId: 65,
                        name: 'SQL Azure Federations',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 439,
                        requiredSkillLevel: 10,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'SQL Azure Reporting concepts',
                                isRequired: false
                            },
                            {
                                name: 'SQL Azure Reporting with SQL Azure (PaaS)',
                                isRequired: false
                            },
                            {
                                name: 'SQL Reporting with SQL Azure (IaaS)',
                                isRequired: false
                            }
                        ],
                        id: 141,
                        parentId: 65,
                        name: 'SQL Azure Reporting',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 456,
                        requiredSkillLevel: 0,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [],
                        id: 521,
                        parentId: 56,
                        name: 'Cloud-Based Application Development',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 457,
                        requiredSkillLevel: 0,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [],
                        id: 550,
                        parentId: 521,
                        name: 'Microsoft Windows Azure Services',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 458,
                        requiredSkillLevel: 20,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Azure Cloud Services slots',
                                isRequired: true
                            },
                            {
                                name: 'Different cloud services in Azure',
                                isRequired: true
                            },
                            {
                                name: 'Different subscriptions in Azure',
                                isRequired: true
                            },
                            {
                                name: 'WCF-contracts versioning in Azure',
                                isRequired: true
                            },
                            {
                                name: 'SQL Azure Federations versioning',
                                isRequired: false
                            }
                        ],
                        id: 146,
                        parentId: 550,
                        name: 'Azure Versioning Strategies',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 459,
                        requiredSkillLevel: 10,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Azure Cloud Services VIP swap',
                                isRequired: true
                            },
                            {
                                name: 'Azure Cloud Services web deploy',
                                isRequired: true
                            },
                            {
                                name: 'Azure Traffic Manager for zero downtime upgrade',
                                isRequired: false
                            },
                            {
                                name: 'Azure VM Load Balanced Endpoint',
                                isRequired: false
                            }
                        ],
                        id: 147,
                        parentId: 550,
                        name: 'Zero Downtime Upgrade in Azure',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 913,
                        requiredSkillLevel: 20,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Base analysis knowledge',
                                isRequired: true
                            },
                            {
                                name: 'Intermediate analysis knowledge',
                                isRequired: true
                            },
                            {
                                name: 'Advanced analysis knowledge',
                                isRequired: false
                            }
                        ],
                        id: 71,
                        parentId: 7,
                        name: 'Business Analysis',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 938,
                        requiredSkillLevel: 0,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [],
                        id: 79,
                        parentId: 7,
                        name: 'Testing',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 939,
                        requiredSkillLevel: 20,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Functional testing fundamentals',
                                isRequired: true
                            }
                        ],
                        id: 80,
                        parentId: 79,
                        name: 'Functional Testing',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 1024,
                        requiredSkillLevel: 0,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [],
                        id: 82,
                        parentId: 7,
                        name: 'Maintenance and Support',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 1025,
                        requiredSkillLevel: 0,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [],
                        id: 549,
                        parentId: 82,
                        name: 'Cloud-Based Application Maintenance and Support',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 1026,
                        requiredSkillLevel: 0,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [],
                        id: 84,
                        parentId: 549,
                        name: 'Windows Azure Maintenance and Support',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 1028,
                        requiredSkillLevel: 20,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Azure Cloud Services fault/update domain concepts',
                                isRequired: true
                            },
                            {
                                name: 'Azure VM Attached storage',
                                isRequired: true
                            },
                            {
                                name: 'Azure VM Availability set',
                                isRequired: true
                            },
                            {
                                name: 'Azure VM Shapes',
                                isRequired: true
                            },
                            {
                                name: 'Azure VM SLA',
                                isRequired: true
                            },
                            {
                                name: 'Windows Azure License mobility',
                                isRequired: true
                            }
                        ],
                        id: 213,
                        parentId: 84,
                        name: 'Azure Virtual Machines',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 1029,
                        requiredSkillLevel: 20,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Azure Virtual Network point-to-site connection',
                                isRequired: true
                            },
                            {
                                name: 'Azure Virtual Network site-to-site connection',
                                isRequired: true
                            },
                            {
                                name: 'Azure Virtual Network dynamic routing VPNs',
                                isRequired: false
                            },
                            {
                                name: 'Azure Virtual Network static routing VPNs',
                                isRequired: false
                            }
                        ],
                        id: 214,
                        parentId: 84,
                        name: 'Azure Virtual Network',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 1030,
                        requiredSkillLevel: 20,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Azure PowerShell Management tools',
                                isRequired: true
                            },
                            {
                                name: 'Azure PowerShell syntax',
                                isRequired: true
                            },
                            {
                                name: 'Azure PowerShell objects interaction',
                                isRequired: false
                            }
                        ],
                        id: 215,
                        parentId: 84,
                        name: 'Azure PowerShell Cmdlets',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 1031,
                        requiredSkillLevel: 20,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Azure backup agent configuration',
                                isRequired: true
                            },
                            {
                                name: 'Azure Recovery Services Backup Vaults',
                                isRequired: true
                            },
                            {
                                name: 'Restoring backups with Azure backup agent',
                                isRequired: true
                            },
                            {
                                name: 'Scheduling backups with Azure Recovery Services',
                                isRequired: true
                            },
                            {
                                name: 'Azure Recovery Services certificates management',
                                isRequired: false
                            }
                        ],
                        id: 216,
                        parentId: 84,
                        name: 'Azure Recovery Services (Backup)',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 1039,
                        requiredSkillLevel: 20,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Azure Traffic Manager configuration',
                                isRequired: false
                            },
                            {
                                name: 'Azure Traffic Manager Failover configuration',
                                isRequired: false
                            },
                            {
                                name: 'Azure Traffic Manager overview',
                                isRequired: false
                            },
                            {
                                name: 'Azure Traffic Manager Performance configuration',
                                isRequired: false
                            },
                            {
                                name: 'Azure Traffic Manager Round Robin configuration',
                                isRequired: false
                            }
                        ],
                        id: 223,
                        parentId: 84,
                        name: 'Windows Azure Traffic Manager',
                        isSelectable: true
                    },
                    {
                        rootId: 7,
                        displayOrder: 1041,
                        requiredSkillLevel: 20,
                        userSkillLevel: 0,
                        levelSet: 0,
                        competencyId: 13,
                        jobFunctionLevel: 3,
                        topics: [
                            {
                                name: 'Azure CDN + Storage Services',
                                isRequired: false
                            },
                            {
                                name: 'Azure CDN configuration',
                                isRequired: false
                            },
                            {
                                name: 'Azure CDN overview',
                                isRequired: false
                            }
                        ],
                        id: 225,
                        parentId: 84,
                        name: 'Azure CDN',
                        isSelectable: true
                    }
                ]
            }];

        let interviewScriptDataTemp: any = [{
            competencyId: 13,
            competencyName: '.Net',
            domain: 'Front-End Web Developemnt',
            level: {
                id: 3,
                name: 'L3',
                description: 'Senior Software Engineer',
                competencyId: 1
            },
            skills: [
                {
                    id: 1,
                    name: "Code Standards",
                    startingFrom: "Novice",
                    priority: "Low",
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
                            question: "What's the purpose of standards/conventions in .NET C#?",
                            answer: "",
                            selected: true
                        },
                        {
                            id: 2,
                            question: "When to use string and when StringBuilder?",
                            answer: "",
                            selected: true
                        },
                        {
                            id: 3,
                            question: "When to use var and when the exact data type?",
                            answer: "",
                            selected: true
                        }
                    ],
                    exercises: []
                },
                {
                    id: 2,
                    name: ".NET Development",
                    startingFrom: "Novice",
                    priority: "High",
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
                            question: "What is SOLID? Explain the principles and provide examples",
                            answer: "",
                            selected: true
                        },
                        {
                            id: 2,
                            question: "What is Value Type and Reference Type?",
                            answer: "",
                            selected: true
                        },
                        {
                            id: 3,
                            question: "What is Boxing and Un-Boxing?",
                            answer: "",
                            selected: true
                        }
                    ],
                    exercises: [
                        {
                            id: 1,
                            title: "Palindrome",
                            description: "A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward, such as madam or kayak. Write an function that receives an string parameters and return true if it is a palindrome.",
                            solution: "",
                            selected: true
                        },
                        {
                            id: 2,
                            title: "Balanced Brakets",
                            description: "Type of Brackets: () Round brackets or parentheses, {} Curly brackets or braces, [] Square brackets. Implement an algorithm to resolve the balanced brackets problems, ie. \"{([])}\" is balanced.",
                            solution: "",
                            selected: true
                        }
                    ]
                },
                {
                    id: 3,
                    name: "Scrum / Agile",
                    startingFrom: "Novice",
                    priority: "Medium",
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
                            question: "Explain SCRUM",
                            answer: "",
                            selected: true
                        },
                        {
                            id: 2,
                            question: "How do you face or deal with problems in an Agile project?",
                            answer: "",
                            selected: true
                        },
                        {
                            id: 3,
                            question: "When you need to solve something you don't know, how do you deal with it?",
                            answer: "",
                            selected: true
                        }
                    ],
                    exercises: []
                }
            ]
        }];

        return { interviewScriptData, interviewScriptDataTemp };
    }
}