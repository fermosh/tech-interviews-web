import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Imports for loading & configuring the in-memory web api
import { CompetencyService } from './../shared/services/competency.service';
import { LevelService } from './../shared/services/level.service';
import { DomainService } from './../shared/services/domain.service';
import { SkillMatrixService } from './../shared/services/skill-matrix.service';
import { TemplateService } from './../shared/services/template.service';
import { QuestionService } from './../shared/services/question.service';
import { ExerciseService } from './../shared/services/exercise.service';
import { ScriptViewerService } from '../scriptViewer/script-viewer.service';

@NgModule(
  {
    imports: [CommonModule],
    exports: [
        CommonModule,
        FormsModule,
    ],
    providers: [
        CompetencyService,
        LevelService,
        DomainService,
        SkillMatrixService,
        TemplateService,
        QuestionService,
        ExerciseService,
        ScriptViewerService
      ]
  }
)
export class SharedModule { }
