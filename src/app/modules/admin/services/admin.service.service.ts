import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private httpCLient: HttpClient){}

    agregarAdministrador(administrador: any){
        this.httpCLient.post('https://admin-ppp-default-rtdb.firebaseio.com/administrador.json', administrador).subscribe(
            response=>console.log("Se ha registrado el administrador: " + response),
            error=>console.log("Error: "+ error),
        );
    }
}
