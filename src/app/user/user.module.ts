import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PaymentComponent } from "./payment/payment.component";
import { HistoryComponent } from "./history/history.component";
import { ContactComponent } from "./contact/contact.component";
import { FeedbackComponent } from "./feedback/feedback.component";


export const routes: Routes = [

  {
    path:'',component:DashboardComponent
  },
  {
    path:'payment',component:PaymentComponent
  },
  {
    path:'history',component:HistoryComponent
  },
  {
    path:'contactUs',component:ContactComponent
  },
  {
    path:'feedback',component:FeedbackComponent
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
export class UserModule { }
