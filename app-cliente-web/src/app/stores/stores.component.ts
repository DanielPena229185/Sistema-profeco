import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MarketItemComponent } from '../components/market-item/market-item.component';

@Component({
  selector: 'app-stores',
  standalone: true,
  imports: [CommonModule, MarketItemComponent],
  templateUrl: './stores.component.html',
  styleUrl: './stores.component.css'
})
export class StoresComponent {

}
