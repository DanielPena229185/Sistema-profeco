import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAuth0 } from '@auth0/auth0-angular';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAuth0({
    domain: 'dev-yy45fagy81uwtb43.us.auth0.com',
    clientId: '4xV5x8CJlcrniaNKvmJh1tZIFR3oSIwC',
    authorizationParams: {
      redirect_uri: window.location.origin,
    },
    cacheLocation: 'localstorage',
  }), Document],
};
