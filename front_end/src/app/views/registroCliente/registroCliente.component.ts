import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from '../../services/ClienteService';

@Component({
  selector: 'app-registrocliente',
  templateUrl: './registrocliente.component.html',
  styleUrls: ['./registrocliente.component.scss']
})
export class RegistroclienteComponent implements OnInit {

  registroCliente = true;
  edicion = false;

  clienteForm: FormGroup = this.fb.group({
    
    
    nombre: ['',Validators.required],
    apellido: ['',Validators.required],
    cedula: ['',Validators.required],
    direccion: ['',Validators.required],
    celular: ['',Validators.required],
    contrasena: ['',Validators.required],
    c_contrasena: ['',Validators.required],
    cargo: ['',Validators.required]
  

  })

  constructor(private fb: FormBuilder,private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
  }

}