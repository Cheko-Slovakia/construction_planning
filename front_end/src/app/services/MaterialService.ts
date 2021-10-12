
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
        
    
}
