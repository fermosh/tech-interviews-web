import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Import services
import { SkillMatrixService } from './../shared/services/skill-matrix.service';
import { TemplateService } from './../shared/services/template.service';
import { QuestionService } from './../shared/services/question.service';
import { ExerciseService } from './../shared/services/exercise.service';
import { ScriptViewerService } from '../scriptViewer/script-viewer.service';
import { PositionService } from '../shared/services/position.service';

@NgModule(
  {
    imports: [CommonModule],
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
