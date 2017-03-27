import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

/* Module and component */
import { EntryPointModule } from '../../../src/app/entryPoint/entryPoint.module';
import { EntryPointComponent } from '../../../src/app/entryPoint/entryPoint.component';

import { SkillPickerComponent } from '../../../src/app/entryPoint/components/skillPicker.component';
import { LevelFilterPipe } from '../../../src/app/entryPoint/pipes/level-filter.pipe';
import { DomainFilterPipe } from '../../../src/app/entryPoint/pipes/domain-filter.pipe';

/* Services */
import { CompetencyService } from '../../../src/app/shared/services/competency.service';
import { LevelService } from '../../../src/app/shared/services/level.service';
import { DomainService } from '../../../src/app/shared/services/domain.service';
import { SkillMatrixService } from '../../../src/app/shared/services/skill-matrix.service';
import { TemplateService } from '../../../src/app/shared/services/template.service';
/* Mock Services */
import { MockCompetencyService } from '../shared/services/mockCompetency.service';
import { MockLevelService } from '../shared/services/mockLevel.service';
import { MockDomainService } from '../shared/services/mockDomain.service';
import { MockSkillMatrixService } from '../shared/services/mockSkill-matrix.service';
import { MockTemplateService } from '../shared/services/mockTemplate.service';

describe('Entry Point Component', () => {

    let component: EntryPointComponent;
    let componentFixture: ComponentFixture<EntryPointComponent>;

    // Asynchronous beforeEach(to prepare testing module)
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [EntryPointComponent, SkillPickerComponent, LevelFilterPipe, DomainFilterPipe],
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
            expect(component.competencies.length).toBe(3);
            expect(component.competencyId).toBe(1);
        });

        it('should have 5 levels and the selected levelId should be 1', () => {
            // act
            component.ngOnInit();

            // assert
            expect(component.levels.length).toBe(5);
            expect(component.levelId).toBe(1);
        });

        it('should have 20 domains and the selected domainId should be 4', () => {
            // act
            component.ngOnInit();

            // assert
            expect(component.domains.length).toBe(20);
            expect(component.domainId).toBe(4);
        });
    });
});
