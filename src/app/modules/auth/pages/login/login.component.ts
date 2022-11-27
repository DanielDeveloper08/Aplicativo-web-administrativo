import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin !: FormGroup;


  constructor(private authService: AuthService, private _router: Router) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
    this.authService.cargar(['animacionLogin']);
  }

  onClickLogin(){
    this.authService.logIn(this.formLogin.value)
    .then(response =>{ 
      console.log(response);
      this._router.navigateByUrl("admin/home");
    })
    .catch(error => console.log(error));
  }

}
