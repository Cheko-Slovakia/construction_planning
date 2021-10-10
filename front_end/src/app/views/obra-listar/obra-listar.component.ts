import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Obra } from '../../../models/Obra';
import { ObraService } from '../../services/ObrasService';

//Interfaz de las obras que se mostrarán 
declare interface obrasTabla {
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
  private columnasObras: string[] = ['nombre', 'direccion', 'ciudad', 'latitud', 'longitud'];//Columnas a mostrar en la tabla
  private dataSourceObras: MatTableDataSource<obrasTabla>


  private obraAux: obrasTabla = {
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
    console.log()
  }


  generarMenuObras() {

    
    this.ObraService.obtenerObras().subscribe(
      (response: Obra[]) => {

        response.forEach(obra => {
          this.obraAux = {
            nombre: obra.nombre,
            direccion: obra.direccion,
            ciudad: obra.ciudad,
            estado: obra.estado,
            latitud: obra.latitud,
            longitud: obra.longitud,
          }
          this.obras.push(this.obraAux)
        })
        console.log(this.obras)

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

// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-obra-listar',
//   templateUrl: './obra-listar.component.html',
//   styleUrls: ['./obra-listar.component.scss']
// })
// export class ObraListarComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
