import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Component1Component } from './component1/component1.component';
import { FormsModule } from '@angular/forms';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmployeeOverviewComponent } from './employee-overview/employee-overview.component';
import { EmployeeAgeComponent } from './employee-age/employee-age.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    EmployeeDetailComponent,
    EmployeeListComponent,
    PageNotFoundComponent,
    EmployeeProfileComponent,
    EmployeeOverviewComponent,
    EmployeeAgeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    AppRoutingModule
  ],
  //exports:[Component1Component],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
