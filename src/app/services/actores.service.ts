import { Injectable } from '@angular/core';
import { addDoc, collection, collectionChanges, collectionData, CollectionReference, deleteDoc, doc, DocumentData, Firestore, getDoc, getDocs, setDoc, updateDoc } from '@angular/fire/firestore';
import { Actor } from '../modelos/actor';


@Injectable({
  providedIn: 'root'
})
export class ActorService {

  colectionName: string = 'actores';
  coleccionActores: CollectionReference<DocumentData>;

  constructor(private firestore: Firestore) {
    this.coleccionActores = collection(this.firestore, this.colectionName);
   }

  listadoActores!: Array<Actor>;

//Genericos
  traer(){
    const coleccion = collection(this.firestore, this.colectionName);
    const observable = collectionData(coleccion);

    observable.subscribe((respuesta)=>{
      this.listadoActores = respuesta as Array<Actor>;
    });
  }



  delete(id: string){
    const coleccion = collection(this.firestore, this.colectionName);
    const documento = doc(coleccion,id);
    deleteDoc(documento);
  }

  nuevo(actor: Actor) {

    const docuNuevo = doc(this.coleccionActores);
    // addDoc(coleccion, objeto);
    const nuevoId = docuNuevo.id;

    setDoc(docuNuevo, {
      id: nuevoId,
      nombre: actor.nombre,
      apellido: actor.apellido,
      foto: actor.foto,
      sexo: actor.sexo,
      nacionalidad: actor.nacionalidad,
    });
  }

  update(actor: Actor){
    const coleccion = collection(this.firestore, this.colectionName);
    const documento = doc(coleccion,actor.id);
    updateDoc(documento,{
      nombre: actor.nombre,
      apellido: actor.apellido,
      foto: actor.foto,
      sexo: actor.sexo,
      nacionalidad: actor.nacionalidad,
    })
  }
}
