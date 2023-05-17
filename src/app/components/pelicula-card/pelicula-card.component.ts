import { Component, Input } from '@angular/core';
import { Generos } from 'src/app/modelos/generos';
import { Pelicula } from 'src/app/modelos/pelicula';

@Component({
  selector: 'app-pelicula-card',
  templateUrl: './pelicula-card.component.html',
  styleUrls: ['./pelicula-card.component.css']
})
export class PeliculaCardComponent {

  @Input() peliSeleccionadaInput?: Pelicula;
  @Input() accion?: string;

  getGenero(genero: Generos) {
    return Generos[genero];
    }
}
