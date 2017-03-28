import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { SkillMatrixService } from './../shared/services/skill-matrix.service';
import { TemplateService } from './../shared/services/template.service';
import { QuestionService } from './../shared/services/question.service';
import { ExerciseService } from './../shared/services/exercise.service';
import { ScriptViewerService } from '../scriptViewer/script-viewer.service';
import { PositionService } from '../shared/services/position.service';

import { TechnicalInterviewData } from './technical-interview-helper.data';

@NgModule(
  {
    imports: [CommonModule,
        InMemoryWebApiModule.forRoot(TechnicalInterviewData)],
    exports: [
        CommonModule,
        FormsModule,
    ],
    providers: [
        SkillMatrixService,
        TemplateService,
        QuestionService,
        ExerciseService,
        ScriptViewerService,
        PositionService
      ]
  }
)
export class SharedModule { }
