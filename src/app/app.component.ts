import { Component, OnInit } from '@angular/core';
import { PaisesService } from './services/paises.service';
import { PeliculasService } from './services/peliculas.service';
import { ActorService } from './services/actores.service';
import { ImagenesService } from './services/imagenes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(
    private paisService: PaisesService,
    private peliculasService: PeliculasService,
    private actoresService: ActorService,
    private imagenesService: ImagenesService
    ){}

  title = 'Labo4-PP-AleGallo-2023';

  ngOnInit(): void {
    //Me suscribo a las colecciones al ppio 1 vez
    this.paisService.todosLosPaises();
    this.peliculasService.traerPeliculas();
    this.actoresService.traer();
    this.imagenesService.getImages();

  }


}
