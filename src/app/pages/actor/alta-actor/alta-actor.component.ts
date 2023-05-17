import { Component } from '@angular/core';
import { Pais } from 'src/app/modelos/pais';


@Component({
  selector: 'app-alta-actor',
  templateUrl: './alta-actor.component.html',
  styleUrls: ['./alta-actor.component.css']
})
export class AltaActorComponent {

  constructor(
    // private actorServ: ActorService
    ){}
  paisActor!: Pais;


  recibirPais($event: Pais){
    console.log('AltaActor',$event.flags.png)
    this.paisActor = $event;
  }
}
