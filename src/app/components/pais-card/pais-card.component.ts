import { Component, Input } from '@angular/core';
import { Pais } from 'src/app/modelos/pais';


@Component({
  selector: 'app-pais-card',
  templateUrl: './pais-card.component.html',
  styleUrls: ['./pais-card.component.css']
})
export class PaisCardComponent {
  @Input() paisRecibido!: Pais;
}
