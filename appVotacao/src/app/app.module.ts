import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { TeladoVotoComponent } from './componentes/teladovoto/teladovoto.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { VotacaoSalvarComponent } from './votacao/votacao-salvar/votacao-salvar.component';
import {ResultadoComponent} from './componentes/resultado/resultado.component';
import { VotacaoComponent } from './componentes/votacao/votacao.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import {UsuarioSalvarComponent} from './usuario/usuario-salvar/usuario-salvar.component';
import {VotacaoListarComponent} from './votacao/votacao-listar/votacao-listar.component';
import {UsuarioListarComponent} from './usuario/usuario-listar/usuario-listar.component';
import { CidadeSalvarComponent } from './cidade/cidade-salvar/cidade-salvar.component';
import { UsuarioRedefinirComponent } from './usuario/usuario-redefinir/usuario-redefinir.component';
import {AngularFireAuth} from 'angularfire2/auth';
import {ResultadoVotacaoComponent} from './votacao/resultado-votacao/resultado-votacao.component';
@NgModule({
  declarations: [AppComponent, TeladoVotoComponent, ResultadoComponent, VotacaoComponent, UsuarioSalvarComponent, VotacaoListarComponent, UsuarioListarComponent, CidadeSalvarComponent, UsuarioRedefinirComponent, VotacaoSalvarComponent, ResultadoVotacaoComponent],
  entryComponents: [ResultadoVotacaoComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDQIDtmoWtVdIN5dcG5DvXpP01g8s7vSis",
       authDomain: "aulapoo-76079.firebaseapp.com",
       databaseURL: "https://aulapoo-76079.firebaseio.com",
       projectId: "aulapoo-76079",
       storageBucket: "aulapoo-76079.appspot.com",
       messagingSenderId: "149403780261",
       appId: "1:149403780261:web:157381ef16f2738e"
    }),
    AngularFireDatabaseModule
  ],
  providers: [
    StatusBar,
    AngularFireAuth,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
