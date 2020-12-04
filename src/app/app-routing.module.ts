import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { EmployeeAgeComponent } from './employee-age/employee-age.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeOverviewComponent } from './employee-overview/employee-overview.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo:'/home',pathMatch:'full' },
  { path: 'employee-detail', component:EmployeeDetailComponent  },
  { path: 'employee-detail/:id', component:EmployeeProfileComponent,
  children:[
    { path: 'overview', component:EmployeeOverviewComponent  },
    { path: 'age', component:EmployeeAgeComponent  }
  ]
},

  { path: 'employee-list', component:EmployeeListComponent},
  { path: 'home', component:Component1Component},
  { path: '**', component:PageNotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export const routingcomponents=[EmployeeDetailComponent,EmployeeListComponent];
