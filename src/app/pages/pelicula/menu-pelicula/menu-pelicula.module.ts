import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuPeliculaRoutingModule } from './menu-pelicula-routing.module';
import { MenuPeliculaComponent } from './menu-pelicula.component';



@NgModule({
  imports: [
    CommonModule,
    MenuPeliculaRoutingModule
  ],
  exports: [
    // MenuPeliculaComponent
  ],
  declarations: [
    // MenuPeliculaComponent
  ],
  providers: [
  ],
})
export class MenuPeliculaModule { }
