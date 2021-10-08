import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvidenciaListarComponent } from '../../views/evidencia-listar/evidencia-listar.component';
import { EvidenciaRegistrarComponent } from '../../views/evidencia-registrar/evidencia-registrar.component';
import { MaterialComprarComponent } from '../../views/material-comprar/material-comprar.component';
import { MaterialListarComponent } from '../../views/material-listar/material-listar.component';
import { MaterialSolicitarComponent } from '../../views/material-solicitar/material-solicitar.component';
import { MaterialSolicitudesComponent } from '../../views/material-solicitudes/material-solicitudes.component';
import { ObraListarComponent } from '../../views/obra-listar/obra-listar.component';

export const routes: Routes = [{
  path:'',
  children:[

     {path:'registrarEvidencia',component: EvidenciaRegistrarComponent},
     {path:'listarEvidencias',component: EvidenciaListarComponent},


     {path:'listarSolicitudesMateriales',component: MaterialSolicitudesComponent},
     {path:'comprarMateriales',component: MaterialComprarComponent},
     {path:'listarMateriales',component: MaterialListarComponent},

     {path:'listarObras',component: ObraListarComponent},
     {path:'solicitarMateriales',component: MaterialSolicitarComponent},

     {path: '**', redirectTo: 'dashboard'}
  ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrabajadorLayoutRoutingModule { }
