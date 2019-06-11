import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { TeladoVotoComponent } from './componentes/teladovoto/teladovoto.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TelaVotacaoComponent } from './componentes/teladavotacao/telavotacao.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CriacaodoVotoComponent } from './componentes/criacaodovoto/criacaodovoto.component';
import {ResultadoComponent} from './componentes/resultado/resultado.component';
import { VotacaoComponent } from './componentes/votacao/votacao.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import {UsuarioSalvarComponent} from './usuario/usuario-salvar/usuario-salvar.component';

@NgModule({
  declarations: [AppComponent, TelaVotacaoComponent, TeladoVotoComponent, CriacaodoVotoComponent, ResultadoComponent, VotacaoComponent, UsuarioSalvarComponent ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule,
    AngularFireModule.initializeApp({
    apiKey: "AIzaSyAj-jfTPeg0RaTYtdYZ79uT3vZcvOxovEc",
   authDomain: "teste-261a4.firebaseapp.com",
   databaseURL: "https://teste-261a4.firebaseio.com",
   projectId: "teste-261a4",
   storageBucket: "teste-261a4.appspot.com",
   messagingSenderId: "1043065401237",
   appId: "1:1043065401237:web:a0fca40338d7296d"
    }),
    AngularFireDatabaseModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
