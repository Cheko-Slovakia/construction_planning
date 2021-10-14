import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Material } from '../../../models/Material';
import { MaterialService } from '../../services/MaterialService';


//Interfaz de los materiales que se mostrarán 
declare interface solicitudesTabla {
  material_id: number,
  material_nombre: string,
  obra_nombre: string
  obra_id: number,
  cantidad: number,
  estado: number,
}

@Component({
  selector: 'app-material-solicitudes',
  templateUrl: './material-solicitudes.component.html',
  styleUrls: ['./material-solicitudes.component.scss']
})




export class MaterialSolicitudesComponent implements OnInit {

  private obra: number;

  private materiales: solicitudesTabla[] = [];//materiales
  private columnasMateriales: string[] = ['material', 'obra', 'cantidad', 'autorizar'];//Columnas a mostrar en la tabla
  private dataSourceMateriales: MatTableDataSource<solicitudesTabla>


  private materialAux: solicitudesTabla = {
    material_id: null,
    material_nombre: null,
    obra_nombre: null,
    obra_id: null,
    cantidad: null,
    estado: null
  }


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;



  constructor(private materialesService: MaterialService, private router: Router) { }

  ngOnInit() {
    this.generarMenuMateriales();
  }


  generarMenuMateriales() {
    this.materialesService.obtenerSolicitudesMaterialesObra(Number(this.obra)).subscribe(
      (response: any) => {

        response.forEach(solicitud => {
          this.materialAux = {
            material_id: solicitud.material_id,
            material_nombre: solicitud.nombre,
            obra_id: solicitud.obra_id,
            obra_nombre: solicitud.obra_nombre,
            cantidad: solicitud.cantidad,
            estado: solicitud.estado
          }
          this.materiales.push(this.materialAux)
        })

        //Datasource para la tabla y su correspondiende sorter y paginator
        this.dataSourceMateriales = new MatTableDataSource<solicitudesTabla>(this.materiales)
        this.dataSourceMateriales.sort = this.sort;
        this.dataSourceMateriales.paginator = this.paginator;
        console.log(response);

      }
    )
  }

  //Filtrado
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceMateriales.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceMateriales.paginator) {
      this.dataSourceMateriales.paginator.firstPage();
    }
  }

}
