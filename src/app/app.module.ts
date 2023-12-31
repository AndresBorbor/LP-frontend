import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiltradoComponent } from './filtrado/filtrado.component';
import { RutasComponent } from './rutas/rutas.component';
import { AddRoutesComponent } from './add-routes/add-routes.component';
import { RutasRegistroComponent } from './rutas-registro/rutas-registro.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    FiltradoComponent,
    RutasRegistroComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    RutasComponent,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AddRoutesComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
