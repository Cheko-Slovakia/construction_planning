import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TrabajadorService } from '../../services/TrabajadorService';

@Component({
  selector: 'app-trabajador-registrar',
  templateUrl: 'trabajador-registrar.component.html',
  styleUrls: ['./trabajador-registrar.component.scss']
})


export class RegistroTrabajadorComponent implements OnInit {

  registrarTrabajadorForm: FormGroup = this.fb.group({
    
    
    nombre: ['',Validators.required],
    apellido: ['',Validators.required],
    cedula: ['',Validators.required],
    direccion: ['',Validators.required],
    celular: ['',Validators.required],
    contrasena: ['',Validators.required],
    c_contrasena: ['',Validators.required],
    cargo: ['',Validators.required]
  

  })



  constructor(private fb: FormBuilder,private trabajadorService: TrabajadorService, private router: Router) {}

  ngOnInit(): void {
    console.log(this.registrarTrabajadorForm);
    
    
  }

  //Registro 

  registrarTrabajador(){
    console.log("Recibido");
    

    const newTrabajador: any={
      numero_cedula: this.registrarTrabajadorForm.get('cedula')?.value,
      nombre: this.registrarTrabajadorForm.get('nombre')?.value,
      apellido: this.registrarTrabajadorForm.get('apellido')?.value,
      direccion: this.registrarTrabajadorForm.get('direccion')?.value,
      numero_celular: this.registrarTrabajadorForm.get('celular')?.value,
      contrasena: this.registrarTrabajadorForm.get('contrasena')?.value,
      cargo: this.registrarTrabajadorForm.get('cargo')?.value
    }



    this.trabajadorService.registrarTrabajador(newTrabajador).subscribe(
      (response: any)=>{
        console.log(response);
        
      }
    )
    console.log(newTrabajador);
    
    this.registrarTrabajadorForm.reset();
  }


  

}
