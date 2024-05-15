import { Injectable } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthInformationService {

  constructor(private authService: AuthService,
  ) {}

  isLoggedIn(): Observable<boolean> {
    return this.authService.isAuthenticated$.pipe(
      map((isAuthenticated) => isAuthenticated)
    );
  }

  getUserInfo(): Observable<User | null> {
    return this.authService.user$;
  }
}
