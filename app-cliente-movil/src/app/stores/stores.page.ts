import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../components/header/header.component';
import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/angular/standalone";

@Component({
  selector: 'app-stores',
  templateUrl: './stores.page.html',
  styleUrls: ['./stores.page.scss'],
  standalone: true,
  imports: [IonToolbar, IonTitle, IonHeader, IonContent, CommonModule, HeaderComponent]
})
export class StoresPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
