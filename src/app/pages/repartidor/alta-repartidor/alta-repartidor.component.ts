import { Component } from '@angular/core';
import { Pais } from 'src/app/modelos/pais';

@Component({
  selector: 'app-alta-repartidor',
  templateUrl: './alta-repartidor.component.html',
  styleUrls: ['./alta-repartidor.component.css']
})
export class AltaRepartidorComponent {
  constructor(

    ){}
  paisRepartidor!: Pais;


  recibirPais($event: Pais){
    console.log('AltaActor',$event.flags.png)
    this.paisRepartidor = $event;
  }
}
