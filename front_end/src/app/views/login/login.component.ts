import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/LoginService';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})


export class LoginComponent implements OnInit{


  credentialsForm: FormGroup = this.fb.group({
    usuario: ['',Validators.required],
    contrasena: ['',Validators.required]

  })

  constructor(private fb : FormBuilder, private router: Router, private loginService: LoginService){


  }




  ngOnInit(): void {
  }

  iniciarSesion(){

    const credentials: any={
      numero_cedula: this.credentialsForm.get('usuario')?.value,
      password: this.credentialsForm.get('contrasena')?.value
    }

    console.log(credentials);


    this.loginService.postCredentials(credentials).subscribe(
      (response:any)=>{
        console.log(response)
      }
    )
//    this.router.navigateByUrl("/admin")
  }
 }
