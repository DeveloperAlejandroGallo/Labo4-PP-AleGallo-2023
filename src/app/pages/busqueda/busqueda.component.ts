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
    private pelisService: PeliculasService
    ) {}

  listadoPeliculas = Array<Pelicula>();
  peliculaSeleccionada?: Pelicula;

  ngOnInit(): void {
    this.listadoPeliculas = this.pelisService.listadoPeliculas;
  }

  recibirPelicula(peli: Pelicula) {
      this.peliculaSeleccionada = peli;

    }

}
