import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pais } from 'src/app/modelos/pais';

@Component({
  selector: 'app-menu-actor',
  templateUrl: './menu-actor.component.html',
  styleUrls: ['./menu-actor.component.css']
})
export class MenuActorComponent {

  constructor(private router: Router) { }
  pais!: Pais;

  public recibirPais(pais: Pais) {
    this.pais = pais;
  }

  public irARuta(ruta: string){

    this.router.navigate([ruta]);
  }




}
