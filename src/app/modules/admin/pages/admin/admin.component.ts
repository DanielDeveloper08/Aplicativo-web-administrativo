import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDrawerMode } from '@angular/material/sidenav';
import { AdminServiceService } from '../../services/admin.service.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{

  createAdministrador!: FormGroup;
  // submited = false;
  mode = new FormControl('over' as MatDrawerMode);
  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);

  constructor(private _formBuilder: FormBuilder, private adminService: AdminServiceService) {
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
  nombre!: FormControl;
  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;

    this.createAdministrador = this._formBuilder.group({
      nombre: ['', Validators.required],
      apellido:['', Validators.required],
      cedula:['', Validators.required],
      correo:['', Validators.required],
      telefono:['', Validators.required],
      direccion:['', Validators.required],
      password:['', Validators.required],
      confirmacion:['', Validators.required],
    })

   this.createAdministrador.valueChanges.subscribe(data=>{
    console.log(data);
   })
  }

  agregarAdministrador(){
    this.adminService.agregarAdministrador(this.createAdministrador)
    console.log(this.createAdministrador)
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
 

}
