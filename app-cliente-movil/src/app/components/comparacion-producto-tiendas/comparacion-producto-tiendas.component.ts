import { Component, OnInit } from '@angular/core';
import { ProductoDTO } from './comparacion-producto-tiendas.component.types';
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonChip,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonThumbnail,
  IonTitle,
  IonToolbar,
  ModalController,
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { DineroFormatoPipe } from './pipes/dinero-formato/dinero-formato.pipe';

@Component({
  selector: 'app-comparacion-producto-tiendas',
  templateUrl: './comparacion-producto-tiendas.component.html',
  styleUrls: ['./comparacion-producto-tiendas.component.scss'],
  standalone: true,
  imports: [
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonLabel,
    IonItem,
    IonThumbnail,
    IonList,
    CommonModule,
    IonChip,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonButton,
    IonButtons,
    DineroFormatoPipe,
  ],
})
export class ComparacionProductoTiendasComponent implements OnInit {
  productoId: string;
  producto: ProductoDTO;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    this.obtenerProductoById(this.productoId);
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

  obtenerProductoById(productoId: string) {
    switch (productoId) {
      case '001':
        this.producto = {
          id: '001',
          nombre: 'Arroz',
          imagen:
            'https://www.costco.com.mx/medias/sys_master/products/hbc/h81/114806758735902.jpg',
          detalles: 'Arroz blanco de grano largo.',
          tiendas: [
            {
              id: '001',
              nombre: 'Bodega Aurrera',
              imagen:
                'https://www.univision.com/proxy/api/cached/picture?href=https%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2Fassets%2Fvixes%2Fpictures%2Fpicture-22813-1627918219.png&width=0&height=0&ratio_width=303&ratio_height=303&resize_option=Fill%20Area',
              precioProducto: 39.5,
            },
            {
              id: '002',
              nombre: 'Walmart',
              imagen:
                'https://www.walmartconnect.com.mx/wp-content/uploads/2022/12/WM-SC-300x300.png',
              precioProducto: 40,
            },
            {
              id: '003',
              nombre: 'Soriana',
              imagen:
                'https://www.debate.com.mx/__export/1706387074478/sites/debate/img/2024/01/27/soriana.png_423682103.png',
              precioProducto: 37.8,
            },
            {
              id: '004',
              nombre: 'Ley',
              imagen:
                'https://upload.wikimedia.org/wikipedia/commons/c/c4/CASALEY.jpg',
              precioProducto: 38.5,
            },
            {
              id: '005',
              nombre: 'Oxxo',
              imagen:
                'https://www.axondigital.mx/wp-content/uploads/2019/10/Oxxoapp.jpg',
              precioProducto: 37.5,
            },
          ],
        };
        break;
      case '002':
        this.producto = {
          id: '002',
          nombre: 'Frijoles',
          imagen:
            'https://www.soriana.com/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dwf4f40cfe/images/product/7501071301353_A.jpg',
          detalles: 'Frijoles negros de la marca tradicional.',
          tiendas: [
            {
              id: '001',
              nombre: 'Bodega Aurrera',
              imagen:
                'https://www.univision.com/proxy/api/cached/picture?href=https%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2Fassets%2Fvixes%2Fpictures%2Fpicture-22813-1627918219.png&width=0&height=0&ratio_width=303&ratio_height=303&resize_option=Fill%20Area',
              precioProducto: 39.5,
            },
            {
              id: '002',
              nombre: 'Walmart',
              imagen:
                'https://www.walmartconnect.com.mx/wp-content/uploads/2022/12/WM-SC-300x300.png',
              precioProducto: 40,
            },
            {
              id: '003',
              nombre: 'Soriana',
              imagen:
                'https://www.debate.com.mx/__export/1706387074478/sites/debate/img/2024/01/27/soriana.png_423682103.png',
              precioProducto: 37.8,
            },
            {
              id: '004',
              nombre: 'Ley',
              imagen:
                'https://upload.wikimedia.org/wikipedia/commons/c/c4/CASALEY.jpg',
              precioProducto: 38.5,
            },
            {
              id: '005',
              nombre: 'Oxxo',
              imagen:
                'https://www.axondigital.mx/wp-content/uploads/2019/10/Oxxoapp.jpg',
              precioProducto: 37.5,
            },
          ],
        };
        break;
      case '003':
        this.producto = {
          id: '003',
          nombre: 'Leche',
          imagen:
            'https://d1zc67o3u1epb0.cloudfront.net/media/catalog/product/2/7/2716_1_2.jpg?width=265&height=390&store=default&image-type=image',
          detalles: 'Leche entera en envase de 1 litro.',
          tiendas: [
            {
              id: '001',
              nombre: 'Bodega Aurrera',
              imagen:
                'https://www.univision.com/proxy/api/cached/picture?href=https%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2Fassets%2Fvixes%2Fpictures%2Fpicture-22813-1627918219.png&width=0&height=0&ratio_width=303&ratio_height=303&resize_option=Fill%20Area',
              precioProducto: 39.5,
            },
            {
              id: '002',
              nombre: 'Walmart',
              imagen:
                'https://www.walmartconnect.com.mx/wp-content/uploads/2022/12/WM-SC-300x300.png',
              precioProducto: 40,
            },
            {
              id: '003',
              nombre: 'Soriana',
              imagen:
                'https://www.debate.com.mx/__export/1706387074478/sites/debate/img/2024/01/27/soriana.png_423682103.png',
              precioProducto: 37.8,
            },
            {
              id: '004',
              nombre: 'Ley',
              imagen:
                'https://upload.wikimedia.org/wikipedia/commons/c/c4/CASALEY.jpg',
              precioProducto: 38.5,
            },
            {
              id: '005',
              nombre: 'Oxxo',
              imagen:
                'https://www.axondigital.mx/wp-content/uploads/2019/10/Oxxoapp.jpg',
              precioProducto: 37.5,
            },
          ],
        };
        break;
      case '004':
        this.producto = {
          id: '004',
          nombre: 'Huevo',
          imagen:
            'https://chedrauimx.vtexassets.com/arquivos/ids/27977575/7501101525513_00.jpg?v=638465072267700000',
          detalles: 'Huevo blanco, tamaño grande, paquete de 12 unidades.',
          tiendas: [
            {
              id: '001',
              nombre: 'Bodega Aurrera',
              imagen:
                'https://www.univision.com/proxy/api/cached/picture?href=https%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2Fassets%2Fvixes%2Fpictures%2Fpicture-22813-1627918219.png&width=0&height=0&ratio_width=303&ratio_height=303&resize_option=Fill%20Area',
              precioProducto: 39.5,
            },
            {
              id: '002',
              nombre: 'Walmart',
              imagen:
                'https://www.walmartconnect.com.mx/wp-content/uploads/2022/12/WM-SC-300x300.png',
              precioProducto: 40,
            },
            {
              id: '003',
              nombre: 'Soriana',
              imagen:
                'https://www.debate.com.mx/__export/1706387074478/sites/debate/img/2024/01/27/soriana.png_423682103.png',
              precioProducto: 37.8,
            },
            {
              id: '004',
              nombre: 'Ley',
              imagen:
                'https://upload.wikimedia.org/wikipedia/commons/c/c4/CASALEY.jpg',
              precioProducto: 38.5,
            },
            {
              id: '005',
              nombre: 'Oxxo',
              imagen:
                'https://www.axondigital.mx/wp-content/uploads/2019/10/Oxxoapp.jpg',
              precioProducto: 37.5,
            },
          ],
        };
        break;
      case '005':
        this.producto = {
          id: '005',
          nombre: 'Pan',
          imagen:
            'https://tienda.maqs.com.mx/wp-content/uploads/2021/12/411.jpg',
          detalles: 'Pan blanco de caja, paquete de 500 gramos.',
          tiendas: [
            {
              id: '001',
              nombre: 'Bodega Aurrera',
              imagen:
                'https://www.univision.com/proxy/api/cached/picture?href=https%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2Fassets%2Fvixes%2Fpictures%2Fpicture-22813-1627918219.png&width=0&height=0&ratio_width=303&ratio_height=303&resize_option=Fill%20Area',
              precioProducto: 39.5,
            },
            {
              id: '002',
              nombre: 'Walmart',
              imagen:
                'https://www.walmartconnect.com.mx/wp-content/uploads/2022/12/WM-SC-300x300.png',
              precioProducto: 40,
            },
            {
              id: '003',
              nombre: 'Soriana',
              imagen:
                'https://www.debate.com.mx/__export/1706387074478/sites/debate/img/2024/01/27/soriana.png_423682103.png',
              precioProducto: 37.8,
            },
            {
              id: '004',
              nombre: 'Ley',
              imagen:
                'https://upload.wikimedia.org/wikipedia/commons/c/c4/CASALEY.jpg',
              precioProducto: 38.5,
            },
            {
              id: '005',
              nombre: 'Oxxo',
              imagen:
                'https://www.axondigital.mx/wp-content/uploads/2019/10/Oxxoapp.jpg',
              precioProducto: 37.5,
            },
          ],
        };
        break;
    }
  }
}
