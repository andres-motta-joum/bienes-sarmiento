import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgIconsModule } from '@ng-icons/core';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './navegacion/inicio/inicio.component';
import { BarraMenuComponent } from './navegacion/componentes-generales/barra-menu/barra-menu.component';
import { NuevoIngresoComponent } from './navegacion/nuevo-ingreso/nuevo-ingreso.component';
import { NuevoEgresoComponent } from './navegacion/nuevo-egreso/nuevo-egreso.component';
import { HistorialComponent } from './navegacion/historial/historial.component';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore} from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule}  from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { CodigoComponent } from './navegacion/componentes-generales/codigo/codigo.component';
import { CurrencyPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BarraMenuComponent,
    NuevoIngresoComponent,
    NuevoEgresoComponent,
    HistorialComponent,
    CodigoComponent
  ],
  imports: [
    NgIconsModule.withIcons({}),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CurrencyPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
