import { Component, OnInit } from '@angular/core';
import { ProductDTO } from './products.types';
import { CommonModule } from '@angular/common';
import { ProductPricesComponent } from '../components/product-prices/product-prices.component';
import { MatDialog } from '@angular/material/dialog';
import {ProductsService} from './products.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductPricesComponent,HttpClientModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers:[ProductsService]
})
export class ProductsComponent implements OnInit {
  columns = 0;
  products: ProductDTO[] = [];
  showLoading: boolean = true;

  constructor(
    private readonly dialog: MatDialog,
    private readonly productService:ProductsService) {}

  ngOnInit() {
    this.initProducts();
    this.calculateColumns();
    this.showLoading = false;
  }

  goToProductPrices(product: ProductDTO) {
    this.dialog.open(ProductPricesComponent, {
      data: product,
    });
  }

  calculateColumns() {
    this.columns = Math.ceil(this.products.length / 8);
  }

  private initProducts() {
     this.productService.getProducts().subscribe({
      next:(res:ProductDTO[])=>{
        this.products= res;
      }
     });
    /*this.products = [
      {
        id: '001',
        name: 'Arroz',
        imageUrl:
          'https://www.costco.com.mx/medias/sys_master/products/hbc/h81/114806758735902.jpg',
        details: 'Arroz blanco de grano largo.',
      },
      {
        id: '002',
        name: 'Frijoles',
        imageUrl:
          'https://www.soriana.com/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dwf4f40cfe/images/product/7501071301353_A.jpg',
        details: 'Frijoles negros de la marca tradicional.',
      },
      {
        id: '003',
        name: 'Leche',
        imageUrl:
          'https://d1zc67o3u1epb0.cloudfront.net/media/catalog/product/2/7/2716_1_2.jpg?width=265&height=390&store=default&image-type=image',
        details: 'Leche entera en envase de 1 litro.',
      },
      {
        id: '004',
        name: 'Huevo',
        imageUrl:
          'https://imgs.search.brave.com/AiwfHhVG1krZ50ZPtZmbVhHKYOIPHqezGmzuAJxlusM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pY2hl/Zi5iYmNpLmNvLnVr/L2FjZS93cy82NDAv/Y3BzcHJvZHBiLzAx/NkUvcHJvZHVjdGlv/bi9fMTE1NzY2MzAw/X2dldHR5aW1hZ2Vz/LTExODUxMjg4NDgu/anBn',
        details: 'Huevo blanco, tamaño grande, paquete de 12 unidades.',
      },
      {
        id: '005',
        name: 'Pan',
        imageUrl:
          'https://tienda.maqs.com.mx/wp-content/uploads/2021/12/411.jpg',
        details: 'Pan blanco de caja, paquete de 500 gramos.',
      }
    ];*/
  }
}
