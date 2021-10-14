import { Component, OnInit, Pipe, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Cliente } from '../../../models/Cliente';
import { Evidencia } from '../../../models/Evidencia';
import { ClienteService } from '../../services/ClienteService';
import { EvidenciaService } from '../../services/EvidenciaService';

//Interfaz de los evidencias que se mostrarán 
declare interface evidenciasTabla {
  tipo: number,
  obra: string,
  trabajador: string,
  fecha: string,
  descripcion: string,
  link: string,
  lat: number,
  lng: number,
  aprobado: boolean
}


@Component({
  selector: 'app-evidencia-listar',
  templateUrl: './evidencia-listar.component.html',
  styleUrls: ['./evidencia-listar.component.scss']
})

@Pipe({ name: 'transformarEstado' })
export class EvidenciaListarComponent implements OnInit {

  private evidencias: evidenciasTabla[] = [];//evidencias
  private columnasEvidencias: string[] = ['tipo', 'Obra', 'trabajador', 'fecha', 'detalle'];//Columnas a mostrar en la tabla
  private dataSourceEvidencias: MatTableDataSource<evidenciasTabla>




  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;



  constructor(private evidenciaService: EvidenciaService, private router: Router) { }

  transform(input: number): string {
    if (input == 1) {
      return 'Audio'
    }
    else {
      return 'Fotografíá'
    }
  }
  
  ngOnInit() {
    this.generarMenuClientes();
  }


  generarMenuClientes() {


    this.evidenciaService.obtenerEvidenciasPorEstadoObra(1, 'True').subscribe(
      (response: any[]) => {
        console.log(response);
        response.forEach(evidencia => {
          let evidenciaAux = {
            tipo: evidencia.tipo,
            obra: evidencia.nombre_obra,
            trabajador: evidencia.trabajador,
            fecha: evidencia.fecha,
            descripcion: evidencia.descripcion,
            link: evidencia.link,
            lat: evidencia.latitud,
            lng: evidencia.longitud,
            aprobado: evidencia.aprobado
          }
          this.evidencias.push(evidenciaAux)
        })

        
        

        //Datasource para la tabla y su correspondiende sorter y paginator
        this.dataSourceEvidencias = new MatTableDataSource<evidenciasTabla>(this.evidencias)
        this.dataSourceEvidencias.sort = this.sort;
        this.dataSourceEvidencias.paginator = this.paginator;
      }
    )
  }

  //Filtrado
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceEvidencias.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceEvidencias.paginator) {
      this.dataSourceEvidencias.paginator.firstPage();
    }
  }

  detallarEvidencia(evidencia: any){
    console.log(evidencia);
    
  }

}
