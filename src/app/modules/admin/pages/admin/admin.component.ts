import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDrawerMode } from '@angular/material/sidenav';
import { AdminServiceService } from '../../services/admin.service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{

  createAdministrador: FormGroup;
  // submited = false;
  mode = new FormControl('over' as MatDrawerMode);
  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);

  constructor(private _formBuilder: FormBuilder, private admiService: AdminServiceService) {
    this.createAdministrador = this._formBuilder.group({
      nombre: ['', Validators.required],
      apellido:['', Validators.required],
      cedula:['', Validators.required],
      correo:['', Validators.required],
      telefono:['', Validators.required],
      direccion:['', Validators.required],
      contraseña:['', Validators.required],
      repetirContraseña:['', Validators.required],
    })
  }

  // createAdmin = this._formBuilder.group({
  //   nombre: ['', Validators.required],
  //   apellido:['', Validators.required],
  //   cedula:['', Validators.required],
  //   correo:['', Validators.required],
  //   telefono:['', Validators.required],
  //   direccion:['', Validators.required],
  //   contraseña:['', Validators.required],
  //   repetirContraseña:['', Validators.required],
  // })

  public getScreenWidth: any;
  public getScreenHeight: any;
  mostarSideNav: boolean = false;

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

  // agregarAdministrador(){
  //   this.adminService.agregarAdministrador(this.createAdmin)
  //   console.log(this.createAdmin)
  // }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;

    this.getScreenWidth <= 1169 ? this.mostarSideNav=true : this.mostarSideNav=false;
  
  }
 

}
