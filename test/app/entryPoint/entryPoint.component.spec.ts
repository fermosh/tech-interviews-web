import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

/* Module and component */
import { EntryPointComponent } from '../../../src/app/entryPoint/entryPoint.component';
import { CompentencyPickerComponent } from '../../../src/app/shared/components/competencyPicker/competencyPicker.component';
import { SkillPickerComponent } from '../../../src/app/shared/components/skillPicker/skillPicker.component';
/* Services */
import { CompetencyService } from '../../../src/app/shared/services/competency.service';
import { SkillMatrixService } from '../../../src/app/shared/services/skill-matrix.service';
import { TemplateService } from '../../../src/app/shared/services/template.service';

/* Mock Services */
import { MockCompetencyService } from '../shared/services/mockCompetency.service';
import { MockSkillMatrixService } from '../shared/services/mockSkill-matrix.service';
import { MockTemplateService } from '../shared/services/mockTemplate.service';

describe('Entry Point Component', () => {

    let component: EntryPointComponent;
    let componentFixture: ComponentFixture<EntryPointComponent>;

    // Asynchronous beforeEach(to prepare testing module)
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [EntryPointComponent, SkillPickerComponent, CompentencyPickerComponent],
            providers: [{ provide: Router, useClass: class { navigate = jasmine.createSpy('navigate'); } }]
        }).overrideComponent(EntryPointComponent, {
            set: {
                providers: [
                    { provide: CompetencyService, useClass: MockCompetencyService },
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
            let templateServiceDependency = componentFixture.debugElement.injector.get(TemplateService);
            let skillMatrixService = componentFixture.debugElement.injector.get(SkillMatrixService);

            // assert
            expect(templateServiceDependency).toBeDefined();
            expect(skillMatrixService).toBeDefined();
        });
    });

    describe('when initialized', () => {
        it('should have 1 competency and the selected competencyId should be 0', () => {
            // act
            component.ngOnInit();

            // assert
            expect(component.competencies.length).toBe(1);
            expect(component.competencyId).toBe(0);
        });

        it('should have 5 levels and the selected levelId should be 1', () => {
            // act
            component.ngOnInit();

            // assert
            expect(component.levels.length).toBe(5);
            expect(component.levelId).toBe(0);
        });
    });
});
