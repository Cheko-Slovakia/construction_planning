import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrabajadorEditarComponent } from '../../views/trabajador-editar/trabajador-editar.component';
import { TrabajadorListarComponent } from '../../views/trabajador-listar/trabajador-listar.component';
import { ObraListarComponent } from '../../views/obra-listar/obra-listar.component';
import { ObraRegistrarComponent } from '../../views/obra-registrar/obra-registrar.component';
import { ClienteRegistrarComponent } from '../../views/cliente-registrar/cliente-registrar.component';
import { RegistroTrabajadorComponent } from '../../views/trabajador-registrar/trabajador-registrar.component';

export const routes: Routes = [{
  path:'',
  children:[
    
     {path:'registrarObra',component: ObraRegistrarComponent},
     {path:'editarObra/:id_obra',component: ObraListarComponent},
     {path:'listarObras',component: ObraListarComponent},

     {path:'registrarCliente',component: ClienteRegistrarComponent},
     {path:'editarCliente/:cliente_nit',component: ClienteRegistrarComponent},
     {path:'listarClientes/',component: ClienteRegistrarComponent},

     {path:'registrarTrabajador',component: RegistroTrabajadorComponent},
     {path:'editarTrabajador/:trabajador_cedula',component: TrabajadorEditarComponent},
     {path:'listarTrabajadores',component: TrabajadorListarComponent},
     
     {path: '**', redirectTo: 'dashboard'}
  ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorLayoutRoutingModule { }
