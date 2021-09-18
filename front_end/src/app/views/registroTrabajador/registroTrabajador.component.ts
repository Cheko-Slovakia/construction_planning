import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TrabajadorService } from '../../services/TrabajadorService';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'registroTrabajador.component.html'
})


export class RegistroTrabajadorComponent implements OnInit {

  registroTrabajador = true;
  edicion = false;

  trabajadorForm: FormGroup = this.fb.group({
    
    
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
    
  }

  //Registro 

  registrarTrabajador(){
    console.log("Recibido");
    

    const newTrabajador: any={
      numero_cedula: this.trabajadorForm.get('cedula')?.value,
      nombre: this.trabajadorForm.get('nombre')?.value,
      apellido: this.trabajadorForm.get('apellido')?.value,
      direccion: this.trabajadorForm.get('direccion')?.value,
      numero_celular: this.trabajadorForm.get('celular')?.value,
      contrasena: this.trabajadorForm.get('contrasena')?.value,
      cargo: this.trabajadorForm.get('cargo')?.value
    }



    this.trabajadorService.registrarTrabajador(newTrabajador).subscribe(
      (response: any)=>{
        console.log(response);
        
      }
    )
    console.log(newTrabajador);
    
    this.trabajadorForm.reset();
  }


  

}
