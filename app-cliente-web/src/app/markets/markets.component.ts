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
    
    this.marketsService.getMarkets(this.searchParams).subscribe({
      next: (markets: MarketDTO[]) => {
        Array.prototype.push.apply(this.markets, markets);
      },
      error: (error) => {
        console.error(error);
      }
    });
    
/*
    const walmartUno: MarketDTO = {
      id: '1',
      name: 'Walmart',
      urlImg: 'https://imgs.search.brave.com/U7osKveKZcGGjIKWin2bisv7Z_YGXQG2oDMWQ8isjnY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0LzVT/dEFiUkhMQTRaZHl6/UVpWaXZtMmMtMzIw/LTgwLmpwZw',
      address: 'México 15 1073, Zona Nte Comercial, 85000 Cdad. Obregón, Son.'
  };
  const walmartDos: MarketDTO = {
      id: '2',
      name: 'Walmart',
      urlImg: 'https://imgs.search.brave.com/U7osKveKZcGGjIKWin2bisv7Z_YGXQG2oDMWQ8isjnY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0LzVT/dEFiUkhMQTRaZHl6/UVpWaXZtMmMtMzIw/LTgwLmpwZw',
      address: 'Kiosco SC 2646, C. Sufragio Efectivo 901, Miravalle, 85000 Cdad. Obregón, Son.'
  };
  const bodegaAurreraUno: MarketDTO = {
      id: '3',
      name: 'Bodega Aurrera',
      urlImg: 'https://imgs.search.brave.com/kPf4v2D6Ohya9vDLbkUAB2cjmV30OfxV61Mwg0IQIyA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9uYS5s/ZWFmbGV0c2NkbnMu/Y29tL214L2RhdGEv/NC9sb2dvLndlYnA_/MmMyMjU1M2NlNzM5/NWExZTE0MzQ5ZDdj/MWNjOTMwN2Y',
      address: 'Zona Comercial, Blvd Rodolfo Elias Calles S/N Lote 2 Manzana 1, Blvd. Rodolfo Elías Calles S/N, Zona Comercial, 85013 Cdad. Obregón, Son.'
  };
  const bodegaAurreraDos: MarketDTO = {
      id: '4',
      name: 'Bodega Aurrera',
      urlImg: 'https://imgs.search.brave.com/kPf4v2D6Ohya9vDLbkUAB2cjmV30OfxV61Mwg0IQIyA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9uYS5s/ZWFmbGV0c2NkbnMu/Y29tL214L2RhdGEv/NC9sb2dvLndlYnA_/MmMyMjU1M2NlNzM5/NWExZTE0MzQ5ZDdj/MWNjOTMwN2Y',
      address: 'C. Michoacán S/N, Cumuripa, 85000 Cajame, Son.'
  };
   this.markets.push(walmartUno,walmartDos,bodegaAurreraDos,bodegaAurreraUno);
  */
  }
}
