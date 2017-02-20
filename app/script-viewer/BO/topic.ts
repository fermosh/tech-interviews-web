export class Topic {
    // API Properties
    id: number;
    name: string;
    isRequired: boolean;
 
    constructor(_id: number, _name: string, _isRequired: boolean) {
        this.id = _id;
        this.name = _name;
        this.isRequired = _isRequired;
    }
}