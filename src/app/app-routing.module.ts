import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './navegacion/inicio/inicio.component';
import { NuevoIngresoComponent } from './navegacion/nuevo-ingreso/nuevo-ingreso.component';
import { NuevoEgresoComponent } from './navegacion/nuevo-egreso/nuevo-egreso.component';
import { HistorialComponent } from './navegacion/historial/historial.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    children: [ 
      {
        path: 'nuevo-ingreso',
        component: NuevoIngresoComponent
      },
      {
        path: 'nuevo-egreso',
        component: NuevoEgresoComponent
      },
      {
        path: 'historial',
        component: HistorialComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }