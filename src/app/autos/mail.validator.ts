import { Directive, Input } from "@angular/core";

import { AbstractControl, NG_VALIDATORS, Validator } from "@angular/forms";

@Directive({
    selector: "[minlen]",
    providers: [{provide: NG_VALIDATORS, useExisting: AutoMinLenDirective,
   multi: true}]
   })
   export class AutoMinLenDirective implements Validator {
    @Input() minlen: string;
    constructor() {
    //
    }
    validate(control: AbstractControl): {[key: string]: any} {
    return !control.value || control.value.length >= (this.minlen
   || 2) ? null : { minlen: true };
    }
   }
