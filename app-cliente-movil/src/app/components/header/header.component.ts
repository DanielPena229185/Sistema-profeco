import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonButtons, IonButton, IonBackButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonBackButton, IonButton, IonButtons, IonIcon, IonHeader, IonContent, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton]
})
export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
