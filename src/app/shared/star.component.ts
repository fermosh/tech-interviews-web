import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'tih-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent {

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
