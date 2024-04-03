import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonRefresher, IonRefresherContent, IonChip } from '@ionic/angular/standalone';
import { HeaderComponent } from '../components/header/header.component';
import { ProductoDTO } from './comparar.types';

@Component({
  selector: 'app-comparar',
  templateUrl: './comparar.page.html',
  styleUrls: ['./comparar.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    HeaderComponent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonRefresher,
    IonRefresherContent,
    IonChip]
})
export class CompararPage implements OnInit {

  productos: ProductoDTO[] = [];

  constructor() { }

  ngOnInit() {
    this.iniciarProductos();
  }

  handleRefresh(event) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }

  private iniciarProductos() {
    this.productos = [
      {
        id: "001",
        nombre: "Samsung Galaxy S21",
        imagen: "https://imgs.search.brave.com/fVBS29Z8inr_hAfexR4e1tLg45CjJJC0m_FH--XRsZM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLmJs/b2dzLmVzLzM4MTky/Mi9zYW1zdW5nLWdh/bGF4eS1hMjEtMS80/NTBfMTAwMC53ZWJw",
        detalles: "Pantalla AMOLED de 6.2 pulgadas, cámara triple de 64MP, 8GB de RAM, 128GB de almacenamiento interno.",
      },
      {
        id: "002",
        nombre: "Dell XPS 13",
        imagen: "https://imgs.search.brave.com/YDM2bbSYf9jWYGOB4dItrycjWW8G84Kps8lzEEwUP5Q/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/Y25ldC5jb20vYS9p/bWcvcmVzaXplLzc1/ODI4NGIwODIzNWY3/ZWFmYWRkOTE0N2M4/OTZjYmM0NDdhNzkx/OTAvaHViLzIwMTkv/MDEvMDQvZTliOGRi/NzAtYzQxYS00NDQw/LTljMWQtMGRlOGE4/OTdhZWVmL2RlbGwt/eHBzLTEzLTE3Lmpw/Zz9hdXRvPXdlYnAm/d2lkdGg9MTIwMA",
        detalles: "Procesador Intel Core i7 de 11ª generación, pantalla InfinityEdge de 13.4 pulgadas, 16GB de RAM, 512GB SSD.",
      },
      {
        id: "003",
        nombre: "Apple Watch Series 7",
        imagen: "https://imgs.search.brave.com/3sxx8u8TBesl7HHlEXwT0cAyr1kljCl7qWKKH3Zm64o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/YXBwbGUuY29tL3Yv/YXBwbGUtd2F0Y2gt/c2VyaWVzLTcvYy9p/bWFnZXMvb3ZlcnZp/ZXcvZGlzcGxheS9k/aXNwbGF5X2RpbWVu/c2lvbl9zN19zdGF0/aWNfX2VyNDd2dmUz/Z2F3bV9sYXJnZS5q/cGc",
        detalles: "Pantalla Retina siempre activa, resistente al agua hasta 50 metros, seguimiento avanzado de actividad.",
      },
      {
        id: "004",
        nombre: "Sony WH-1000XM4",
        imagen: "https://imgs.search.brave.com/HzFBZx_lA5fy_zXlaN7mZduskXF36CYXJ_Ca-xyJ2HE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzUxU0ttdTJHOUZM/LmpwZw",
        detalles: "Cancelación de ruido líder en la industria, hasta 30 horas de duración de la batería, control táctil intuitivo.",
      },
      {
        id: "005",
        nombre: "Canon EOS R5",
        imagen: "https://imgs.search.brave.com/i21SmmmYo6L855nqKvkETxankO-8MXgSkSQfXgleFQU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzYxbEt3dnR6UnpM/LmpwZw",
        detalles: "Sensor CMOS de fotograma completo de 45MP, grabación de video 8K RAW, estabilización de imagen de 5 ejes.",
      },
      {
        id: "006",
        nombre: "PlayStation 5",
        imagen: "https://imgs.search.brave.com/IhqT5s7YptRhrWNojFveDU91cZL2t91TZ20CH6pt1nQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS5teC9tZy9n/bS8zcHAvYXNyLzYw/OTE3NjgwLWUwZWUt/NGQ4Yi04ODcxLTky/MDczNDg3MjUzZi5j/NTNlNjE3NmQ5ZDEy/MDE1OWQ3OGVjMzky/ZDI0MGE4MC5qcGVn/P29kbkhlaWdodD01/ODAmb2RuV2lkdGg9/NTgwJm9kbkJnPUZG/RkZGRg",
        detalles: "Gráficos de última generación con trazado de rayos, SSD ultra rápido, controlador DualSense con retroalimentación háptica.",
      },
      {
        id: "007",
        nombre: "iPad Pro (2021)",
        imagen: "https://imgs.search.brave.com/GBmxMjM9lesjST-mSvuCuBfHGTb15nyRbTdwUJhm5hU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/MzFKbjVrS08zWUwu/anBn",
        detalles: "Pantalla Liquid Retina XDR de 12.9 pulgadas, chip M1 de Apple, compatibilidad con Apple Pencil y Magic Keyboard.",
      },
      {
        id: "008",
        nombre: "LG UltraGear 27GN950-B",
        imagen: "https://imgs.search.brave.com/99QSlRjhbNgl9iXbF4uSGRZ4Y1iF8jpLdORZ6lLs3UE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFNcEhnc0czS0wu/anBn",
        detalles: "Panel Nano IPS de 27 pulgadas con resolución 4K, frecuencia de actualización de 144Hz, compatibilidad con G-SYNC.",
      },
      {
        id: "009",
        nombre: "Creality Ender 3 V2",
        imagen: "https://imgs.search.brave.com/VIlAbO6xFRbaA4PYLiKq74rgIRrCKeYKN310e1tYcGg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/M2RtYXJrZXQubXgv/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDMvSW1wcmVzb3Jh/LTNELUVuZGVyLTMt/VjItZGUtQ3JlYWxp/dHktM0QtTUFSS0VU/LndlYnA",
        detalles: "Fácil montaje en 10 minutos, volumen de impresión de 220 x 220 x 250 mm, tecnología de extrusión mejorada.",
      },
      {
        id: "010",
        nombre: "JBL Flip 5",
        imagen: "https://imgs.search.brave.com/rT4hnhZvy4miWE98zxSfIcwbDXyICWgMtQo97BP9sVM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDEyVDhGVEp5bkwu/anBn",
        detalles: "Sonido potente con graves profundos, resistente al agua y al polvo, hasta 12 horas de reproducción continua.",
      },
    ];
  }

}
