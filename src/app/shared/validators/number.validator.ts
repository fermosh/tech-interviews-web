import { AbstractControl, ValidatorFn, FormControl } from '@angular/forms';

export class NumberValidator {

    static range(min: number, max: number): ValidatorFn {
        return (c: AbstractControl): { [key: string]: boolean } | null => {
            if (c.value && (isNaN(c.value) || c.value < min || c.value > max)) {
                return { 'range': true };
            }
            return null;
        };
    }

    static validateNonZero(c: FormControl) {
        return c.value > 0 ? null : { validateZero: { valid: false } };
      }
}