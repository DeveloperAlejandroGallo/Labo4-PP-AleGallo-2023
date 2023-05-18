import { Injectable } from '@angular/core';
import { addDoc, collection, collectionChanges, collectionData, CollectionReference, deleteDoc, doc, DocumentData, Firestore, getDoc, getDocs, setDoc, updateDoc } from '@angular/fire/firestore';
import { Pelicula } from '../modelos/pelicula';
import { Generos } from '../modelos/generos';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private firestore: Firestore) {
    this.coleccionPeliculas = collection(this.firestore, this.colectionName);
   }

  colectionName: string = 'peliculas';
  coleccionPeliculas!: CollectionReference<DocumentData>;

  listadoPeliculas!: Array<Pelicula>;

//Genericos
  traerPeliculas(){
    const coleccion = collection(this.firestore, this.colectionName);
    const observable = collectionData(coleccion);

    observable.subscribe((respuesta)=>{
      this.listadoPeliculas = respuesta as Array<Pelicula>;
    });
  }



  delete(id: string){
    const coleccion = collection(this.firestore, this.colectionName);
    const documento = doc(coleccion,id);
    deleteDoc(documento);
  }

  nuevo(pelicula: Pelicula) {

    const docuNuevo = doc(this.coleccionPeliculas);
    // addDoc(coleccion, objeto);
    const nuevoId = docuNuevo.id;
    if(pelicula.fotoPelicula.includes("C:\\fakepath\\"))
      pelicula.fotoPelicula = pelicula.fotoPelicula.split("C:\\fakepath\\")[1];
    setDoc(docuNuevo, {
      id: nuevoId,
      Titulo: pelicula.Titulo,
      Genero: pelicula.Genero,
      fechaEstreno: pelicula.fechaEstreno,
      cantidadPublico: pelicula.cantidadPublico,
      fotoPelicula: pelicula.fotoPelicula,
      actores: pelicula.actores
    });

  }

  update(pelicula: Pelicula){
    const coleccion = collection(this.firestore, this.colectionName);
    const documento = doc(coleccion,pelicula.id);
    updateDoc(documento,{
      Titulo: pelicula.Titulo,
      Genero: pelicula.Genero,
      fechaEstreno: pelicula.fechaEstreno,
      cantidadPublico: pelicula.cantidadPublico,
      fotoPelicula: pelicula.fotoPelicula,
      actores: pelicula.actores
    })
  }

  insertPelis(){
    let pelis: Array<Pelicula> =  [
      {id: '', Titulo: 'Lord of The Rings', Genero: Generos.CienciaFiccion.toString(), fechaEstreno: new Date(2002,10,1).toLocaleDateString(), cantidadPublico: 12222, fotoPelicula: '../../../assets/LoTR.jpeg'},
      {id: '', Titulo: 'Matrix', Genero: Generos.CienciaFiccion.toString(), fechaEstreno: new Date(2000,10,1).toLocaleDateString(), cantidadPublico: 55555, fotoPelicula: '../../../assets/Matrix.jpeg'},
      {id: '', Titulo: 'Avengers', Genero: Generos.CienciaFiccion.toString(), fechaEstreno: new Date(2015,1,1).toLocaleDateString(), cantidadPublico: 66666, fotoPelicula: '../../../assets/avengers.jpeg'},
      {id: '', Titulo: 'Jhon Wick', Genero: Generos.CienciaFiccion.toString(), fechaEstreno: new Date(2002,5,1).toLocaleDateString(), cantidadPublico: 777777, fotoPelicula: '../../../assets/jhonWick.jpeg'},
      {id: '', Titulo: 'Dracula', Genero: Generos.CienciaFiccion.toString(), fechaEstreno: new Date(1995,10,1).toLocaleDateString(), cantidadPublico: 999999, fotoPelicula: '../../../assets/Dracula.jpeg'},
      {id: '', Titulo: 'La caida del Halcon negro', Genero: Generos.CienciaFiccion.toString(), fechaEstreno: new Date(2005,11,1).toLocaleDateString(), cantidadPublico: 888888, fotoPelicula: '../../../assets/LCHN.jpeg'},
    ];

    pelis.forEach(peli => {
      this.nuevo(peli);
    });

  }

}
