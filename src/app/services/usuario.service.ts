import { Injectable } from '@angular/core';
import { addDoc, collection, collectionChanges, collectionData, CollectionReference, deleteDoc, doc, DocumentData, Firestore, getDoc, getDocs, setDoc, updateDoc } from '@angular/fire/firestore';
import { Usuario } from '../modelos/user';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  colectionName: string = 'usuarios';
  coleccionUsuarios: CollectionReference<DocumentData>;

  constructor(private firestore: Firestore) {
    this.coleccionUsuarios = collection(this.firestore, this.colectionName);
   }

  listadoUsuarios!: Array<Usuario>;

//Genericos
  traer(){
    const coleccion = collection(this.firestore, this.colectionName);
    const observable = collectionData(coleccion);

    observable.subscribe((respuesta)=>{
      this.listadoUsuarios = respuesta as Array<Usuario>;
    });
  }



  delete(id: string){
    const coleccion = collection(this.firestore, this.colectionName);
    const documento = doc(coleccion,id);
    deleteDoc(documento);
  }


//Usuario
  nuevo(usuario: Usuario) {

    const docuNuevo = doc(this.coleccionUsuarios);
    // addDoc(coleccion, objeto);
    const nuevoId = docuNuevo.id;

    setDoc(docuNuevo, {
      id: nuevoId,
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      email: usuario.email,
      clave: usuario.clave,
      foto: usuario.foto,
    });
  }

  update(usuario: Usuario){
    const coleccion = collection(this.firestore, this.colectionName);
    const documento = doc(coleccion,usuario.id);
    updateDoc(documento,{
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      email: usuario.email,
      clave: usuario.clave,
      foto: usuario.foto,
    })
  }
}
