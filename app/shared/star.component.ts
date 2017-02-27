import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'tih-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})
export class StarComponent {
    private startCollection: number[] = [1, 2, 3, 4, 5];
    @Input() rating: number;
    @Output() ratingClicked: EventEmitter<number> =
        new EventEmitter<number>();

    onClick(): void {
        this.ratingClicked.emit(this.rating);
    }

    private onStarClick(selectedRating: number): void {
        this.rating = selectedRating;
    }
}
