import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';

import { ErrorComponent } from './pages/error/error.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { AltaPeliculaComponent } from './pages/pelicula/alta-pelicula/alta-pelicula.component';
import { ListadoPeliculaComponent } from './pages/pelicula/listado-pelicula/listado-pelicula.component';
import { AltaActorComponent } from './pages/actor/alta-actor/alta-actor.component';
import { ListadoActorComponent } from './pages/actor/listado-actor/listado-actor.component';
import { MenuActorComponent } from './pages/actor/menu-actor/menu-actor.component';
import { MenuPeliculaComponent } from './pages/pelicula/menu-pelicula/menu-pelicula.component';
import { PeliculaActorComponent } from './pages/actor/pelicula-actor/pelicula-actor.component';

//Agregar Lazy Loading
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'bienvenido' },
  {path: 'bienvenido',component: BienvenidoComponent },
  {path: 'error',component: ErrorComponent },
  {path: 'busqueda', component: BusquedaComponent},
  {path: 'peliculas', component: MenuPeliculaComponent},
  {path: 'pelicula/alta/:id', component: AltaPeliculaComponent},
  {path: 'pelicula/listado', component: ListadoPeliculaComponent},
  {path: 'actores', component: MenuActorComponent},
  {path: 'actor/alta', component: AltaActorComponent},
  {path: 'actor/listado', component: ListadoActorComponent},
  {path: 'actor/actor-pelicula', component: PeliculaActorComponent},

  {path: '**', pathMatch: 'full', redirectTo: 'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
