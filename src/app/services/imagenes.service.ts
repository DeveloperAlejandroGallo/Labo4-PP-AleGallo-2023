import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';
import { Imagen } from '../modelos/imagen';
import { ToastMsgService } from './toast-msg.service';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  listaImagenes: Array<Imagen>;

  constructor(private storage: Storage, private messages: ToastMsgService) {
    this.listaImagenes = [];
  }

  uploadImage($event: any) {
    const file = $event.target.files[0];
    console.log(file);

    const imgRef = ref(this.storage, `imagenes/${file.name}`);

    uploadBytes(imgRef, file)
      .then(response => {
        console.log(response)
        this.getImages();
        this.messages.Info('Imagen subida correctamente');
      })
      .catch(error => console.log(error));

  }

  getImages() {
    const imagesRef = ref(this.storage, 'imagenes');

    listAll(imagesRef)
      .then(async response => {
        console.log(response);
        this.listaImagenes = [];
        for (let item of response.items) {
          console.log('getImages - Item: ', item);
          const url = await getDownloadURL(item);
          this.listaImagenes.push({nombre: item.name,url:url});
        }
      })
      .catch(error => console.log(error));
  }

}
