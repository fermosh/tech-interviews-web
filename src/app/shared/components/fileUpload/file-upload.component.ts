import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
    selector: 'tih-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.css']
})

export class FileUploadComponent implements OnInit {
    @Input() url: string;
    @Input() queueLimit: number;
    @Input() maxFileSize: number;
    @Input() autoUpload: boolean;
    @Input() allowedMimeType: Array<string>;
    @Input() allowedFileType: Array<string>;
    @Input() headers: Array<any>;
    @Input() additionalParameter: {
        [key: string]: any;
    };

    @Output() fileOver: EventEmitter<number> =
    new EventEmitter<number>();
    @Output() itemUpload: EventEmitter<number> =
    new EventEmitter<number>();

    uploader: FileUploader;
    hasBaseDropZoneOver: boolean = false;

    ngOnInit(): void {
        this.uploader = new FileUploader({
            url: this.url,
            queueLimit: this.queueLimit,
            maxFileSize: this.maxFileSize,
            autoUpload: this.autoUpload,
            allowedMimeType: this.allowedMimeType,
            allowedFileType: this.allowedFileType,
            headers: this.headers,
            additionalParameter: this.additionalParameter
        });
    }

    public fileOverBase(e: any): void {
        this.hasBaseDropZoneOver = e;
        this.fileOver.emit(e);
    }

    public _itemUpload(item: any): void {
        item.requiredProperties = this.additionalParameter[0].requiredProperties;
        this.itemUpload.emit(item);
    }
}
