import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/modelos/pelicula';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit{

  constructor(private peliculasService: PeliculasService){}

  @Output() peliSeleccionadaOutput: EventEmitter<Pelicula> = new EventEmitter<Pelicula>();

  @Input() listaPeliculas!: Array<Pelicula>;

  ngOnInit(): void {

  }

  seleccionarPeli(peli: Pelicula){
    this.peliSeleccionadaOutput.emit(peli);
  }
}
