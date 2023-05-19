import { Component, EventEmitter, Output } from '@angular/core';
import { Repartidor } from 'src/app/modelos/repartidor';
import { RepartidorService } from 'src/app/services/repartidor.service';

@Component({
  selector: 'app-tabla-repartidor',
  templateUrl: './tabla-repartidor.component.html',
  styleUrls: ['./tabla-repartidor.component.css']
})
export class TablaRepartidorComponent {
  constructor(private repartidorService: RepartidorService){}

  @Output() repaSeleccionadoOutput: EventEmitter<Repartidor> = new EventEmitter<Repartidor>();

  listaRepartidores!: Array<Repartidor>;

  ngOnInit(): void {
    this.listaRepartidores = this.repartidorService.listadoRepartidores;
  }

  seleccionarRepartidor(actor: Repartidor){
    this.repaSeleccionadoOutput.emit(actor);
  }
}
