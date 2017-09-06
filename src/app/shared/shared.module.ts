import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


// Imports for loading & configuring the in-memory web api
import { SkillMatrixService } from './../shared/services/skill-matrix.service';
import { CompetencyService } from './../shared/services/competency.service';
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
        SkillMatrixService,
        CompetencyService,
        TemplateService,
        QuestionService,
        ExerciseService,
        ScriptViewerService,
      ]
  }
)
export class SharedModule { }
