import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarOption } from './nav-bar-types';
import { CommonModule } from '@angular/common';
import { environment } from '../../enviroment/enviroment';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  options: NavBarOption[] = [
    {
      text: 'Inicio',
      route: '/inicio',
      icon: `${environment.assestsIcons}/png/home.png`,
    },
    {
      text: 'Productos',
      route: '/productos',
      icon: `${environment.assestsIcons}/png/pricetags.png`,
    },
    {
      text: 'Tiendas',
      route: '/tiendas',
      icon: `${environment.assestsIcons}/png/storefront.png`,
    },
    {
      text: 'Lista de deseos',
      route: '/lista-de-deseos',
      icon: `${environment.assestsIcons}/png/heart-circle.png`,
    },
    {
      text: 'Publicaciones',
      route: '/publicaciones',
      icon: `${environment.assestsIcons}/png/copy.png`,
    },
  ];

  constructor(private readonly router: Router) {}

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  goHome(): void {
    this.router.navigate(['/inicio']);
  }
}
