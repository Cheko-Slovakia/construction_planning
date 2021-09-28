import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TrabajadorService } from '../../services/TrabajadorService';

@Component({
  selector: 'app-obra-registro',
  templateUrl: './obra-registro.component.html',
  styleUrls: ['./obra-registro.component.scss']
})


export class ObraRegistroComponent implements OnInit {

  lat: number;
  lng: number;




  registrarObraForm: FormGroup = this.fb.group({
    
    
    descripcion_obra: ['',Validators.required],
    tipo_obra: ['',Validators.required],
    ciudad_obra: ['',Validators.required],
    direccion_obra: ['',Validators.required],
    latitud: ['',Validators.required],
    cliente_obra: ['',Validators.required],
  

  })

  formattedAddress = '';

  options = {
    componentRestrictions:{
      country:['AU']
    }
  }

  public handleAddressChange(address: any){
    this.formattedAddress = address.formattedAddress;

  }
   

  constructor(private fb: FormBuilder,private trabajadorService: TrabajadorService, private router: Router) {}

  ngOnInit(): void {

    this.lat = 5;
    this.lng = 6;
    
    
  }

  //Registro 



  

}
