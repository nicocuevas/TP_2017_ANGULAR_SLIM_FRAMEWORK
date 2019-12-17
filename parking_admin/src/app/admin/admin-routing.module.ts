import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../guards/auth.guard';

import { AdminComponent }  from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { UsersComponent }  from './users/users.component';
import { UserAddComponent } from './users/user-add.component';
import { UserEditComponent } from './users/user-edit.component';
import { UsersAuditComponent } from './users-audit/users-audit.component';

import { LotsComponent } from './lots/lots.component';
import { ParkingComponent } from './parking/parking.component';
import { ProfileComponent } from './profile/profile.component';

import { CustomerComponent } from './customer/customer.component';
import { CustomerAddComponent } from './customer/customer-add.component';
import { CustomerEditComponent } from './customer/customer-edit.component';

import { ReportsComponent } from './reports/reports.component';
import { BillingComponent } from './reports/billing/billing.component';
import { AverageComponent } from './reports/average/average.component';
import { LotsReportComponent } from './reports/lots-report/lots-report.component';



const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          { path: '', component: ReportsComponent },

          { path: 'users', component: UsersComponent },
          { path: 'users/edit/:id', component: UserEditComponent },
          { path: 'users/add', component: UserAddComponent },
          { path: 'audit', component: UsersAuditComponent },

          { path: 'customers', component: CustomerComponent },
          { path: 'customers/edit/:id', component: CustomerEditComponent },
          { path: 'customers/add', component: CustomerAddComponent },

          {path: 'lots', component: LotsComponent},
          {path: 'parking', component: ParkingComponent},
          {path: 'profile', component: ProfileComponent},

          {path: 'reports', component: ReportsComponent},
          {path: 'reports/lots', component: LotsReportComponent},
          {path: 'reports/billing', component: BillingComponent},
          {path: 'reports/average', component: AverageComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}
