
import { Routes } from '@angular/router';

import { SignupComponent } from './core/signup/signup.component';
import { LoginComponent } from './core/login/login.component';
import { NewRegistrationComponent } from './core/new-registration/new-registration.component';

import { authGuard } from './auth.guard';
import { adminGuard } from './admin.guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./core/core.module').then(m => m.CoreModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),canActivate:[adminGuard]
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),canActivate:[authGuard]
  },

 
];
