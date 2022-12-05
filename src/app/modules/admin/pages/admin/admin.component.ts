import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDrawerMode } from '@angular/material/sidenav';
import { windowTime } from 'rxjs';
import { Administrador } from '../../shared/administrador';
import { AdministradorService } from '../../shared/administrador.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit{
  mode = new FormControl('over' as MatDrawerMode);
  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
  adminForm : FormGroup;
  
  constructor(private _formBuilder: FormBuilder, private adminAPI: AdministradorService) {
    this.adminForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      cedula: new FormControl('', Validators.required),
      correo: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required),
      direccion: new FormControl('', Validators.required),
      contraseña: new FormControl('', Validators.required),
      repetirContraseña: new FormControl('', Validators.required),
    })
  }

  public getScreenWidth: any;
  public getScreenHeight: any;
  mostarSideNav: boolean = false;

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

  // Reset form
  resetForm(){
    this.adminForm.reset();
    Object.keys(this.adminForm.controls).forEach((key) =>{
      this.adminForm.controls[key].setErrors(null);
    })
  }

  // submit admin
  submitAdmin(){
    if(this.adminForm.valid){
      this.adminAPI.addAdmin(this.adminForm.value);
      this.resetForm();
    }
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    this.getScreenWidth <= 1169 ? this.mostarSideNav=true : this.mostarSideNav=false;
  }

  // Delete
  
}