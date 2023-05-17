import { Component } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';


@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent {

  constructor(
      private peliServ: PeliculasService
    ){}

  insertPelis(){
    this.peliServ.insertPelis();
  }
  getPelis(){
      console.log(this.peliServ.listadoPeliculas);
  }
}
