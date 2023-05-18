import { Component } from '@angular/core';
import { Actor } from 'src/app/modelos/actor';
import { Pelicula } from 'src/app/modelos/pelicula';

@Component({
  selector: 'app-alta-pelicula',
  templateUrl: './alta-pelicula.component.html',
  styleUrls: ['./alta-pelicula.component.css']
})
export class AltaPeliculaComponent {

  actoresSeleccionados: Array<Actor> = [];

  recibirActor($event: Actor){

    let cantidad = this.actoresSeleccionados.filter(a=>a.id == $event.id).length;

    if(cantidad == 0)
    {
      this.actoresSeleccionados.push($event);
    }
  }

  recibirActorAEliminar($event: Actor){
    this.actoresSeleccionados = this.actoresSeleccionados.filter(a=>a.id != $event.id);
  }

}
