import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TrabajadorService } from '../../services/TrabajadorService'

interface materialLista{
  material_id: number;
  material_nombre: string;
}


@Component({
  selector: 'app-material-solicitar',
  templateUrl: './material-solicitar.component.html',
  styleUrls: ['./material-solicitar.component.scss']
})

export class MaterialSolicitarComponent implements OnInit {
  
  public materiales: materialLista[] = [
    {
      material_id: 1,
      material_nombre: "material 1"
    },
    {
      material_id: 2,
      material_nombre: "material 2"
    },
    {
      material_id: 3,
      material_nombre: "material 3"
    },
    {
      material_id: 4,
      material_nombre: "material 4"
    },


  ];


  solicitarMaterialForm: FormGroup = this.fb.group({
    
    
    material: ['',Validators.required],
    unidades: ['',Validators.required],
  

  })


  constructor(private fb: FormBuilder,private trabajadorService: TrabajadorService, private router: Router) {}

  ngOnInit(): void {
    console.log(this.solicitarMaterialForm);
    
    
  }

  obtenerMaterialesProveedor(){
    console.log("hola");

  }

  setValorMaterial(valor_material : number){
    console.log("hola");
    
    console.log(valor_material);
    
    this.solicitarMaterialForm.patchValue({
    })


  }



  

}