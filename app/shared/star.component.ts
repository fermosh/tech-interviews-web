import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ai-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})
export class StarComponent {
    @Input() rating: number;
    @Output() ratingClicked: EventEmitter<number> =
        new EventEmitter<number>();

    onClick(): void {
        this.ratingClicked.emit(this.rating);
    }

    onStarClick(selectedRating: number): void {
        this.rating = selectedRating;
    }
}
