import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MarketPreferenceService } from './market-preference.service';
import { MarketDTO } from './market-preference.types';
@Component({
  selector: 'app-market-preference',
  templateUrl: './market-preference.component.html',
  styleUrls: ['./market-preference.component.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule,HttpClientModule],
  providers:[MarketPreferenceService]
})
export class MarketPreferenceComponent  implements OnInit {
  markets: MarketDTO[] = [];
  constructor(
    private readonly marketPreferenceService:MarketPreferenceService,
  ) {}

  ngOnInit() {
    this.initMarkets();
    //this.getMarketsPrefered();
  }

  initMarkets(){
    this.markets=[
      {
        id:'001',
        address: "Av. Springfiled",
        name:'Walmart',
        urlImg:'https://thelogisticsworld.com/wp-content/uploads/2023/04/walmart-2.jpg'
      },
      {
        id:'002',
        address: "Av. Springfiled",
        name:'Bodega Aurrera',
        urlImg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyOH5IyWyQplolLNLpfRuq_umkUTOp986vRcVGBv9sTA&s'
      },
      {
        id:'003',
        address: "Av. Springfiled",
        name:'Costco',
        urlImg:'https://tb-static.uber.com/prod/image-proc/processed_images/096dc71e8c35944dbaec37ce43b0ea53/c9252e6c6cd289c588c3381bc77b1dfc.jpeg'
      }
    ]
  }

  getMarketsPrefered() {
    this.marketPreferenceService.getMarketsPreference('USER_ID').subscribe({
      next: (response: MarketDTO[]) => {
        Array.prototype.push.apply(this.markets, response);
      }
    })
  }

}
