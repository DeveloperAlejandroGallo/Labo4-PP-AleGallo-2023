import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actor } from 'src/app/modelos/actor';
import { Pelicula } from 'src/app/modelos/pelicula';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-alta-pelicula',
  templateUrl: './alta-pelicula.component.html',
  styleUrls: ['./alta-pelicula.component.css']
})
export class AltaPeliculaComponent implements OnInit{

  constructor(private activatedRoute: ActivatedRoute,
              private peliServ: PeliculasService){
                this.accion = "Alta";

              }

  accion: string;
  actoresSeleccionados: Array<Actor> = [];
  peliAModificar!: Pelicula;

  idAModificar: any;

  ngOnInit(): void {

    this.idAModificar = this.activatedRoute.snapshot.paramMap.get("id");

    if(this.idAModificar != (null && undefined))
    {
      this.accion = "Modificar";
      this.peliAModificar = this.peliServ.listadoPeliculas.filter(peli=>peli.id == this.idAModificar)[0];
    }



  }


  recibirActor($event: Actor){

    let cantidad = this.actoresSeleccionados.filter(a=>a.id == $event.id).length;

    if(cantidad == 0)
    {
      this.actoresSeleccionados.push($event);
    }
  }

  recibirActorAEliminar($event: Actor){
    this.actoresSeleccionados = this.actoresSeleccionados.filter(a=>a.id != $event.id);
  }

}
