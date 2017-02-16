import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ai-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})
export class StarComponent {
    private startCollection: number[] = [1, 2, 3, 4, 5];
    private temporalRating: number;
    @Input() rating: number;
    @Output() ratingClicked: EventEmitter<number> =
        new EventEmitter<number>();

    onClick(): void {
        this.ratingClicked.emit(this.rating);
    }

    private onStarClick(selectedRating: number): void {
        this.temporalRating = selectedRating;
        this.rating = selectedRating;
    }

    private onStarMouseOver(selectedRating: number): void {
        if (selectedRating > this.rating) {
            this.temporalRating = this.rating;
            this.rating = selectedRating;
        }
    }

    private onStarMouseLeave(): void {
        this.rating = this.temporalRating;
    }
}
