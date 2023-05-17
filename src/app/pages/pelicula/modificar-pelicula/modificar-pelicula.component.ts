import { Component, Input } from '@angular/core';
import { Generos } from 'src/app/modelos/generos';
import { Pelicula } from 'src/app/modelos/pelicula';

@Component({
  selector: 'app-modificar-pelicula',
  templateUrl: './modificar-pelicula.component.html',
  styleUrls: ['./modificar-pelicula.component.css']
})
export class ModificarPeliculaComponent {

  @Input() modificar_peliSeleccionadaInput?: Pelicula;


  getGenero(genero: Generos){
    return Generos[genero];
  }
}
