import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Obra } from '../../../models/Obra';
import { Trabajador } from '../../../models/Trabajador';
import { ObraService } from '../../services/ObraService';
import { TrabajadorService } from '../../services/TrabajadorService';

import Swal from 'sweetalert2';


interface obraAux{
  id: number,
  nombre: string
}

@Component({
  selector: 'app-trabajador-editar',
  templateUrl: 'trabajador-editar.component.html',
  styleUrls: ['./trabajador-editar.component.scss']
})


export class TrabajadorEditarComponent implements OnInit {

  private obrasLista: obraAux[]= [{id: 0,nombre: 'Sin Asignar'}];
  private trabajador_cedula: string;

  editarTrabajadorForm: FormGroup = this.fb.group({


    trabajador_id:[{value: '', disabled: true}],
    obra:[{value: '', disabled: false}],
    cedula: [{value: '', disabled: true}],
    nombre: [{value: '', disabled: false}],
    apellido: [{value: '', disabled: false}],
    celular: [{value: '', disabled: false},Validators.required],
    contrasena: [{value: '', disabled: false},Validators.required],
    //c_contrasena: [{value: '', disabled: false},Validators.required],
    cargo: [{value: '', disabled: false},Validators.required],
    is_active: [{value: '', disabled: false}],
  
  

  })
   
 

   

  constructor(private fb: FormBuilder,private trabajadorService: TrabajadorService, private aRoute: ActivatedRoute, private router: Router,private obraService: ObraService) {}

  ngOnInit(): void {
    this.obtenerObras();
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
          contrasena: response.contrasena,
          cargo: response.cargo,
          is_active: response.is_active,
          obra: response.obra_participante

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
      obra_participante: this.editarTrabajadorForm.get('obra')?.value
    }

    
    

    this.trabajadorService.actualizarTrabajador(editadoTrabajador).subscribe(
      (response: any)=>{
      if(response){
        Swal.fire('Éxitoso!','Trabajador actualizado','success');
      } else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
      }
      }
    )

    this.router.navigateByUrl('admin/listarTrabajadores')
    this.editarTrabajadorForm.reset();
    
  }

  obtenerObras(){
    this.obraService.obtenerObras().subscribe(
      (response: Obra[])=>{
        response.forEach(obra => {
          let obraAux  ={
            id: obra.obra_id,
            nombre: obra.nombre
          }
          this.obrasLista.push(obraAux);
        });
      }
      
    )
  }

  

}
