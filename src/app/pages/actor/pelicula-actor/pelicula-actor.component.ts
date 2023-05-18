import { Component } from '@angular/core';
import { Actor } from 'src/app/modelos/actor';
import { Pais } from 'src/app/modelos/pais';
import { Pelicula } from 'src/app/modelos/pelicula';
import { PaisesService } from 'src/app/services/paises.service';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-pelicula-actor',
  templateUrl: './pelicula-actor.component.html',
  styleUrls: ['./pelicula-actor.component.css']
})
export class PeliculaActorComponent {

  constructor(private paisServ: PaisesService,
              private peliServ: PeliculasService){}

  public actorRecibido!: Actor;
  public paisPelicula!: Pais;
  public peliculasActor!: Array<Pelicula>;

  recibirActor($event: Actor){
    this.actorRecibido = $event;
    this.paisPelicula = this.paisServ.listaPaises.filter(x=>x.name.common == this.actorRecibido.nacionalidad)[0];
    this.peliculasActor = this.peliServ.listadoPeliculas.filter(x =>
                                x.actores?.filter(y=> y.id == this.actorRecibido.id).length! > 0);

  }


}
