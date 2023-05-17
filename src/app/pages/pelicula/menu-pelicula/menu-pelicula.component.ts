import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-pelicula',
  templateUrl: './menu-pelicula.component.html',
  styleUrls: ['./menu-pelicula.component.css']
})
export class MenuPeliculaComponent {

  constructor(private router: Router) { }
  public irBuscarPeli() {
    this.router.navigate(['/busqueda']);
  }

    public irAltaPeli(){
      this.router.navigate(['/pelicula/alta']);
    }
}
