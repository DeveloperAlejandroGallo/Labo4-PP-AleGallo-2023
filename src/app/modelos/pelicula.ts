import { Actor } from "./actor";

export interface Pelicula {
  id: string;
  Titulo: string;
  Genero?: string;
  fechaEstreno?: string;
  cantidadPublico: number;
  fotoPelicula: string;
  actores?: Array<Actor>;

  /**
   *
   */
  // constructor(
  //   id: number,
  //   nombre: string,
  //   genero: Generos,
  //   fechaEstreno: Date,
  //   cantidadPublico: number,
  //   fotoPelicula: string) {

  //     this.id = id;
  //     this.Titulo = nombre;
  //     this.Genero = genero;
  //     this.fechaEstreno = fechaEstreno;
  //     this.cantidadPublico = cantidadPublico;
  //     this.fotoPelicula = fotoPelicula;

  // }
}
