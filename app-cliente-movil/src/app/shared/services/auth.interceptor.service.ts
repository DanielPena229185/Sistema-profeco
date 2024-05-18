import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { Observable, switchMap } from 'rxjs';
import { AuthInfoService } from './auth.info.service';
import { authGuard } from './auth.guard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {

  constructor(private readonly auth: AuthInfoService) { }

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
