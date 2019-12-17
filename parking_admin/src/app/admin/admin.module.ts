import 'hammerjs';
import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { Ng2CompleterModule } from "ng2-completer";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PrettyJsonModule } from 'angular2-prettyjson';

// services
import { UserService } from '../service/user.service';
import { UserGroupService } from '../service/user-group.service';
import { UserAuditService } from '../service/user-audit.service';
import { CustomerService } from '../service/customer.service';
import { VehicleService } from '../service/vehicle.service';
import { VehicleTypeService } from '../service/vehicle-type.service';
import { BrandService } from '../service/brand.service';
import { SectionService } from '../service/section.service';
import { LotService } from '../service/lot.service';
import { RentLotService } from '../service/rentlot.service';
import { RentTypeService } from '../service/rent-type.service';
import { RentStatusService } from '../service/rent-status.service';

import { AdminComponent }           from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AdminRoutingModule }       from './admin-routing.module';
import { DatatableComponent } from './datatable/datatable.component';
import { UsersComponent } from './users/users.component';
import { UserAddComponent } from './users/user-add.component';
import { UserEditComponent } from './users/user-edit.component';
import { UserGroupComponent } from './user-group/user-group.component';
import { UserGroupEditComponent } from './user-group/user-group-edit.component';
import { UserGroupAddComponent } from './user-group/user-group-add.component';
import { ParkingComponent } from './parking/parking.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerAddComponent } from './customer/customer-add.component';
import { CustomerEditComponent } from './customer/customer-edit.component';
import { UsersAuditComponent } from './users-audit/users-audit.component';
import { ProfileComponent } from './profile/profile.component';
import { ReportsComponent } from './reports/reports.component';
import { LotsComponent } from './lots/lots.component';
import { BillingComponent } from './reports/billing/billing.component';
import { AverageComponent } from './reports/average/average.component';
import { LotsReportComponent } from './reports/lots-report/lots-report.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    Ng2CompleterModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AdminRoutingModule,
    NgbModule,
    PrettyJsonModule,
  ],
  declarations: [
    AdminComponent,
    DashboardComponent,
    UsersComponent,
    UserAddComponent,
    UserEditComponent,
    UserGroupComponent,
    UserGroupEditComponent,
    UserGroupAddComponent,
    ParkingComponent,
    CustomerComponent,
    CustomerAddComponent,
    CustomerEditComponent,
    DatatableComponent,
    UsersAuditComponent,
    ProfileComponent,
    ReportsComponent,
    LotsComponent,
    BillingComponent,
    AverageComponent,
    LotsReportComponent
  ],
  providers:[
    DatatableComponent,
    UserService,
    UserGroupService,
    UserAuditService,
    CustomerService,
    VehicleService,
    VehicleTypeService,
    BrandService,
    SectionService,
    LotService,
    RentLotService,
    RentTypeService,
    RentStatusService
  ]
})
export class AdminModule {}
