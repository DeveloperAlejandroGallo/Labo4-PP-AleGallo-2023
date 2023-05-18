import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-repartidor',
  templateUrl: './menu-repartidor.component.html',
  styleUrls: ['./menu-repartidor.component.css']
})
export class MenuRepartidorComponent {
  constructor(private router: Router){

  }


  irA(ruta: string){
    this.router.navigate([ruta]);
  }
}
