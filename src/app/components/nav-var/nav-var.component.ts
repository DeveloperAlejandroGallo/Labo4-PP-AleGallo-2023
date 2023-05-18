import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelos/user';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-nav-var',
  templateUrl: './nav-var.component.html',
  styleUrls: ['./nav-var.component.css']
})
export class NavVarComponent {

  @Input() inputUsuarioConectado?: Usuario;

  constructor(private auth: AuthService,
    private router: Router) {}

  onClickLogOut(){
  this.auth.cerrarSesion(this.inputUsuarioConectado!.email!);
  this.inputUsuarioConectado = this.auth.logInfo();
  setTimeout(() => {
  this.router.navigate(['login']);
  }, 1000);
  }

}
