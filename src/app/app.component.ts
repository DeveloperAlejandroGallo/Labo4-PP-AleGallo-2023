import { Component, OnInit } from '@angular/core';
import { PaisesService } from './services/paises.service';
import { ImagenesService } from './services/imagenes.service';
import { RepartidorService } from './services/repartidor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(
    private paisService: PaisesService,
    private imagenesService: ImagenesService,
    private repartService: RepartidorService
    ){}

  title = 'Labo4-PP-AleGallo-2023';

  ngOnInit(): void {
    //Me suscribo a las colecciones al ppio 1 vez
    this.paisService.todosLosPaises();
    this.imagenesService.getImages();
    this.repartService.traer();
  }


}
