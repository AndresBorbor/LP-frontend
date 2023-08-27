import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiltradoComponent } from './filtrado/filtrado.component';
import { RutasComponent } from './rutas/rutas.component';
import { AddRoutesComponent } from './add-routes/add-routes.component';
import { RutasRegistroComponent } from './rutas-registro/rutas-registro.component';

@NgModule({
  declarations: [
    AppComponent,
    FiltradoComponent,
    RutasComponent,
    AddRoutesComponent,
    RutasRegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
