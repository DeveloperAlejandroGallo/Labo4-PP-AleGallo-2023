import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Forms
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
// Peticiones Http
import { HttpClientModule } from '@angular/common/http'

//Material
//Tablas
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

//Formularios
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule} from '@angular/material/button';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'; //para el datepicker
import { MatCardModule } from '@angular/material/card'
// para poder trabajar con los formatos de fechas =>
// npm install moment --save
// npm i @angular/material-moment-adapter@14.2.7
// import { MomentDateModule } from '@angular/material-moment-adapter';

//Alertas
import { MatSnackBarModule } from '@angular/material/snack-bar';

//Iconos
import { MatIconModule }  from '@angular/material/icon';
//Modales
import { MatDialogModule }  from '@angular/material/dialog';
//Grillas
import { MatGridListModule }  from '@angular/material/grid-list';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavVarComponent } from './components/nav-var/nav-var.component';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';
import { ErrorComponent } from './pages/error/error.component';
import { ActorCardComponent } from './components/actor-card/actor-card.component';
import { PeliculaCardComponent } from './components/pelicula-card/pelicula-card.component';
import { HighligthDirective } from './directivas/highligth.directive';
import { ToastMsgService } from './services/toast-msg.service';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { AltaPeliculaComponent } from './pages/pelicula/alta-pelicula/alta-pelicula.component';
import { ListadoPeliculaComponent } from './pages/pelicula/listado-pelicula/listado-pelicula.component';
import { AltaActorComponent } from './pages/actor/alta-actor/alta-actor.component';
import { ListadoActorComponent } from './pages/actor/listado-actor/listado-actor.component';
import { TablaPeliculaComponent } from './pages/pelicula/tabla-pelicula/tabla-pelicula.component';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';
import { AbmActorComponent } from './pages/actor/abm-actor/abm-actor.component';
import { PeliculasService } from './services/peliculas.service';
import { MenuActorComponent } from './pages/actor/menu-actor/menu-actor.component';
import { MenuPeliculaComponent } from './pages/pelicula/menu-pelicula/menu-pelicula.component';
import { PeliculaActorComponent } from './pages/actor/pelicula-actor/pelicula-actor.component';
import { AbmPeliculaComponent } from './pages/pelicula/abm-pelicula/abm-pelicula.component';
import { TablaActorComponent } from './pages/actor/tabla-actor/tabla-actor.component';
import { PaisCardComponent } from './components/pais-card/pais-card.component';
import { ModificarPeliculaComponent } from './pages/pelicula/modificar-pelicula/modificar-pelicula.component';




@NgModule({
  declarations: [
    AppComponent,
    NavVarComponent,
    BienvenidoComponent,
    ErrorComponent,
    ActorCardComponent,
    PeliculaCardComponent,
    HighligthDirective,
    BusquedaComponent,
    AltaPeliculaComponent,
    ListadoPeliculaComponent,
    AltaActorComponent,
    ListadoActorComponent,
    TablaPeliculaComponent,
    TablaPaisesComponent,
    AbmActorComponent,
    MenuActorComponent,
    MenuPeliculaComponent,
    PeliculaActorComponent,
    AbmPeliculaComponent,
    TablaActorComponent,
    PaisCardComponent,
    ModificarPeliculaComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatDialogModule,
    MatGridListModule,
    MatCardModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
  providers: [ToastMsgService, PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
