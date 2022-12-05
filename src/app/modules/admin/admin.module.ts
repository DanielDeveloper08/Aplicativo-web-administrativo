import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './pages/admin/admin.component';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatNativeDateModule} from '@angular/material/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { AdministradorService } from './shared/administrador.service';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../../../environments/environment';


@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSidenavModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    
    FormsModule,
    ReactiveFormsModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers:[AdministradorService],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminModule { }
