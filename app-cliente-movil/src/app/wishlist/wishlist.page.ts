import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../components/header/header.component';
import { FormsModule } from '@angular/forms';
import { ProductsPreferenceComponent } from '../components/products-preference/products-preference.component';
import { MarketPreferenceComponent } from '../components/market-preference/market-preference.component';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    FormsModule, 
    CommonModule, 
    HeaderComponent,
    ProductsPreferenceComponent,
    MarketPreferenceComponent]
})
export class WishlistPage implements OnInit {

  option:string = "productos";
  constructor() { }

  ngOnInit() {
  }

  handleRefresh(event) {
    setTimeout(() => {
      //this.getProducts();
      event.target.complete();
    }, 2000);
  }

}