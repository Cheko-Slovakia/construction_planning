import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Loader } from '@googlemaps/js-api-loader';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { title } from 'process';
import Swal from 'sweetalert2';
import { EvidenciaService } from '../../services/EvidenciaService';

@Component({
  selector: 'app-evidencia-registrar',
  templateUrl: './evidencia-registrar.component.html',
  styleUrls: ['./evidencia-registrar.component.scss']
})




export class EvidenciaRegistrarComponent implements OnInit{



  
  constructor(private fb: FormBuilder, private router: Router, private evidenciaService : EvidenciaService) {}

  loader = new Loader({
    apiKey : 'AIzaSyDi3vXai4YsLlN7j9nV03i_cp_Gk_-4IMY'
  })

  
  title = 'Registrar Evidencia'
  latitud =  3.6070813999999993;
  longitud = -76.25948679999999;
  zoom = 15;

  formattedAddress = '';

  options = {
    componentRestrictions:{
      country:['CO']
    }
  }

  
  @ViewChild("placesRef") placesRef: GooglePlaceDirective;

  


  registrarEvidenciaForm: FormGroup = this.fb.group({

    
    descripcion: ['',Validators.required],
    tipo: ['',Validators.required],
    enlace: ['',Validators.required],
    latitud: [{value: '', disabled: true},Validators.required],
    longitud: [{value: '', disabled: true },Validators.required]
  

  })

  
  ngOnInit() {


    if('geolocation' in navigator){
      navigator.geolocation.getCurrentPosition((position)=>{
        this.latitud = position.coords.latitude;
        this.longitud = position.coords.longitude;
        this.zoom = 15

        this.registrarEvidenciaForm.patchValue({
          latitud: this.latitud,
          longitud: this.longitud
        })
      })
    };


    
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
  }


  public registrarEvidencia(){

    const newEvidencia: any={
      obra:1,
      descripcion: this.registrarEvidenciaForm.get('descripcion')?.value,
      link: this.registrarEvidenciaForm.get('enlace')?.value,
      latitud: this.registrarEvidenciaForm.get('latitud')?.value,
      longitud: this.registrarEvidenciaForm.get('longitud')?.value,
      tipo: this.registrarEvidenciaForm.get('tipo')?.value,
      //obra: this.registrarEvidenciaForm.get('obra')?.value

    }

    console.log(newEvidencia);


    this.evidenciaService.registrarEvidencia(newEvidencia).subscribe(
      (response:any)=>{
        Swal.fire({
          title: newEvidencia.tipo ==1? 'Evidencia fotografica registrada satisfactoriamente': 'Evidencia de en audio registrada satisfactoriamente',
          imageUrl: newEvidencia.tipo ==2? 'https://images.vexels.live/media/users/3/145866/isolated/preview/b4efb6c6682b2a808631bf8fbd96d015-sound-wave-icon.png': newEvidencia.link,
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
        })
        
      }
    )
    


  }

 

 

  

}
