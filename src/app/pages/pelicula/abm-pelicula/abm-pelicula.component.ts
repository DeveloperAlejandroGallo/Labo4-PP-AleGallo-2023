import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Actor } from 'src/app/modelos/actor';
import { Pelicula } from 'src/app/modelos/pelicula';
import { ImagenesService } from 'src/app/services/imagenes.service';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { ToastMsgService } from 'src/app/services/toast-msg.service';

@Component({
  selector: 'app-abm-pelicula',
  templateUrl: './abm-pelicula.component.html',
  styleUrls: ['./abm-pelicula.component.css']
})
export class AbmPeliculaComponent implements OnInit{

constructor(
  private peliServ: PeliculasService,
  private messages: ToastMsgService,
  private imagenService: ImagenesService,
  private router: Router){

}

@Input() actoresQueActuaron: Array<Actor> = [];
@Output() eliminarActorOutput: EventEmitter<Actor> = new EventEmitter<Actor>();

peliculaForm!: FormGroup;
nombreImagen: string = "";

ngOnInit():void {
  this.peliculaForm = new FormGroup({
    titulo: new FormControl('', Validators.required),
    genero: new FormControl('', Validators.required),
    fechaEstreno: new FormControl('', Validators.required),
    cantidadPublico: new FormControl('',[Validators.required, Validators.min(1)]),
    fotoPelicula: new FormControl('', Validators.required),
    // actores: new FormArray([new FormControl('',Validators.required)])
  });
}

// get actores() : FormArray {
//   return this.peliculaForm.get("actores") as FormArray
// }

// nuevoActor(): FormGroup {
//   return new FormGroup({
//     nombre: new FormControl(''),
//     apellido: new FormControl(''),
//   })
// }

// agregarActor() {
//   this.actores.push(this.nuevoActor());
// }

// eliminarActor(i:number) {
//   this.actores.removeAt(i);
// }

eliminarActor(actor: Actor){
  this.eliminarActorOutput.emit(actor);
}

get tituloPelicula(){
  return this.peliculaForm.get('titulo')?.value;
}
set tituloPelicula(value: string){
  this.peliculaForm.setValue({titulo: value});
}

get generoPelicula(){
  return this.peliculaForm.get('genero')?.value;
}
set generoPelicula(value: string){
  this.peliculaForm.setValue({genero: value});
}

get fechaEstrenoPelicula(){
  return this.peliculaForm.get('fechaEstreno')?.value;
}
set fechaEstrenoPelicula(value: string){
  this.peliculaForm.setValue({fechaEstreno: value});
}

get cantidadPublicoPelicula(){
  return this.peliculaForm.get('cantidadPublico')?.value;
}
set cantidadPublicoPelicula(value: number){
  this.peliculaForm.setValue({cantidadPublico: value});
}
get fotoPelicula(){
  return this.peliculaForm.get('fotoPelicula')?.value;
}
set fotoPelicula(value: string){
  this.peliculaForm.setValue({fotoPelicula: value});
}

onSubmitPelicula(){
  let peliNueva: Pelicula = {
    id: "",
    Titulo: this.tituloPelicula,
    Genero: this.generoPelicula,
    fechaEstreno: this.fechaEstrenoPelicula,
    cantidadPublico: this.cantidadPublicoPelicula,
    fotoPelicula: this.fotoPelicula,
    actores: this.actoresQueActuaron
  }

    let img = this.imagenService.listaImagenes.filter(x=>x.nombre == this.nombreImagen)[0];
    if(img)
        peliNueva.fotoPelicula = img.url;



  // try
  // {
    this.peliServ.nuevo(peliNueva);
    this.messages.Info(`Pelicula ${peliNueva.Titulo} creada.`);
    this.peliculaForm.reset();
    this.router.navigate(['/peliculas'])

  // }catch(err){
  //   this.messages.Error(`Error al guardar Pelicula ${(err as Error).message}`);
  //   console.log(`Submit Actor: ${(err as Error).message}`);
  // }

}
  LimpiarCampos() {
    this.tituloPelicula="";
    this.generoPelicula="";
    this.fechaEstrenoPelicula="";
    this.cantidadPublicoPelicula=0
    this.fotoPelicula="";
  }

  subirImagen($event: any){
    const file = $event.target.files[0];
    this.nombreImagen = file.name;
    this.imagenService.uploadImage($event);
  }


}
