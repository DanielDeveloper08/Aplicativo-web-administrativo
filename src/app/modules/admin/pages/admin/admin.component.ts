import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDrawerMode } from '@angular/material/sidenav';

import { windowTime } from 'rxjs';
import { Administrador } from '../../shared/administrador';
import { AdministradorService } from '../../shared/administrador.service';
import { MatTableDataSource } from '@angular/material/table';


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
  nombre!: FormControl;
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

   this.createAdministrador.valueChanges.subscribe(data=>{
    console.log(data);
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


  
  ELEMENT_DATA: any[] = [
    { date: 'foto', typeProduct: 'Daniel', product: "Asanza", price: 'dasanza79@gmail.com'},
    { date: 'foto', typeProduct: 'Miguel', product: "Jaramillo", price: 'miguel74@gmail.com' },
    { date: 'foto', typeProduct: 'Josue', product:  "Cadena", price:'josue14@gmail.com'  },
    { date: 'foto', typeProduct: 'Carlos', product: "Martinez", price: 'carlos23@gmail.com' },
    { date: 'foto', typeProduct: 'Daniel', product: "Asanza", price: 'dasanza79@gmail.com'},
  ];

  displayedColumns: string[] = ['date', 'typeProduct', 'price', 'actions'];
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
 


  // Delete
  
}