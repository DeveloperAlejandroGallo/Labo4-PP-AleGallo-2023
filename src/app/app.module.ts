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

import { HighligthDirective } from './directivas/highligth.directive';
import { ToastMsgService } from './services/toast-msg.service';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';
import { PaisCardComponent } from './components/pais-card/pais-card.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuRepartidorComponent } from './pages/repartidor/menu-repartidor/menu-repartidor.component';
import { AltaRepartidorComponent } from './pages/repartidor/alta-repartidor/alta-repartidor.component';
import { CargaRepartidorComponent } from './pages/repartidor/carga-repartidor/carga-repartidor.component';
import { RepartidorCardComponent } from './components/repartidor-card/repartidor-card.component';
import { ListadoRepartidorComponent } from './pages/repartidor/listado-repartidor/listado-repartidor.component';
import { TablaRepartidorComponent } from './pages/repartidor/tabla-repartidor/tabla-repartidor.component';






@NgModule({
  declarations: [
    AppComponent,
    NavVarComponent,
    BienvenidoComponent,
    ErrorComponent,
    HighligthDirective,
    TablaPaisesComponent,
    PaisCardComponent,
    LoginComponent,
    MenuRepartidorComponent,
    AltaRepartidorComponent,
    CargaRepartidorComponent,
    RepartidorCardComponent,
    ListadoRepartidorComponent,
    TablaRepartidorComponent
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
  providers: [ToastMsgService],
  bootstrap: [AppComponent]
})
export class AppModule { }
