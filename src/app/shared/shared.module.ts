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
import { ExcelToJsonService } from './../shared/services/excelToJson/excelToJson.service';
import { ArrayToJsonService } from './../shared/services/excelToJson/arrayToJson.service';
import { QuestionsImportService } from './../shared/services/bulkImport/questionsImport.service';

import { CompentencyPickerComponent } from '../shared/components/competencyPicker/competencyPicker.component';

@NgModule(
  {
    imports: [CommonModule, FormsModule],
    exports: [
        CommonModule,
        FormsModule,
        CompentencyPickerComponent
    ],
    declarations: [CompentencyPickerComponent],
    providers: [
        SkillMatrixService,
        CompetencyService,
        TemplateService,
        QuestionService,
        ExerciseService,
        ScriptViewerService,
        ExcelToJsonService,
        ArrayToJsonService,
        QuestionsImportService
      ]
  }
)
export class SharedModule { }