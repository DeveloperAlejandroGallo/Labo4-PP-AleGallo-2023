import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/modelos/pelicula';
import { PeliculasService } from 'src/app/services/peliculas.service';



@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  /**
   *
   */
  constructor(
    private pelis: PeliculasService
    ) {

  }

  listadoPeliculas = Array<Pelicula>();
  peliculaSeleccionada?: Pelicula;

  ngOnInit(): void {
    this.listadoPeliculas = this.pelis.listadoPeliculas;
  }

  recibirPelicula(peli: Pelicula) {
      this.peliculaSeleccionada = peli;

    }

  borrarPelicula(peli: Pelicula){
    this.listadoPeliculas = this.listadoPeliculas.filter((p) => p.id !== peli.id);

  }
}
