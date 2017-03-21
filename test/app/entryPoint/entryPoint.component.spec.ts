import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { Router } from '@angular/router';
/* Module and component */
import { EntryPointModule } from '../../../src/app/entryPoint/entryPoint.module';
import { EntryPointComponent } from '../../../src/app/entryPoint/entryPoint.component';
/* Services */
import { CompetencyService } from '../../../src/app/shared/services/competency.service';
import { LevelService } from '../../../src/app/shared/services/level.service';
import { DomainService } from '../../../src/app/shared/services/domain.service';
import { SkillMatrixService } from '../../../src/app/entryPoint/skill-matrix.service';
import { TemplateService } from '../../../src/app/entryPoint/services/template.service';
/* Mock Services */
import { MockCompetencyService } from '../shared/services/mockCompetency.service';
import { MockLevelService } from '../shared/services/mockLevel.service';
import { MockDomainService } from '../shared/services/mockDomain.service';
import { MockSkillMatrixService } from '../entryPoint/mockSkill-matrix.service';
import { MockTemplateService } from '../entryPoint/services/mockTemplate.service';

describe('Entry Point Component', () => {

    let component: EntryPointComponent;
    let componentFixture: ComponentFixture<EntryPointComponent>;

    // Asynchronous beforeEach(to prepare testing module)
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [EntryPointModule],
            providers: [{ provide: Router, useClass: class { navigate = jasmine.createSpy('navigate'); } }]
        }).overrideComponent(EntryPointComponent, {
            set: {
                providers: [
                    { provide: CompetencyService, useClass: MockCompetencyService },
                    { provide: LevelService, useClass: MockLevelService },
                    { provide: DomainService, useClass: MockDomainService },
                    { provide: SkillMatrixService, useClass: MockSkillMatrixService },
                    { provide: TemplateService, useClass: MockTemplateService }
                ]
            }
        }).compileComponents();
    }));

    // Synchronous beforeEach(to create instance and fixture for each test)
    beforeEach(() => {
        // get the component fixture
        componentFixture = TestBed.createComponent(EntryPointComponent);

        // get the component instance
        component = componentFixture.componentInstance;
    });

    describe('instance', () => {
        it('should be defined', () => {
            // assert
            expect(component).toBeDefined();
        });
    });

    describe('service depencencies', () => {
        it('should be all defined', () => {
            // act
            let competencyServiceDependency = componentFixture.debugElement.injector.get(CompetencyService);
            let levelServiceDependency = componentFixture.debugElement.injector.get(LevelService);
            let domainServiceDependency = componentFixture.debugElement.injector.get(DomainService);
            let templateServiceDependency = componentFixture.debugElement.injector.get(TemplateService);
            let skillMatrixService = componentFixture.debugElement.injector.get(SkillMatrixService);

            // assert
            expect(competencyServiceDependency).toBeDefined();
            expect(levelServiceDependency).toBeDefined();
            expect(domainServiceDependency).toBeDefined();
            expect(templateServiceDependency).toBeDefined();
            expect(skillMatrixService).toBeDefined();
        });
    });

    describe('when initialized', () => {
        it('should have 3 competencies and the selected competencyId should be 1', () => {
            // act
            component.ngOnInit();

            // assert
            expect(component.competencyOptions.length).toBe(3);
            expect(component.competencyId).toBe(1);
        });

        it('should have 5 levels and the selected levelId should be 1', () => {
            // act
            component.ngOnInit();

            // assert
            expect(component.levelOptions.length).toBe(5);
            expect(component.levelId).toBe(1);
        });

        it('should have 20 domains and the selected domainId should be 4', () => {
            // act
            component.ngOnInit();

            // assert
            expect(component.domainOptions.length).toBe(20);
            expect(component.domainId).toBe(4);
        });

        it('should have 20 domains', () => {
            // act
            component.ngOnInit();

            // assert
            expect(component.domainOptions.length).toBe(20);
        });
    });
});
