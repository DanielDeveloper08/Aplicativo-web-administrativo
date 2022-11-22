import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
    this.authService.cargar(['animacionLogin']);
  }

  onClickLogin(){
    this._router.navigateByUrl("admin/home");
  }

}
