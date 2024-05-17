import { Component, Input, OnInit } from '@angular/core';
import { Option } from './menu.types';
import { CommonModule } from '@angular/common';
import { IonMenu, IonList, IonContent, IonItem, IonMenuToggle, IonIcon, IonFooter, IonToolbar, IonHeader, IonTitle } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { copy, heartCircle, home, pricetags, storefront } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [IonTitle, IonHeader, IonToolbar, IonFooter, IonIcon, IonItem, IonContent, CommonModule, HeaderComponent,IonMenu, IonList, IonMenuToggle]
})
export class MenuComponent  implements OnInit {

  @Input() contId: string;
  @Input() color: string;
  options: Option[] = [];

  constructor(
    private readonly router: Router
  ) { 
    addIcons({ pricetags, copy, storefront, heartCircle });
  }

  ngOnInit() {
    this.initMenuOptions();
  }

  initMenuOptions() {
    this.options = [
      { name: 'Productos', url: '/products', icon: 'pricetags' },
      { name: 'Tiendas', url: '/markets', icon: 'storefront' },
      { name: 'Lista de deseos', url: '/wishlist', icon: 'heart-circle' },
      { name: 'Publicaciones', url: '/posts', icon: 'copy' },
    ]
  }

  goToPage(option: Option) {
    this.router.navigate([option.url]);
  }

}
