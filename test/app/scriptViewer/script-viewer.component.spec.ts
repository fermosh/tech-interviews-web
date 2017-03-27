import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import { FormsModule } from '@angular/forms';
import { SortablejsModule } from 'angular-sortablejs';

/* Module and component */
import { ScriptViewerModule } from '../../../src/app/scriptViewer/script-viewer.module';
import { ScriptViewerComponent } from '../../../src/app/scriptViewer/script-viewer.component';
import { ScoreComponent } from '../../../src/app/scriptViewer/components/score.component';
import { StarComponent } from '../../../src/app/scriptViewer/components/star.component';
import { HistoryCommentComponent } from '../../../src/app/scriptViewer/components/history-comment.component';

import { ReportViewerComponent } from '../../../src/app/scriptViewer/components/report-viewer.component';
import { QuestionBankFilterPipe } from '../../../src/app/scriptViewer/pipes/question-bank-filter.pipe';

/* Services */
import { ScriptViewerService } from '../../../src/app/scriptViewer/script-viewer.service';
import { QuestionService } from '../../../src/app/shared/services/question.service';
import { ExerciseService } from '../../../src/app/shared/services/exercise.service';

/* Mock Services */
import { MockScriptViewerService } from '../scriptViewer/mockScript-viewer.service';
import { MockQuestionService } from '../shared/services/MockQuestion.service';
import { MockExerciseService } from '../shared/services/mockExercise.service';

import { MockParams, MockActivatedRoute } from '../shared/services/mockActivatedRoute.service';

describe('Script Viewer Component', () => {

    // let component: ScriptViewerComponent;
    // let componentFixture: ComponentFixture<ScriptViewerComponent>;

    // // Asynchronous beforeEach(to prepare testing module)
    // beforeEach(async(() => {
    //     let mockParams = new MockParams({ templateId: 1 });
    //     TestBed.configureTestingModule({
    //         imports: [FormsModule, SortablejsModule],
    //         declarations: [ScriptViewerComponent, QuestionBankFilterPipe, HistoryCommentComponent, 
    //             StarComponent, ScoreComponent, ReportViewerComponent]
    //     }).overrideComponent(ScriptViewerComponent, {
    //         set: {
    //             providers: [
    //                 { provide: ActivatedRoute, useValue: new MockActivatedRoute(mockParams) },
    //                 { provide: ScriptViewerService, useClass: MockScriptViewerService },
    //                 { provide: QuestionService, useClass: MockQuestionService },
    //                 { provide: ExerciseService, useClass: MockExerciseService }
    //             ]
    //         }
    //     }).compileComponents();
    // }));

    // afterEach(async(() => {
    //     TestBed.resetTestingModule();
    // }));

    // // Synchronous beforeEach(to create instance and fixture for each test)
    // beforeEach(() => {
    // });

    // describe('instance', () => {
    //     it('should be defined', function(done) {

    //         componentFixture = TestBed.createComponent(ScriptViewerComponent);
    //         component = componentFixture.componentInstance;
    //         // assert
    //         expect(component).toBeDefined();
    //         // expect(true).toBe(true);
    //         done();
    //         // component.ngOnDestroy();
    //     }, 20000);
    // });
});
