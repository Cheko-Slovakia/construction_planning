import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Trabajador } from '../../../models/Trabajador';
import { TrabajadorService } from '../../services/TrabajadorService';

@Component({
  selector: 'app-editarTrabajador',
  templateUrl: 'editarTrabajador.component.html'
})


export class EditarTrabajadorComponent implements OnInit {
  private trabajador_cedula: string;

  editarTrabajadorForm: FormGroup = this.fb.group({
    
    nombre: [{value: '', disabled: true},Validators.required],
    apellido: [{value: '', disabled: true},Validators.required],
    cedula: [{value: '', disabled: true},Validators.required],
    direccion: [{value: '', disabled: false},Validators.required],
    celular: [{value: '', disabled: false},Validators.required],
    contrasena: [{value: '', disabled: false},Validators.required],
    c_contrasena: [{value: '', disabled: false},Validators.required],
    cargo: [{value: '', disabled: false},Validators.required]
  
  

  })
   
 

   

  constructor(private fb: FormBuilder,private trabajadorService: TrabajadorService, private aRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.trabajador_cedula = this.aRoute.snapshot.paramMap.get("trabajador_cedula");
    this.obtenerTrabajador();

    console.log(this.trabajador_cedula);
  }

 

  obtenerTrabajador(){
    this.trabajadorService.obtenerTrabajador(Number(this.trabajador_cedula)).subscribe(
      (response:Trabajador)=>{

        this.editarTrabajadorForm.patchValue({
          nombre:response.nombre,
          apellido:response.apellido,
          cedula: response.numero_cedula,
          direccion: response.direccion,
          celular: response.numero_celular,
          cargo: response.cargo

        })
        
        console.log(response);
        
      }
    ) 
  }

  editarTrabajador(){
    console.log("Recibido");
    const editadoTrabajador: any={
      numero_cedula: this.editarTrabajadorForm.get('cedula')?.value,
      nombre: this.editarTrabajadorForm.get('nombre')?.value,
      apellido: this.editarTrabajadorForm.get('apellido')?.value,
      direccion: 'Calle 5',
      numero_celular: this.editarTrabajadorForm.get('celular')?.value,
      contrasena: this.editarTrabajadorForm.get('contrasena')?.value,
      cargo: this.editarTrabajadorForm.get('cargo')?.value,
      
    }

    this.trabajadorService.actualizarTrabajador(editadoTrabajador).subscribe(
      (response: any)=>{
        console.log(response);
        
      }
    )

    console.log(editadoTrabajador);

    this.editarTrabajadorForm.reset();
    
    
  }

  

}
