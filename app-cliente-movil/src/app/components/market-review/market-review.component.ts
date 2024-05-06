import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalController, IonHeader, IonToolbar, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-market-review',
  standalone: true,
  templateUrl: './market-review.component.html',
  styleUrls: ['./market-review.component.scss'],
  imports: [IonContent, IonToolbar, IonHeader, CommonModule],
})
export class MarketReviewComponent  implements OnInit {

  constructor(
    private readonly modalCtrl: ModalController,
  ) { }

  ngOnInit() {}

  close(){
    this.modalCtrl.dismiss();
  }
}
