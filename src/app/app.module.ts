import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgIconsModule } from '@ng-icons/core';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './navegacion/inicio/inicio.component';
import { BarraMenuComponent } from './navegacion/componentes-generales/barra-menu/barra-menu.component';
import { FooterComponent } from './navegacion/componentes-generales/footer/footer.component';
import { NuevoIngresoComponent } from './navegacion/nuevo-ingreso/nuevo-ingreso.component';
import { NuevoEgresoComponent } from './navegacion/nuevo-egreso/nuevo-egreso.component';
import { HistorialComponent } from './navegacion/historial/historial.component';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BarraMenuComponent,
    FooterComponent,
    NuevoIngresoComponent,
    NuevoEgresoComponent,
    HistorialComponent
  ],
  imports: [
    NgIconsModule.withIcons({}),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
