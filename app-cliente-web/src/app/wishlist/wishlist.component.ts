import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {

  selectedOption: string = 'shoppingCart';

  selectOption(option: string) {
    this.selectedOption = option;
  }
}
