import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
    selector: 'tih-score',
    templateUrl: 'app/shared/score.component.html',
    styleUrls: ['app/shared/score.component.css']
})

export class ScoreComponent implements OnInit, OnChanges  {
    @Input() score: number;
    private scoreStyle: string;

    ngOnInit(): void {
        this.scoreStyle = this.updateScoreStyle();
    }

    ngOnChanges() {
        this.scoreStyle = this.updateScoreStyle();
    }

    updateScoreStyle(): string {
        return 'score-value-' + Math.trunc(this.score);
    }
}
