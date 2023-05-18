import { Component, Input } from '@angular/core';
import { Actor } from 'src/app/modelos/actor';

@Component({
  selector: 'app-actor-card',
  templateUrl: './actor-card.component.html',
  styleUrls: ['./actor-card.component.css']
})
export class ActorCardComponent {

  @Input() actorSeleccionado!: Actor;

}
