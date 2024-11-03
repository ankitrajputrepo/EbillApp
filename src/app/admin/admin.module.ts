import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UsersComponent } from './users/users.component';
import { MessageComponent } from './message/message.component';
import { ConnectionsComponent } from './connections/connections.component';

export const routes: Routes = [

  {
    path:'', component:AdmindashboardComponent
  },
  {
    path:'users',component:UsersComponent
  },
  {
    path:'messages',component:MessageComponent
  },
  {
    path:'connections',component:ConnectionsComponent
  }

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)
  ]
})
export class AdminModule { 
}
