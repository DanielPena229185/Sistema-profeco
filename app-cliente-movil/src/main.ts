import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { provideAuth0 } from '@auth0/auth0-angular';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes),
    provideAuth0({
      domain: 'dev-yy45fagy81uwtb43.us.auth0.com',
      clientId: '4xV5x8CJlcrniaNKvmJh1tZIFR3oSIwC',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
      cacheLocation: 'localstorage',
    }),
  ],
});
