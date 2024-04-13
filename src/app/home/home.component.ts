import { Component, forwardRef, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { demoValidatorAsync } from '../demo-async.validator';

@Component({
  selector: 'home',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => HomeComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => HomeComponent),
      multi: true,
    },
  ],
})
export class HomeComponent implements OnInit, ControlValueAccessor, Validator {
  homeForm!: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.homeForm = this.fb.group({
      name: ['', [], [demoValidatorAsync()]],
    });
  }

  // VALUE ACCESSOR

  public writeValue(value: any): void {}

  propagateChange = (value: any) => {};
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  propagateTouch = (value: any) => {};
  registerOnTouched(fn: any): void {
    this.propagateTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // implement if needed
  }

  // VALIDATOR

  validate(control: FormControl): ValidationErrors | null {
    return null; //this.control.errors;
  }
}
