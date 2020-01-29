import { AbstractControl, ValidationErrors } from '@angular/forms';

export class Blaclist {
    static NameControl(control: AbstractControl): ValidationErrors | null {
        let deger = control.value as string;
        if (!deger.startsWith("xxx")) return null;
        else {
            return { blacklist: true }
        }
    }
}