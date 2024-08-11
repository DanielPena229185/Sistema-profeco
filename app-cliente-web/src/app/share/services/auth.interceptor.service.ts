import { Injectable } from '@angular/core';
import { AuthInformationService } from './auth-information.service';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { User } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {

  constructor(private readonly auth: AuthInformationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.auth.getUserToken().pipe(
      switchMap((token) => {
        return this.auth.getUserInfo().pipe(
          switchMap((user: User | null) => {
            let headers = req.headers.set('Authorization', `Bearer ${token}`);
            if (user && user.email) {
              headers = headers.set('email', user.email);
            }
            const authReq = req.clone({ headers });
            return next.handle(authReq);
          })
        );
      })
    );
  }
}
