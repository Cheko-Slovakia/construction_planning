import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ObraService } from '../../services/ObrasService';
@Component({
  selector: 'app-obra-registrar',
  templateUrl: './obra-registrar.component.html',
  styleUrls: ['./obra-registrar.component.scss']
})


export class ObraRegistrarComponent implements OnInit {

  registrarObraForm: FormGroup = this.fb.group({
    
    
    nombre: ['',Validators.required],
    direccion: ['',Validators.required],
    ciudad: ['',Validators.required],
    latitud: ['',Validators.required],
    longitud: ['',Validators.required],

  })
   

  constructor(private fb: FormBuilder,private obraService: ObraService, private router: Router) {}

  ngOnInit(): void {
    console.log(this.registrarObraForm);
    
    
  }

  registrarObra(){
    console.log("Recibido");
    

    const newObra: any={
      nombre: this.registrarObraForm.get('nombre')?.value,
      direccion: this.registrarObraForm.get('direccion')?.value,
      ciudad: this.registrarObraForm.get('ciudad')?.value,
      latitud: this.registrarObraForm.get('latitud')?.value,
      longitud: this.registrarObraForm.get('longitud')?.value,
    }



    this.obraService.registrarObra(newObra).subscribe(
      (response: any)=>{
        console.log(response);
        
      }
    )
    console.log(newObra);
    
    this.registrarObraForm.reset();
  }

  //Registro 



  

}
