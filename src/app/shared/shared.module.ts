import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StarComponent } from './star.component';
import { ScoreComponent } from './score.component';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CompetencyService } from './../shared/services/competency.service';
import { LevelService } from './../shared/services/level.service';
import { DomainService } from './../shared/services/domain.service';
import { SkillMatrixService } from './../shared/services/skill-matrix.service';
import { TemplateService } from './../shared/services/template.service';
import { QuestionService } from './../shared/services/question.service';
import { ExerciseService } from './../shared/services/exercise.service';


import { TechnicalInterviewData } from './technical-interview-helper.data';

@NgModule(
  {
    imports: [CommonModule,
        InMemoryWebApiModule.forRoot(TechnicalInterviewData)],
    exports: [
        CommonModule,
        FormsModule,
        StarComponent,
        ScoreComponent
    ],
    declarations: [
        StarComponent,
        ScoreComponent
    ],
    providers: [
        CompetencyService,
        LevelService,
        DomainService,
        SkillMatrixService,
        TemplateService,
        QuestionService,
        ExerciseService
      ]
  }
)
export class SharedModule { }
