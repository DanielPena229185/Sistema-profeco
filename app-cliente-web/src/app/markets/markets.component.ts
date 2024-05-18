import { Component } from '@angular/core';
import { MarketDTO, SearchParamsDTO } from './markets.types';
import { CommonModule } from '@angular/common';
import { MarketItemComponent } from '../components/market-item/market-item.component';
import { MarketsService } from './markets.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-markets',
  standalone: true,
  imports: [CommonModule, MarketItemComponent, HttpClientModule],
  templateUrl: './markets.component.html',
  styleUrl: './markets.component.css',
  providers: [MarketsService]
})
export class MarketsComponent {

  markets: MarketDTO[] = [];
  columns: number = 0;
  searchParams: SearchParamsDTO;

  constructor(
    private readonly marketsService: MarketsService
  ) { }

  ngOnInit() {
    this.initSearchParams();
    this.getMarkets();
    this.calculateColumns();
  }

  initSearchParams() {
    this.searchParams = {
      fields: 'id,name,address,urlImage',
      relations: '',
      page: 0,
      limit: 10,
      name: '',
      address: '',
    };
  }

  calculateColumns() {
    this.columns = Math.ceil(this.markets.length / 8);
  }

  getMarkets() {
    debugger;
    this.marketsService.getMarkets(this.searchParams).subscribe({
      next: (markets: MarketDTO[]) => {
        Array.prototype.push.apply(this.markets, markets);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
