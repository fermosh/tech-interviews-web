import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Alert, AlertType } from './alert'
import { AlertService } from './../../services/alert.service';
import { TimerObservable } from "rxjs/observable/TimerObservable";
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'tih-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css']
})

export class AlertComponent implements OnInit, OnDestroy {
    alerts: Alert[] = [];
    private subscription: Subscription;

    constructor(private alertService: AlertService) { }

    ngOnInit(): void {
        this.alertService.getAlert().subscribe(
            (alert: Alert) => {
                if (!alert) {
                    // Clear alerts when an empry alert is received
                    this.alerts = [];
                    return;
                }
                // Add alert to array
                this.alerts.push(alert);
            }
        );
        let timer = TimerObservable.create(2000, 1000);
        this.subscription = timer.subscribe(t => {
            this.alerts.forEach(a => a.life++);
            this.alerts.forEach(a => {
                switch (a.type) {
                    case AlertType.Success:
                    case AlertType.Info:
                        if (a.life > 3) {   // Live in seconds of the alert
                            this.removeAlert(a);
                        }
                        break;
                    case AlertType.Warning:
                    case AlertType.Error:
                        if (a.life > 6) {   // Live in seconds of the alert
                            this.removeAlert(a);
                        }
                        break;
                }
            })
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    removeAlert(alert: Alert): void {
        this.alerts = this.alerts.filter(a => a !== alert);
    }

    getCssClass(alert: Alert): string {
        switch (alert.type) {
            case AlertType.Success:
                return "lime-green";
            case AlertType.Info:
                return "blue";
            case AlertType.Warning:
                return "yellow";
            case AlertType.Error:
                return "fuchsia";
        }
    }

    getIcon(alert: Alert): string {
        switch (alert.type) {
            case AlertType.Success:
            case AlertType.Info:
                return "fa fa-exclamation-circle";
            case AlertType.Warning:
            case AlertType.Error:
                return "fa fa-exclamation-triangle";
        }
    }

    getTypeValue(alert: Alert): string {
        return AlertType[alert.type];
    }
}