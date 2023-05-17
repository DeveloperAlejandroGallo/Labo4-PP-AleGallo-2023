import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pais } from '../modelos/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  listaPaises!: Array<Pais>;
  constructor(private http: HttpClient) {  }

  todosLosPaises() {
    this.http.get(environment.urlPaises).subscribe({
      next: (paises) => {
        this.listaPaises = paises as Array<Pais>;
        console.log('Pais Service:',this.listaPaises);
      },
      error: (err) =>  console.error('Error al leer los paises: ' + err),
    });
  }


}
