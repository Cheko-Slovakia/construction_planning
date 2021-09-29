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


    trabajador_id:[{value: '', disabled: true}],
    cedula: [{value: '', disabled: true}],
    nombre: [{value: '', disabled: true}],
    apellido: [{value: '', disabled: true}],
    celular: [{value: '', disabled: false},Validators.required],
    contrasena: [{value: '', disabled: false},Validators.required],
    c_contrasena: [{value: '', disabled: false},Validators.required],
    cargo: [{value: '', disabled: false},Validators.required],
    is_active: [{value: '', disabled: false}],
  
  

  })
   
 

   

  constructor(private fb: FormBuilder,private trabajadorService: TrabajadorService, private aRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.trabajador_cedula = this.aRoute.snapshot.paramMap.get("trabajador_cedula");
    this.obtenerTrabajador();
  }

 

  obtenerTrabajador(){
    this.trabajadorService.obtenerTrabajador(Number(this.trabajador_cedula)).subscribe(
      (response:Trabajador)=>{
        

        this.editarTrabajadorForm.patchValue({
          trabajador_id: response.trabajador_id,
          cedula: response.numero_cedula,
          nombre:response.nombre,
          apellido:response.apellido,
          celular: response.numero_celular,
          cargo: response.cargo,
          is_active: response.is_active

        })
        
        
      }
    ) 
  }

  editarTrabajador(){
    const editadoTrabajador: any={
      trabajador_id: this.editarTrabajadorForm.get('trabajador_id')?.value,
      numero_cedula: this.editarTrabajadorForm.get('cedula')?.value,
      nombre: this.editarTrabajadorForm.get('nombre')?.value,
      apellido: this.editarTrabajadorForm.get('apellido')?.value,
      numero_celular: this.editarTrabajadorForm.get('celular')?.value,
      contrasena: this.editarTrabajadorForm.get('contrasena')?.value,
      cargo: this.editarTrabajadorForm.get('cargo')?.value,
      is_active: this.editarTrabajadorForm.get('is_active')?.value,
      
    }

    
    

    this.trabajadorService.actualizarTrabajador(editadoTrabajador).subscribe(
      (response: any)=>{
        console.log(editadoTrabajador)
        
      }
    )

    this.editarTrabajadorForm.reset();
    
    
  }

  

}
