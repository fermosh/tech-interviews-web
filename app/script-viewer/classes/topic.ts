export class Topic {
    // API Properties
    name: string;
    isRequired: boolean;
 
    constructor(_name: string, _isRequired: boolean) {
        this.name = _name;
        this.isRequired = _isRequired;
    }
}