import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICompetency } from '../../entryPoint/classes/competency';

declare var jQuery: any;

@Component({
    selector: 'app-competency-picker',
    templateUrl: './competencyPicker.component.html',
    styleUrls: ['./competencyPicker.component.css']
})
export class CompentencyPickerComponent {
    @Input() selectedId = 0;
    @Input() competencies: ICompetency[] = [];
    @Output() selectionChanged: EventEmitter<number> = new EventEmitter<number>();

    private isLoaded = false;

    private Onchange(competencyId: number): void {
        this.selectionChanged.emit(competencyId);
    }

    private ngAfterViewChecked(): void {
        this.loadDropDowns();
    }

    private loadDropDowns() {
        if (this.competencies != null && !this.isLoaded) {
            jQuery('.selectpicker').uui_dropdown();
            this.isLoaded = true;
        }
    }
}
