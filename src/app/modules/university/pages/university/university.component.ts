import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDrawerMode } from '@angular/material/sidenav';
import { map, Observable, startWith } from 'rxjs';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';


@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css'], 
  encapsulation: ViewEncapsulation.None
})
export class UniversityComponent implements OnInit {

  mode = new FormControl('over' as MatDrawerMode);
  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
  // responsive

  
  public getScreenWidth: any;
  public getScreenHeight: any;
  mostarSideNav: boolean = false;

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;

    this.getScreenWidth <= 1169 ? this.mostarSideNav=true : this.mostarSideNav=false;
  
  }
  // autocomplete
  // ********************************************************************************
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions?: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );

    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  // ********************************************************************************
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    nombreFacultad: ['', Validators.required],
    correoFacultad: ['', Validators.required,],
    telefonoFacultad: ['', Validators.required],
    nombreDecanoFacultad: ['', Validators.required,],
    correoDecanoFacultad: ['', Validators.required],
    telefonoDecanoFacultad: ['', Validators.required,],
    direccionFacultad: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    nombreCarrera: ['', Validators.required],
    CorreoCarrera: ['', Validators.required,],
    telefonoCarrera: ['', Validators.required],
    nombreDirectorCarrera: ['', Validators.required,],
    correoDirectorCarrera: ['', Validators.required],
    telefonoDirectorCarrera: ['', Validators.required,],
  });
  stepperOrientation: Observable<StepperOrientation>;

  constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  guardarUniversidad(){

  }

  
  
  
}
