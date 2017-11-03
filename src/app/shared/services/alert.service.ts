import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { Alert, AlertType } from './../components/alert/alert'

@Injectable()

export class AlertService {
    private subject = new Subject<Alert>();

    getAlert(): Observable<any> {
        return this.subject.asObservable();
    }

    success(message: string): void {
        this.alert(AlertType.Success, message);
    }

    error(message: string): void {
        this.alert(AlertType.Error, message);
    }

    info(message: string): void {
        this.alert(AlertType.Info, message);
    }

    warning(message: string): void {
        this.alert(AlertType.Warning, message);
    }

    alert(type: AlertType, message: string): void {
        this.subject.next(<Alert> { type: type, message: message, life: 0 });
    }

    clear() {
        // Clear Alerts
        this.subject.next();
    }
}