export class Alert {
    type: AlertType;
    message: string;
    life: number;
}

export enum AlertType {
    Success,
    Error,
    Info,
    Warning
}