import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-market-report-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './market-report-form.component.html',
  styleUrl: './market-report-form.component.css',
})
export class MarketReportFormComponent implements OnInit {

  reportForm: FormGroup;

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.reportForm = new FormGroup({
      description: new FormControl('', [Validators.required]),
    });
  }

  constructor(public dialogRef: MatDialogRef<MarketReportFormComponent>) {}

  get description() {
    return this.reportForm.get('description');
  }
}
