import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GitInfo } from '../modelos/git-info';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  infoGit!: GitInfo;
  constructor(private http: HttpClient) {  }

  informacionGit() {
    this.http.get(environment.urlGitAG).subscribe({
      next: (info) => {
        this.infoGit = info as GitInfo;
        console.log('Git Service:',this.infoGit);
      },
      error: (err) =>  console.error('Error al leer git: ' + err),
    });
  }
}
