import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map, take } from 'rxjs/operators';
import { AuthInformationService } from './auth-information.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authInfoService = inject(AuthInformationService);
  const router = inject(Router);

  return authInfoService.isLoggedIn().pipe(
    take(1),
    map((isAuthenticated) => {
      if (isAuthenticated) {
        authInfoService.getUserInfo().subscribe((user) => {
          console.log(user);
        });
        return true;
      } else {
        router.navigate(['/inicio']);
        return false;
      }
    })
  );
};
