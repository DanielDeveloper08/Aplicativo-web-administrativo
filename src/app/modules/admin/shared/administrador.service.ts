import { Injectable } from '@angular/core';
import { Administrador } from './administrador';
import {AngularFireDatabase, AngularFireList, AngularFireObject,} from '@angular/fire/compat/database';
@Injectable({
  providedIn: 'root',
})

export class AdministradorService {
  private dbPath = '/UserAdmin';

  adminsRef: AngularFireList<Administrador>;
  adminRef!: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {
    this.adminsRef = db.list(this.dbPath);
  }

  // Create admin
  addAdmin(admin: Administrador){
    this.adminsRef.push({
      nombre: admin.nombre,
      apellido: admin.apellido,
      cedula: admin.cedula,
      correo: admin.correo,
      telefono: admin.telefono,
      direccion: admin.direccion,
      contraseña: admin.contraseña,
      repetirContraseña: admin.repetirContraseña,
    }).catch((error) =>{
      console.log(error);
    })
  }

  // Get admin
  getAdmin(id: string){
    this.adminRef = this.db.object(this.dbPath + id);
    return this.adminRef;
  }

  // Get admin list
  getBookList() {
    this.adminsRef = this.db.list(this.dbPath );
    return this.adminsRef;
  }

  /* Update book */
  UpdateBook(id: string, admin: Administrador) {
    this.adminRef
      .update({
        nombre: admin.nombre,
        apellido: admin.apellido,
        cedula: admin.cedula,
        correo: admin.correo,
        telefono: admin.telefono,
        direccion: admin.direccion,
        contraseña: admin.contraseña,
        repetirContraseña: admin.repetirContraseña,
      })
      .catch((error) => {
        console.log(error);
      });
  }

  /* Delete book */
  DeleteBook(id: string) {
    this.adminRef = this.db.object(this.dbPath  + id);
    this.adminRef.remove().catch((error) => {
      console.log(error);
    });
  }
}
