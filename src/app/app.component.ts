import { Component, OnInit } from '@angular/core';
import { PaisesService } from './services/paises.service';
import { PeliculasService } from './services/peliculas.service';
import { ActorService } from './services/actores.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(
    private paisService: PaisesService,
    private peliculasService: PeliculasService,
    private actoresService: ActorService
    ){}

  title = 'Labo4-PP-AleGallo-2023';

  ngOnInit(): void {
    this.paisService.todosLosPaises(); //Me suscribo a los paises al princio
    this.peliculasService.traerPeliculas()

  }


}
