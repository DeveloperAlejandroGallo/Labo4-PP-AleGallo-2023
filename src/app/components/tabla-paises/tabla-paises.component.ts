import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pais } from 'src/app/modelos/pais';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit{

  constructor(private paisServ: PaisesService){

  }

  @Output() paisSeleccionadoOut: EventEmitter<Pais> = new EventEmitter<Pais>();

  listaPaises!: Array<Pais>;

  ngOnInit(): void {
    // this.paisServ.todosLosPaises();
    this.listaPaises = this.paisServ.listaPaises.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });

    console.log('Tabla Pais',this.listaPaises);
  }

  seleccionarPais(paisSeleccionado: Pais){
    this.paisSeleccionadoOut.emit(paisSeleccionado);

  }


}
