import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { MenuComponent } from './shared/components/menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, MenuComponent],
})
export class AppComponent {
  constructor() {}
}
