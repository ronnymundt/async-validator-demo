import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  appForm!: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.appForm = this.fb.group({
      home: [''],
    });
  }
}
