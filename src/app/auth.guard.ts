import { CanActivateFn, Router } from '@angular/router';
import { inject, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);

  try {
   
    if (isPlatformBrowser(platformId)) {
    
      const isLoggedIn = !!sessionStorage.getItem('user');
      
      if (isLoggedIn) {
       
        return true;
      } else {
       
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
