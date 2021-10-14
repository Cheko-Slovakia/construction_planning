import { Component, OnInit, Pipe, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Obra } from '../../../models/Obra';
import { Trabajador } from '../../../models/Trabajador';
import { ObraService } from '../../services/ObraService';
import { TrabajadorService } from '../../services/TrabajadorService';


interface obraAux {
  id: number,
  nombre: string
}

//Interfaz de los trabajadores que se mostrarán 
declare interface trabajadoresTabla {
  cedula: string,
  nombre: string,
  apellido: string,
  celular: string,
  cargo: string,
  obra: number

}

@Component({
  selector: 'app-trabajador-listar',
  templateUrl: './trabajador-listar.component.html',
  styleUrls: ['./trabajador-listar.component.scss']
})



@Pipe({ name: 'transformarEstado' })
export class TrabajadorListarComponent implements OnInit {

  private trabajadores: trabajadoresTabla[] = [];//Trabajadores
  private columnasTrabajadores: string[] = ['nombre', 'apellido', 'celular', 'cargo', 'obra', 'editar'];//Columnas a mostrar en la tabla
  private dataSourceTrabajadores: MatTableDataSource<trabajadoresTabla>


  private trabajadorAux: trabajadoresTabla = {
    cedula: null,
    nombre: null,
    apellido: null,
    celular: null,
    cargo: null,
    obra: null
  }


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  

  constructor(private obraService: ObraService,private trabajadoresService: TrabajadorService, private router: Router) { }

  private obrasLista: obraAux[] = [];



  ngOnInit() {
    //Se genera el menu
    this.obtenerObras();
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
            cargo: trabajador.cargo,
            obra: trabajador.obra_participante
          }
          this.trabajadores.push(this.trabajadorAux)
        })

        //Datasource para la tabla y su correspondiende sorter y paginator
        this.dataSourceTrabajadores = new MatTableDataSource<trabajadoresTabla>(this.trabajadores)
        this.dataSourceTrabajadores.sort = this.sort;
        this.dataSourceTrabajadores.paginator = this.paginator;

        console.log(this.trabajadores);

      }
    )
  }

  obtenerObras() {
    this.obraService.obtenerObras().subscribe(
      (response: Obra[]) => {

        console.log(response);

        response.forEach(obra => {
          let obraAux = {
            id: obra.obra_id,
            nombre: obra.nombre
          }

          this.obrasLista.push(obraAux);

        });

        console.log(this.obrasLista);
      }

    )
  }

  

  transform(input: number): string {
    if (input == 0) {
      return 'asignado'
    }
    else {
      return 'sin asignar'
    }
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
