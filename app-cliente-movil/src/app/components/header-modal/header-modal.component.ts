import { Component, Input, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { ModalController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { close } from 'ionicons/icons';

@Component({
  selector: 'app-header-modal',
  templateUrl: './header-modal.component.html',
  styleUrls: ['./header-modal.component.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonButtons, IonTitle, IonToolbar, IonHeader],
})
export class HeaderModalComponent implements OnInit {
  @Input() title: string;

  constructor(private modalCtrl: ModalController) {
    addIcons({ close });
  }

  ngOnInit() {}

  closeModal() {
    this.modalCtrl.dismiss();
  }
}
