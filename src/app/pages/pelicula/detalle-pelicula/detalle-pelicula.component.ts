import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Generos } from 'src/app/modelos/generos';
import { Pelicula } from 'src/app/modelos/pelicula';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent {

  @Input() detalle_peliSeleccionadaInput?: Pelicula;


  getGenero(genero: Generos){
    return Generos[genero];
  }
}
