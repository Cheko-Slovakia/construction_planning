
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";
import { Obra } from '../../models/Obra';


@Injectable({
    providedIn:'root'
})

export class ObraService{

    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient){}

    
    
    public obtenerObras():Observable<Obra[]>{
        return this.http.get<Obra[]>(`${this.apiServerUrl}/obras/?all=1`)
    }

    public registrarObra(nuevaObra: Obra):Observable<Obra>{
        return this.http.post<Obra>(`${this.apiServerUrl}/obras/`,nuevaObra)
    }



    
}
