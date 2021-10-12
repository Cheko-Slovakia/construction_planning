import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Loader } from '@googlemaps/js-api-loader';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { title } from 'process';

@Component({
  selector: 'app-evidencia-registrar',
  templateUrl: './evidencia-registrar.component.html',
  styleUrls: ['./evidencia-registrar.component.scss']
})



export class EvidenciaRegistrarComponent implements OnInit{

  
  constructor(private fb: FormBuilder, private router: Router) {}

  loader = new Loader({
    apiKey : 'AIzaSyDi3vXai4YsLlN7j9nV03i_cp_Gk_-4IMY'
  })


  title = 'Registrar Evidencia'
  latitud =  3.6070813999999993;
  longitud = -76.25948679999999;
  zoom = 5;

  formattedAddress = '';

  options = {
    componentRestrictions:{
      country:['CO']
    }
  }

  
  @ViewChild("placesRef") placesRef: GooglePlaceDirective;

  


  registrarEvidenciaForm: FormGroup = this.fb.group({

    
    descripcion_obra: ['',Validators.required],
    tipo_obra: ['',Validators.required],
    ciudad_obra: ['',Validators.required],
    direccion_obra: ['',Validators.required],
    latitud: [{value: '', disabled: true}],
    longitud: [{value: '', disabled: true}],
    cliente_obra: ['',Validators.required],
  

  })

  
  ngOnInit() {
    


    this.loader.load().then(()=>{
      new google.maps.Map(document.getElementById("map"),{
        center:{lat: this.latitud , lng: this.longitud},
        zoom: this.zoom,
        mapId: '6ce8ed066b2273c1'
      })
    })
  }

 

  public handleAddressChange(address: Address){
    console.log(address);
    this.latitud = address.geometry.location.lat()
    this.longitud = address.geometry.location.lng()
    this.zoom = 15;


    this.loader.load().then(()=>{
      let map = new google.maps.Map(document.getElementById("map"),{
        center:{lat: this.latitud , lng: this.longitud},
        zoom: this.zoom,
        mapId: '6ce8ed066b2273c1'

      })

      new google.maps.Marker({
        position : {lat: this.latitud , lng: this.longitud},
        map: map,
        title: "Evidencia"
      })
    })

    this.registrarEvidenciaForm.patchValue({
      latitud: this.latitud,
      longitud: this.longitud
    })
    
    
  }
 
  public setCurrentLocation(){
    if('geolocation' in navigator){
      navigator.geolocation.getCurrentPosition((position)=>{
        this.latitud = position.coords.latitude;
        this.longitud = position.coords.longitude;
        this.zoom = 15
      })
    }

  }
  //Registro 



  

}
