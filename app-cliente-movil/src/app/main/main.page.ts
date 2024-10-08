import { Component, EnvironmentInjector, OnInit, ViewChild, inject } from '@angular/core';
import { IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { copy, home, pricetags, storefront } from 'ionicons/icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel]
})
export class MainPage implements OnInit {

  selectTab: any;
  @ViewChild('tabs') tabs: IonTabs;

  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({ home, pricetags, copy, storefront });
   }

  ngOnInit() {
  }

  setCurrentTab(event: any) {
    this.selectTab = this.tabs.getSelected();
  }

}
