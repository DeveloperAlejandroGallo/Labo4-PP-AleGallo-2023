import { Component, Input } from '@angular/core';
import { Generos } from 'src/app/modelos/generos';
import { Pelicula } from 'src/app/modelos/pelicula';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-pelicula-card',
  templateUrl: './pelicula-card.component.html',
  styleUrls: ['./pelicula-card.component.css']
})
export class PeliculaCardComponent {

  constructor(private peliServicio: PeliculasService){}

  @Input() peliSeleccionadaInput?: Pelicula;
  @Input() accion?: string = "Detalle";

  getGenero(genero: Generos) {
    return Generos[genero];
    }

    esBaja():boolean{
      return this.accion == "Borrar";
    }

    esDetalle():boolean{
      return this.accion == "Detalle";
    }

    esModificacion():boolean{
      return this.accion == "Modificar";
    }

    bajaPelicula() {
      this.peliServicio.delete(this.peliSeleccionadaInput!.id);
    }

    modificarPelicula(){

    }
}
