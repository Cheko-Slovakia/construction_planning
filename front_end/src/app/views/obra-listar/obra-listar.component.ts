import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Obra } from '../../../models/Obra';
import { ObraService } from '../../services/ObraService';

//Interfaz de las obras que se mostrarán 
declare interface obrasTabla {
  obra_id: number,
  nombre: string,
  direccion: string,
  ciudad: string,
  estado: string,
  latitud: number,
  longitud: number,
  
}

@Component({
    selector: 'app-obra-listar',
    templateUrl: './obra-listar.component.html',
    styleUrls: ['./obra-listar.component.scss']
})



export class ObraListarComponent implements OnInit {

  private obras: obrasTabla[] = [];//obras
  private columnasObras: string[] = ['nombre', 'direccion', 'ciudad', 'estado', 'latitud', 'longitud', 'editar'];//Columnas a mostrar en la tabla
  private dataSourceObras: MatTableDataSource<obrasTabla>


  private obraAux: obrasTabla = {
    obra_id: null,
    nombre: null,
    direccion: null,
    ciudad: null,
    estado: null,
    latitud: null,
    longitud: null,
  }


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;



  constructor(private ObraService: ObraService, private router: Router) { }

  ngOnInit() {
    this.generarMenuObras();
  }


  generarMenuObras() {
    this.ObraService.obtenerObras().subscribe(
      (response: Obra[]) => {
        response.forEach(obra => {
          this.obraAux = {
            obra_id: obra.obra_id,
            nombre: obra.nombre,
            direccion: obra.direccion,
            ciudad: obra.ciudad,
            estado: obra.estado,
            latitud: obra.latitud,
            longitud: obra.longitud,
          }
          console.log(this.obraAux)
          this.obras.push(this.obraAux)
          
        }
      )


        //Datasource para la tabla y su correspondiende sorter y paginator
        this.dataSourceObras = new MatTableDataSource<obrasTabla>(this.obras)
        this.dataSourceObras.sort = this.sort;
        this.dataSourceObras.paginator = this.paginator;
      }
    )
  }

   //Filtrado
   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceObras.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceObras.paginator) {
      this.dataSourceObras.paginator.firstPage();
    }
  }

}

