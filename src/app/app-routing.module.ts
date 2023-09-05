import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RutasComponent } from './rutas/rutas.component';
import { RutasRegistroComponent } from './rutas-registro/rutas-registro.component';
import { FiltradoComponent } from './filtrado/filtrado.component';
import { AddRoutesComponent } from './add-routes/add-routes.component';
const routes: Routes = [
  { path: "rutas", component: RutasComponent },
  { path: "rutas-registro", component: AddRoutesComponent },
  { path: "filtrado", component: FiltradoComponent },
  { path: " ", redirectTo: '/main', pathMatch: 'full' },
  { path: "**", redirectTo: "main" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
