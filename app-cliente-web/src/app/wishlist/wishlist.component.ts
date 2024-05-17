import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShoppingCartListComponent } from '../components/shopping-cart-list/shopping-cart-list.component';
import { FavoriteStoresListComponent } from '../components/favorite-stores-list/favorite-stores-list.component';
@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule, FormsModule, ShoppingCartListComponent, FavoriteStoresListComponent],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css',
})
export class WishlistComponent {
  selectedOption: string = 'shoppingCart';

  selectOption(option: string) {
    this.selectedOption = option;
  }
}
