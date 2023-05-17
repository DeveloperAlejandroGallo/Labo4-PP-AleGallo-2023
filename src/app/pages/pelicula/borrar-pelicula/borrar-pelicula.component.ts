import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pelicula } from 'src/app/modelos/pelicula';

@Component({
  selector: 'app-borrar-pelicula',
  templateUrl: './borrar-pelicula.component.html',
  styleUrls: ['./borrar-pelicula.component.css']
})
export class BorrarPeliculaComponent {

  @Input() borrar_peliSeleccionadaInput?: Pelicula;
  @Output() borrar_peliSeleccionadaOutput: EventEmitter<Pelicula> = new EventEmitter<Pelicula>();


  borrarPelicula() {
    this.borrar_peliSeleccionadaOutput.emit(this.borrar_peliSeleccionadaInput);
    }
}
