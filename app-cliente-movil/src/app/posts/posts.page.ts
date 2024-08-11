
import { Component, OnInit } from '@angular/core';
import { IonicModule} from '@ionic/angular';
import { HeaderComponent } from '../components/header/header.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PostsService } from './posts.service';
import { DealDTO } from './posts.types';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
     HeaderComponent,
    HttpClientModule,
    IonicModule
  ],
  providers: [PostsService]
})
export class PostsPage implements OnInit {
  deals:DealDTO[]=[];
  constructor(
    private readonly postService:PostsService,
  ) {}

  ngOnInit() {
    this.initDeals();
    this.getDeals();
  }
  
  handleRefresh(event) {
    setTimeout(() => {
      this.getDeals();
      event.target.complete();
    }, 2000);
  }

  private initDeals(){
    this.deals=[
      {
        id:'1',
        date:'Martes 21 2020',
        description: 'Descuento de arroz de 20 pesos a solo 20 pesos y solamente asi ser por el resto del dia',
        market:{
          id: '1',
          name:'market_name',
          img:'https://thelogisticsworld.com/wp-content/uploads/2023/04/walmart-2.jpg'
        },
        oldPrice: 20,
        newPrice: 20,
        product:{
          id:'1',
          name:'Arroz',
          img:'https://www.costco.com.mx/medias/sys_master/products/hbc/h81/114806758735902.jpg'
        }
      },
      {
        id:'1',
        date:'Martes 21 2020',
        description: 'Arroz blanco de grano largo.',
        market:{
          id: '1',
          name:'market_name',
          img:'https://thelogisticsworld.com/wp-content/uploads/2023/04/walmart-2.jpg'
        },
        oldPrice: 20,
        newPrice: 20,
        product:{
          id:'1',
          name:'product_name',
          img:'https://www.costco.com.mx/medias/sys_master/products/hbc/h81/114806758735902.jpg'
        }
      },
    ]
  }

  private getDeals(){
    this.postService.getDeals().subscribe({
      next: (response:DealDTO[])=>{
        Array.prototype.push.apply(this.deals,response)
      },
      error:()=>{},
    });
  }
}