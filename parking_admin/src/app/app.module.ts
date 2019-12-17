import 'hammerjs';
import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule, RequestOptions } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PrettyJsonModule } from 'angular2-prettyjson';


//todo : CREATE not found component
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { AuthGuard }        from './guards/auth.guard';

import { AuthenticationService } from './service/authentication.service';
import { CommonService } from './service/common.service';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminModule } from './admin/admin.module';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxDatatableModule,
    FormsModule,
    HttpModule,
    AdminModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    PrettyJsonModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
