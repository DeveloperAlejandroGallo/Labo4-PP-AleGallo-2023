import { Component, EventEmitter, Output } from '@angular/core';
import { Actor } from 'src/app/modelos/actor';
import { ActorService } from 'src/app/services/actores.service';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.css']
})
export class TablaActorComponent {
  constructor(private actoresService: ActorService){}

  @Output() actorSeleccionadoOutput: EventEmitter<Actor> = new EventEmitter<Actor>();

  listaActores!: Array<Actor>;

  ngOnInit(): void {
    this.listaActores = this.actoresService.listadoActores;
  }

  seleccionarActor(actor: Actor){
    this.actorSeleccionadoOutput.emit(actor);
  }
}
