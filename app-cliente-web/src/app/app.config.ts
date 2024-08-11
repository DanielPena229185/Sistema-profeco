import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAuth0 } from '@auth0/auth0-angular';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './share/services/auth.interceptor.service';

export const appConfig: ApplicationConfig = {
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  },provideRouter(routes), provideAuth0({
    domain: 'dev-yy45fagy81uwtb43.us.auth0.com',
    clientId: '4xV5x8CJlcrniaNKvmJh1tZIFR3oSIwC',
    authorizationParams: {
      redirect_uri: window.location.origin,
    },
    cacheLocation: 'localstorage',
  }), Document],
};
