import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import  { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { TelaVotacaoComponent } from './componentes/teladavotacao/telavotacao.component';
import { TeladoVotoComponent } from './componentes/teladovoto/teladovoto.component';
import { CriacaodoVotoComponent } from './componentes/criacaodovoto/criacaodovoto.component';
import { ResultadoComponent } from './componentes/resultado/resultado.component';
import { VotacaoComponent } from './componentes/votacao/votacao.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path : 'cadastro' , component : CadastroComponent },
  { path : 'votacoes' , component : TelaVotacaoComponent },
  { path : 'voto' , component : TeladoVotoComponent },
  { path : 'criacao_voto' , component : CriacaodoVotoComponent },
  { path : 'resultado' , component : ResultadoComponent },
  { path : 'votar' , component : VotacaoComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
