import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  IonToolbar,
  IonMenuButton,
  IonButtons,
  IonTitle,
  IonHeader, IonImg } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonImg, 
    IonHeader,
    IonTitle,
    IonButtons,
    IonToolbar,
    CommonModule,
    IonMenuButton,
  ],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
