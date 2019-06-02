import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { TeladoVotoComponent } from './componentes/teladovoto/teladovoto.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CadastroComponent } from './componentes/cadastro/cadastro.component'
import { TelaVotacaoComponent } from './componentes/teladavotacao/telavotacao.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CriacaodoVotoComponent } from './componentes/criacaodovoto/criacaodovoto.component';
import {ResultadoComponent} from './componentes/resultado/resultado.component';
import { VotacaoComponent } from './componentes/votacao/votacao.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, CadastroComponent, TelaVotacaoComponent, TeladoVotoComponent, CriacaodoVotoComponent, ResultadoComponent, VotacaoComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
