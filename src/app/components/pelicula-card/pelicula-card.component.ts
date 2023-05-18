import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Generos } from 'src/app/modelos/generos';
import { Pelicula } from 'src/app/modelos/pelicula';
import { PeliculasService } from 'src/app/services/peliculas.service';


@Component({
  selector: 'app-pelicula-card',
  templateUrl: './pelicula-card.component.html',
  styleUrls: ['./pelicula-card.component.css']
})
export class PeliculaCardComponent implements OnInit {

  constructor(private peliServicio: PeliculasService,
              private router: Router,
              private activatedRoute: ActivatedRoute){}

  @Input() peliSeleccionadaInput?: Pelicula;
  @Input() accion?: string = "Detalle";

  ngOnInit(): void {

  }

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
      this.router.navigate(['/pelicula/alta',this.peliSeleccionadaInput!.id]);
    }


}
