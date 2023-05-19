import { Injectable } from '@angular/core';
import { addDoc, collection, collectionChanges, collectionData, CollectionReference, deleteDoc, doc, DocumentData, Firestore, getDoc, getDocs, setDoc, updateDoc } from '@angular/fire/firestore';
import { Repartidor } from '../modelos/repartidor';


@Injectable({
  providedIn: 'root'
})
export class RepartidorService {

  colectionName: string = 'repartidores';
  nombreColeccion: CollectionReference<DocumentData>;

  constructor(private firestore: Firestore) {
    this.nombreColeccion = collection(this.firestore, this.colectionName);
   }

  listadoRepartidores!: Array<Repartidor>;

//Genericos
  traer(){
    const coleccion = collection(this.firestore, this.colectionName);
    const observable = collectionData(coleccion);

    observable.subscribe((respuesta)=>{
      this.listadoRepartidores = respuesta as Array<Repartidor>;
    });
  }



  delete(id: string){
    const coleccion = collection(this.firestore, this.colectionName);
    const documento = doc(coleccion,id);
    deleteDoc(documento);
  }


//Usuario
  nuevo(repartidor: Repartidor) {

    const docuNuevo = doc(this.nombreColeccion);
    // addDoc(coleccion, objeto);
    const nuevoId = docuNuevo.id;

    setDoc(docuNuevo, {
      id                  :nuevoId,
      dni                 :repartidor.dni,
      nombre              :repartidor.nombre,
      edad                :repartidor.edad,
      capacidadTransporte :repartidor.capacidadTransporte,
      paisOrigen          :repartidor.paisOrigen,
      unidadPropia        :repartidor.unidadPropia,
    });
  }

  update(repartidor: Repartidor){
    const coleccion = collection(this.firestore, this.colectionName);
    const documento = doc(coleccion,repartidor.id);
    updateDoc(documento,{
      dni                 :repartidor.dni,
      nombre              :repartidor.nombre,
      edad                :repartidor.edad,
      capacidadTransporte :repartidor.capacidadTransporte,
      paisOrigen          :repartidor.paisOrigen,
      unidadPropia        :repartidor.unidadPropia,
    })
  }
}
