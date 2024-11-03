import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);

  try {
    if (isPlatformBrowser(platformId)) {
      const user = sessionStorage.getItem('user');
      if (user) {
        const userData = JSON.parse(user);
        if (userData.role === 'admin') {
          return true;
        } else {
          // Redirect to a default or unauthorized page for non-admin users
          router.navigate(['/home']);
          return false;
        }
      } else {
        // User is not logged in
        router.navigate(['/home/login']);
        return false;
      }
    } else {
      console.warn('Server-side access detected');
      return false;
    }
  } catch (error) {
    console.error('Error accessing sessionStorage:', error);
    router.navigate(['/home/login']);
    return false;
  }
};
