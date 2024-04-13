import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { delay, map, of } from 'rxjs';

/**
 * Async validator that checks if the value is 'demo'.
 */
export function demoValidatorAsync(): AsyncValidatorFn {
  return (control: AbstractControl) => {
    const validNames = ['admin', 'user', 'demo'];

    // simulate a async api request
    return of(control.value).pipe(
      delay(1000), // simulate a server request delay
      map((value) => (validNames.includes(value) ? null : { invalid: true })),
    );
  };
}
