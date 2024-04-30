import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { IonItem, IonList, IonCol, IonHeader, IonToolbar, IonGrid, IonTitle, IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-report-market-form',
  templateUrl: './report-market-form.component.html',
  styleUrls: ['./report-market-form.component.scss'],
  standalone: true,
  imports: [IonContent, IonTitle, IonGrid, IonToolbar, IonHeader, IonCol, IonList, IonItem, 
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ReportMarketFormComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }
}
