import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDrawerMode } from '@angular/material/sidenav';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  mode = new FormControl('over' as MatDrawerMode);
  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
  constructor(private _formBuilder: FormBuilder) { }


  public getScreenWidth: any;
  public getScreenHeight: any;
  mostarSideNav: boolean = false;

  ngOnInit(): void {

    this.getScreenWidth = window.innerWidth;
      this.getScreenHeight = window.innerHeight;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;

    this.getScreenWidth <= 1169 ? this.mostarSideNav=true : this.mostarSideNav=false;
  
  }
 

}
