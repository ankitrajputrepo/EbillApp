import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { NewRegistrationComponent } from './new-registration/new-registration.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'signup',
    component: SignupComponent
  },
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'newconnection',
    component:NewRegistrationComponent
  },
  {
    path:'forget',
    component:ForgotpasswordComponent
  }
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),ReactiveFormsModule
  ]
})
export class CoreModule { }
