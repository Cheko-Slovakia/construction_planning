import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TrabajadorService } from '../../services/TrabajadorService';

interface proveedorLista{
  proveedor_id: number;
  proveedor_nombre: string;
}

interface materialLista{
  material_id: number;
  material_nombre: string;
  material_precio: number;
}

@Component({
  selector: 'app-material-comprar',
  templateUrl: './material-comprar.component.html',
  styleUrls: ['./material-comprar.component.scss']
})
export class MaterialComprarComponent implements OnInit {
  
  public proveedores: proveedorLista[] = [
    {
      proveedor_id: 1,
      proveedor_nombre: "proveedor 1"
    },
    {
      proveedor_id: 2,
      proveedor_nombre: "proveedor 2"
    },
    {
      proveedor_id: 3,
      proveedor_nombre: "proveedor 3"
    },
    {
      proveedor_id: 4,
      proveedor_nombre: "proveedor 4"
    },


  ];

  public materiales: materialLista[]

  comprarMaterialForm: FormGroup = this.fb.group({
    
    
    proveedor: ['',Validators.required],
    material: ['',Validators.required],
    precio: ['',Validators.required],
    unidades: ['',Validators.required],
  

  })


  constructor(private fb: FormBuilder,private trabajadorService: TrabajadorService, private router: Router) {}

  ngOnInit(): void {
    console.log(this.comprarMaterialForm);
    
    
  }

  obtenerMaterialesProveedor(){
    console.log("hola");
    
    

  }

  setValorMaterial(valor_material : number){
    console.log("hola");
    
    console.log(valor_material);
    
    this.comprarMaterialForm.patchValue({
      precio: valor_material
    })


  }



  

}