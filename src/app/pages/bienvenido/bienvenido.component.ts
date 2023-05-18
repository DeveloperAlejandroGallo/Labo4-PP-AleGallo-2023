import { Component, OnInit } from '@angular/core';
import { GitInfo } from 'src/app/modelos/git-info';
import { GitService } from 'src/app/services/git.service';



@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit{

  gitInfo!: GitInfo;
  constructor(
      private gitServ: GitService
    ){}


ngOnInit(): void {
    this.gitServ.informacionGit();
    setTimeout(()=>{
      this.gitInfo = this.gitServ.infoGit;
      console.log(this.gitServ.infoGit);
    },500);

}


}
