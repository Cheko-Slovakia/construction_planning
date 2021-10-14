import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})


export class LoginComponent implements OnInit{


  registrarEvidenciaForm: FormGroup = this.fb.group({
    usuario: ['',Validators.required],
    contrasena: ['',Validators.required]
  

  })
  constructor(private fb : FormBuilder, private router: Router){
    

  }

 
  

  ngOnInit(): void {
  }

  iniciarSesion(){
    this.router.navigateByUrl("/admin")
  }


 }
