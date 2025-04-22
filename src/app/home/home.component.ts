import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import {demoValidatorAsync} from '../validators';

@Component({
  selector: 'home',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
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
}
