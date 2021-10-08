import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TrabajadorService } from '../../services/TrabajadorService';

@Component({
  selector: 'app-material-comprar',
  templateUrl: './material-comprar.component.html',
  styleUrls: ['./material-comprar.component.scss']
})
export class MaterialComprarComponent implements OnInit {

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



  

}