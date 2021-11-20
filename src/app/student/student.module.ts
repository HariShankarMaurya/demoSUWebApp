import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { UserTrackOrderComponent } from './user-track-order/user-track-order.component';


@NgModule({
  declarations: [
    DashboardComponent,
    EditAccountComponent,
    OrderDetailsComponent,
    UserOrdersComponent,
    UserTrackOrderComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
