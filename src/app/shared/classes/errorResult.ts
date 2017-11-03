/* Defines the Bulk Import Error Result */
export class ErrorResult {
    entity: string;
    errorDescription: string;

    constructor(entity: string, errorDescription: string) {
        this.entity = entity;
        this.errorDescription = errorDescription;
    }
}