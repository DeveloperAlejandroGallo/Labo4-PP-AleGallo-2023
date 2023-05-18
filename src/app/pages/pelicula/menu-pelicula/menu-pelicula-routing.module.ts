import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaPeliculaComponent } from '../alta-pelicula/alta-pelicula.component';
import { ListadoPeliculaComponent } from '../listado-pelicula/listado-pelicula.component';
import { MenuPeliculaComponent } from './menu-pelicula.component';

const routes: Routes = [
  {path:'', component: MenuPeliculaComponent},
  {path: 'pelicula/alta', component: AltaPeliculaComponent},
  {path: 'pelicula/listado', component: ListadoPeliculaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuPeliculaRoutingModule { }
