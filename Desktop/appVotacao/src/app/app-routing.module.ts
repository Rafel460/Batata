import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TelaVotacaoComponent } from './componentes/teladavotacao/telavotacao.component';
import { TeladoVotoComponent } from './componentes/teladovoto/teladovoto.component';
import { CriacaodoVotoComponent } from './componentes/criacaodovoto/criacaodovoto.component';
import { ResultadoComponent } from './componentes/resultado/resultado.component';
import { VotacaoComponent } from './componentes/votacao/votacao.component';
import { UsuarioSalvarComponent } from './usuario/usuario-salvar/usuario-salvar.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path : 'votacoes' , component : TelaVotacaoComponent },
  { path : 'voto' , component : TeladoVotoComponent },
  { path : 'criacao_voto' , component : CriacaodoVotoComponent },
  { path : 'resultado' , component : ResultadoComponent },
  { path : 'votar' , component : VotacaoComponent},
  { path: 'salvar_usuario' , component : UsuarioSalvarComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
