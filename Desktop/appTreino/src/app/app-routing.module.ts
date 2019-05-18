import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { QuadradoComponent } from './componentes/quadrado/quadrado.component';
import { TrianguloComponent } from './componentes/triangulo/triangulo.component';
import { CirculoComponent } from './componentes/circulo/circulo.component';
import { CalcularAreaComponent } from './componentes/calculararea/calculararea.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path : 'quadrado', component: QuadradoComponent },
  { path : 'triangulo', component : TrianguloComponent },
  { path : 'circulo' , component : CirculoComponent },
  { path : 'area' , component : CalcularAreaComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
