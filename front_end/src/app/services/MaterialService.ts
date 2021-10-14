
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";
import { Material } from '../../models/Material';

@Injectable({
    providedIn:'root'
})



export class MaterialService{

    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient){}

    
    
    public obtenerMaterialesObra(obra: number):Observable<Material[]>{
        return this.http.get<Material[]>(`${this.apiServerUrl}/obras/materiales/?obra_id=${obra}`)
    }

    public obtenerMateriales():Observable<Material[]>{
        return this.http.get<Material[]>(`${this.apiServerUrl}/materiales/`)
    }


    
}
