import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IComment } from './../interfaces/comment';

@Component({
    selector: 'tih-history-comment',
    templateUrl: './history-comment.component.html',
    styleUrls: ['./history-comment.component.css']
})

export class HistoryCommentComponent {
    private showDeleteOptionFor: IComment;
    @Input() comments: IComment[];
    @Output() deleteCommentClicked: EventEmitter<IComment> =
        new EventEmitter<IComment>();

    onDeleteClick(comment: IComment): void {
        this.deleteCommentClicked.emit(comment);
    }

    onCommentOver(comment: IComment): void {
        this.showDeleteOptionFor = comment;
    }

    onCommentLeave(): void {
        this.showDeleteOptionFor = null;
    }

    showDeleteOption(comment: IComment): boolean {
        return this.showDeleteOptionFor === comment;
    }
}
