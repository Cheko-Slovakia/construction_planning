import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrabajadorLayoutRoutingModule } from './trabajador-layout-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { EvidenciaListarComponent } from '../../views/evidencia-listar/evidencia-listar.component';
import { EvidenciaRegistrarComponent } from '../../views/evidencia-registrar/evidencia-registrar.component';
import { MaterialComprarComponent } from '../../views/material-comprar/material-comprar.component';
import { MaterialListarComponent } from '../../views/material-listar/material-listar.component';
import { MaterialSolicitarComponent } from '../../views/material-solicitar/material-solicitar.component';
import { MaterialSolicitudesComponent } from '../../views/material-solicitudes/material-solicitudes.component';
import { ObraListarComponent } from '../../views/obra-listar/obra-listar.component';
import { MatOptionModule } from '@angular/material/core';


@NgModule({
  declarations: [
    EvidenciaListarComponent,
    EvidenciaRegistrarComponent,
    MaterialComprarComponent,
    MaterialListarComponent,
    MaterialSolicitarComponent,
    MaterialSolicitudesComponent
    
  ],
  imports: [
    CommonModule,
    TrabajadorLayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatOptionModule
  ]
})
export class TrabajadorLayoutModule { }
