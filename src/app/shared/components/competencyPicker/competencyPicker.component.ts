import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICompetency } from '../../classes/competency';

declare var jQuery: any;

@Component({
    selector: 'app-competency-picker',
    templateUrl: './competencyPicker.component.html',
    styleUrls: ['./competencyPicker.component.css']
})
export class CompentencyPickerComponent {
    @Input() selectedId = 0;
    @Output() selectionChanged: EventEmitter<number> = new EventEmitter<number>();
    private internalCompetencies: ICompetency[];

    get competencies(): ICompetency[] {
        return this.internalCompetencies;
    }

    @Input('competencies')
    set competencies(competencies: ICompetency[]) {
        if (competencies == undefined) {
            this.internalCompetencies = null;
            return;
        }

        this.internalCompetencies = this.SetCompetencies(competencies);
    }

    private Onchange(competencyId: number): void {
        this.selectionChanged.emit(competencyId);
    }

    private SetCompetencies(competencies: ICompetency[]) {
        let result: ICompetency[] = [];

        competencies.filter(competency => competency.parentId == null).forEach(parent => {

            let children = competencies.filter(x => x.parentId == parent.id);

            parent.isSelectable = children.length > 0;

            if (parent.isSelectable) {
                parent.competencies = children;
            }

            result.push(parent);
        });

        return result;
    }
}
