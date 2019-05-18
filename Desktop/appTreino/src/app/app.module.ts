import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { QuadradoComponent } from './componentes/quadrado/quadrado.component';
import { TrianguloComponent } from './componentes/triangulo/triangulo.component';
import { CirculoComponent } from './componentes/circulo/circulo.component';
import { CalcularAreaComponent } from './componentes/calculararea/calculararea.component';
@NgModule({
  declarations: [AppComponent, QuadradoComponent, TrianguloComponent, CirculoComponent, CalcularAreaComponent],
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
