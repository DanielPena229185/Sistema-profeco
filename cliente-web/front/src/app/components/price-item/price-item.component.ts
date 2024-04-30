import { Component, Input } from '@angular/core';
import { MoneyFormatterPipe } from './pipes/money-formatter/money-formatter.pipe';

@Component({
  selector: 'app-price-item',
  standalone: true,
  imports: [MoneyFormatterPipe],
  templateUrl: './price-item.component.html',
  styleUrl: './price-item.component.css'
})
export class PriceItemComponent {
  @Input() price: number = 0;
}
