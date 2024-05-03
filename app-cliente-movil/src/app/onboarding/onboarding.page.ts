import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonCol, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonGrid, IonLabel, IonInput, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
  standalone: true,
  imports: [IonItem, IonInput, IonLabel, IonGrid, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonButton, IonCol, IonRow, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class OnboardingPage implements OnInit {

  onboardingPage: number = 1;

  constructor() { }

  ngOnInit() {
  }

  nextPage() {
    this.onboardingPage++;
  }
}
