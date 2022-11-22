import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentComponent } from './pages/department/department.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DepartmentComponent,
    
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    MatSidenavModule,
    SharedModule
  ]
})
export class DepartmentModule { }
