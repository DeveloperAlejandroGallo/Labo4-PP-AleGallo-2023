import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pelicula } from 'src/app/modelos/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent {

  @Input() peliculaListaInput: Array<Pelicula> = new Array<Pelicula>();
  @Output() peliSeleccionadaOutput: EventEmitter<Pelicula> = new EventEmitter<Pelicula>();


  seleccionarPeli(peli: Pelicula){
    this.peliSeleccionadaOutput.emit(peli);
  }
}
