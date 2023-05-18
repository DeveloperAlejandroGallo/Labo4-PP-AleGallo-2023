import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Actor } from 'src/app/modelos/actor';
import { Flag, Name, Pais } from 'src/app/modelos/pais';
import { ActorService } from 'src/app/services/actores.service';
import { ToastMsgService } from 'src/app/services/toast-msg.service';

@Component({
  selector: 'app-abm-actor',
  templateUrl: './abm-actor.component.html',
  styleUrls: ['./abm-actor.component.css']
})
export class AbmActorComponent implements OnInit{

  constructor(private servActor: ActorService,
              private messages: ToastMsgService,
              private router: Router
              ) {
                this.abmInput = 'a';
               }
  @Input() nacionalidadInput!: Pais;
  @Input() actorInput!: Actor;
  @Input() abmInput!: string; //a: alta - b: baja - m: modificacion - v: visualizacion
  @Output() actorOutput: EventEmitter<Actor> = new EventEmitter<Actor>();
  @Output() limpiarNacionalidadInputOutput: EventEmitter<boolean> = new EventEmitter<boolean>();

  actor!: Actor;
  msg!: string;


  foto: string = '';
  publicURL!: string;

  actorForm!: FormGroup;

  ngOnInit(): void {
    this.actorForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      sexo:  new FormControl('', Validators.required),
      nacionalidad: new FormControl('', Validators.required),
      foto: new FormControl(''),
    });
  }

  //Form Getters

  get nombreActor(){
    return this.actorForm.get('nombre')?.value;
  }
  set nombreActor(value: string){
    this.actorForm.setValue({nombre: value});
  }
  get apellidoActor(){
    return this.actorForm.get('apellido')?.value;
  }
  set apellidoActor(value: string){
    this.actorForm.setValue({apellido: value});
  }
  get sexoActor(){
    return this.actorForm.get('sexo')?.value;
  }
  set sexoActor(value: string){
    this.actorForm.setValue({sexo: value});
  }
  get nacionalidadActor(){
    return this.actorForm.get('nacionalidad')?.value;
  }
  set nacionalidadActor(value: string){
    this.actorForm.setValue({nacionalidad: value});
  }
  get fotoActor(){
    return this.actorForm.get('foto')?.value;
  }
  set fotoActor(value: string){
    this.actorForm.setValue({foto: value});
  }

  public onSubmitActor() {

    //Crear actor:
    let actorNuevo: Actor = {
      id: '',
      nombre: this.nombreActor,
      apellido: this.apellidoActor,
      sexo: this.sexoActor,
      nacionalidad: this.nacionalidadActor,
      foto: this.fotoActor,
    };


      console.log('Nuevo Actor', actorNuevo)
      this.servActor.nuevo(actorNuevo);
      this.messages.Info(`Actor ${actorNuevo.nombre}, ${actorNuevo.apellido} creado.`);
      this.actorForm.reset();
      this.router.navigate(['/actores'])


  }


  public LimpiarCampos() {
    // let nombreCommon: Name = {
    //   common: ''
    // }
    // let flagsPng: Flag = {
    //   png: ''
    // }
    // let paisLimpio: Pais = {
    //   name: nombreCommon,
    //   flags: flagsPng,
    // }


    this.nombreActor = "";
    this.apellidoActor = "";
    this.sexoActor = "";
    this.nacionalidadActor = "";
    this.fotoActor = "";

  }






}
