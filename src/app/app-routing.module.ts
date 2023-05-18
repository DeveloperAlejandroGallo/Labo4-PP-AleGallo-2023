import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';

import { ErrorComponent } from './pages/error/error.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuRepartidorComponent } from './pages/repartidor/menu-repartidor/menu-repartidor.component';
import { EstaLogueadoGuard } from './guard/esta-logueado.guard';
import { AltaRepartidorComponent } from './pages/repartidor/alta-repartidor/alta-repartidor.component';
import { ListadoRepartidorComponent } from './pages/repartidor/listado-repartidor/listado-repartidor.component';


//Agregar Lazy Loading
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'bienvenido' },
  {path: 'bienvenido',component: BienvenidoComponent },
  {path: 'error',component: ErrorComponent },
  {path: 'login',component: LoginComponent },
  {path: 'repartidores',component: MenuRepartidorComponent, canActivate: [EstaLogueadoGuard] },
  {path: 'repartidor/alta',component: AltaRepartidorComponent, canActivate: [EstaLogueadoGuard] },
  {path: 'repartidor/listado',component: ListadoRepartidorComponent, canActivate: [EstaLogueadoGuard] },



  {path: '**', pathMatch: 'full', redirectTo: 'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
