import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuActorComponent } from './menu-actor.component';
import { AltaActorComponent } from '../alta-actor/alta-actor.component';
import { ListadoActorComponent } from '../listado-actor/listado-actor.component';
import { PeliculaActorComponent } from '../pelicula-actor/pelicula-actor.component';


const routes: Routes = [
  {path:'', component: MenuActorComponent},
  {path: 'actor/alta', component: AltaActorComponent},
  {path: 'actor/listado', component: ListadoActorComponent},
  {path: 'actor/actor-pelicula', component: PeliculaActorComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuActorRoutingModule { }
