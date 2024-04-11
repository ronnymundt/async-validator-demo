import {AbstractControl, AsyncValidatorFn} from "@angular/forms";
import {delay, map, of} from "rxjs";

/**
 * Async validator that checks if the value is 'demo'.
 */
export function demoValidatorAsync(): AsyncValidatorFn {
  return (control: AbstractControl) => {
    return of().pipe(
      delay(1000), // Simulate a server request
      map(() => {
        return control.value !== 'demo' ? {invalid: true} : null;
      })
    );
  };
}
