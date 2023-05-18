import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pais } from 'src/app/modelos/pais';
import { Repartidor } from 'src/app/modelos/repartidor';
import { RepartidorService } from 'src/app/services/repartidor.service';
import { ToastMsgService } from 'src/app/services/toast-msg.service';

@Component({
  selector: 'app-carga-repartidor',
  templateUrl: './carga-repartidor.component.html',
  styleUrls: ['./carga-repartidor.component.css']
})
export class CargaRepartidorComponent implements OnInit{

  constructor(private repartidorService: RepartidorService,
              private router: Router,
              private messages: ToastMsgService){}

  @Input() nacionalidadInput!: Pais;

  repartidorForm!: FormGroup;

  ngOnInit(): void {
    this.repartidorForm = new FormGroup({
      dni                 : new FormControl('', Validators.required),
      nombre              : new FormControl('', Validators.required),
      edad                : new FormControl('', Validators.min(18)),
      capacidadTransporte :  new FormControl('', Validators.min(2)),
      paisOrigen          : new FormControl('', Validators.required),
      unidadPropia        : new FormControl('', Validators.required),
    });
  }



get dniRepartidor(){return this.repartidorForm.get('dni')?.value;}
get nombreRepartidor(){return this.repartidorForm.get('nombre')?.value;}
get edadRepartidor(){return this.repartidorForm.get('edad')?.value;}
get capacidadTransporteRepartidor(){return this.repartidorForm.get('capacidadTransporte')?.value;}
get paisOrigenRepartidor(){return this.repartidorForm.get('paisOrigen')?.value;}
get unidadPropiaRepartidor(){return this.repartidorForm.get('unidadPropia')?.value;}

set dniRepartidor(value: number){this.repartidorForm.setValue({dni:value})}
set nombreRepartidor(value: string){this.repartidorForm.setValue({nombre:value})}
set edadRepartidor(value: number){this.repartidorForm.setValue({edad:value})}
set capacidadTransporteRepartidor(value: number){this.repartidorForm.setValue({capacidadTransporte:value})}
set paisOrigenRepartidor(value: string){this.repartidorForm.setValue({paisOrigen:value})}
set unidadPropiaRepartidor(value: boolean){this.repartidorForm.setValue({unidadPropia:value})}


onSubmit(){
  let repaAux: Repartidor = {
    id                  :'',
    dni                 :this.dniRepartidor,
    nombre              :this.nombreRepartidor,
    edad                :this.edadRepartidor,
    capacidadTransporte :this.capacidadTransporteRepartidor,
    paisOrigen          :this.paisOrigenRepartidor,
    unidadPropia        :this.unidadPropiaRepartidor,
  }

  this.repartidorService.nuevo(repaAux);
  this.repartidorForm.reset();
  this.messages.Info(`Reaprtidor ${repaAux.nombre} creado.`);
  this.router.navigate(['/repartidores']);
}

}
