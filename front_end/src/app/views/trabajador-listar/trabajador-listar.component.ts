import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Trabajador } from '../../../models/Trabajador';
import { TrabajadorService } from '../../services/TrabajadorService';

//Interfaz de los trabajadores que se mostrarán 
declare interface trabajadoresTabla {
  cedula: string,
  nombre: string,
  apellido: string,
  celular: string,
  cargo: string,
}

@Component({
  selector: 'app-trabajador-listar',
  templateUrl: './trabajador-listar.component.html',
  styleUrls: ['./trabajador-listar.component.scss']
})




export class TrabajadorListarComponent implements OnInit {

  private trabajadores: trabajadoresTabla[] = [];//Trabajadores
  private columnasTrabajadores: string[] = ['nombre', 'apellido', 'celular', 'cargo', 'editar'];//Columnas a mostrar en la tabla
  private dataSourceTrabajadores: MatTableDataSource<trabajadoresTabla>


  private trabajadorAux: trabajadoresTabla = {
    cedula: null,
    nombre: null,
    apellido: null,
    celular: null,
    cargo: null
  }


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;



  constructor(private trabajadoresService: TrabajadorService, private router: Router) { }

  ngOnInit() {
    //Se genera el menu
    this.generarMenuTrabajadores();
  }


  generarMenuTrabajadores() {
    
    this.trabajadoresService.obtenerTrabajadores().subscribe(
      (response: Trabajador[]) => {
        response.forEach(trabajador => {
          this.trabajadorAux = {
            cedula: trabajador.numero_cedula,
            nombre: trabajador.nombre,
            apellido: trabajador.apellido,
            celular: trabajador.numero_celular,
            cargo: trabajador.cargo
          }
          this.trabajadores.push(this.trabajadorAux)
        })

        //Datasource para la tabla y su correspondiende sorter y paginator
        this.dataSourceTrabajadores = new MatTableDataSource<trabajadoresTabla>(this.trabajadores)
        this.dataSourceTrabajadores.sort = this.sort;
        this.dataSourceTrabajadores.paginator = this.paginator;
      }
    )
  }

   //Filtrado
   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceTrabajadores.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceTrabajadores.paginator) {
      this.dataSourceTrabajadores.paginator.firstPage();
    }
  }

}
