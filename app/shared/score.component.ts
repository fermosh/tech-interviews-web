import { Component, Input } from '@angular/core';

@Component({
    selector: 'tih-score',
    templateUrl: 'app/shared/score.component.html',
    styleUrls: ['app/shared/score.component.css']
})

export class ScoreComponent {
    @Input() score: number;

    get scoreStyleClass(): string {
        let scoreStyle: 'score-value-';

        switch (true) {
            case (this.score === 0): scoreStyle += '0';
                break;
            case (this.score < 2): scoreStyle += '1';
                break;
            case (this.score < 3): scoreStyle += '2';
                break;
            case (this.score < 4): scoreStyle += '3';
                break;
            case (this.score < 5): scoreStyle += '4';
                break;
            case (this.score === 5): scoreStyle += '5';
                break;
            default:
                scoreStyle += '0';
        }

        return scoreStyle;
    }
}
