import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MarketItemComponent } from '../components/market-item/market-item.component';
import { MarketDTO } from './stores.types';

@Component({
  selector: 'app-stores',
  standalone: true,
  imports: [CommonModule, MarketItemComponent],
  templateUrl: './stores.component.html',
  styleUrl: './stores.component.css',
})
export class StoresComponent implements OnInit {

  markets: MarketDTO[] = [];
  columns: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.getMarkets();
  }

  calculateColumns() {
    this.columns = Math.ceil(this.markets.length / 8);
  }

  getMarkets() {
    this.markets = [
      {
        id: '1',
        name: 'Market 1',
        address: 'Description 1',
        urlImg: 'https://via.placeholder.com/150',
      },
      {
        id: '2',
        name: 'Market 2',
        urlImg: 'https://via.placeholder.com/150',
        address: 'Address 2',
      },
      {
        id: '3',
        name: 'Market 3',
        urlImg: 'https://via.placeholder.com/150',
        address: 'Address 3',
      },
      {
        id: '4',
        name: 'Market 4',
        urlImg: 'https://via.placeholder.com/150',
        address: 'Address 4',
      },
      // {
      //   id: '5',
      //   name: 'Market 5',
      //   urlImg: 'https://via.placeholder.com/150',
      //   address: 'Address 5',
      // },
      // {
      //   id: '6',
      //   name: 'Market 6',
      //   urlImg: 'https://via.placeholder.com/150',
      //   address: 'Address 6',
      // },
      // {
      //   id: '7',
      //   name: 'Market 7',
      //   urlImg: 'https://via.placeholder.com/150',
      //   address: 'Address 7',
      // },
      // {
      //   id: '8',
      //   name: 'Market 8',
      //   urlImg: 'https://via.placeholder.com/150',
      //   address: 'Address 8',
      // },
      // {
      //   id: '9',
      //   name: 'Market 9',
      //   urlImg: 'https://via.placeholder.com/150',
      //   address: 'Address 9',
      // },
    ];
  }
}
