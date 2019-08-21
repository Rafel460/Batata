import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TeladoVotoComponent } from './componentes/teladovoto/teladovoto.component';
import { ResultadoComponent } from './componentes/resultado/resultado.component';
import { VotacaoComponent } from './componentes/votacao/votacao.component';
import { UsuarioSalvarComponent } from './usuario/usuario-salvar/usuario-salvar.component';
import { VotacaoSalvarComponent } from './votacao/votacao-salvar/votacao-salvar.component';
import {VotacaoListarComponent} from './votacao/votacao-listar/votacao-listar.component';
import {UsuarioListarComponent} from './usuario/usuario-listar/usuario-listar.component';
import { CidadeSalvarComponent } from './cidade/cidade-salvar/cidade-salvar.component';
import { UsuarioRedefinirComponent } from './usuario/usuario-redefinir/usuario-redefinir.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path : 'votacoes' , component : VotacaoListarComponent },
  { path : 'voto' , component : TeladoVotoComponent },
  { path : 'resultado' , component : ResultadoComponent },
  { path : 'votar' , component : VotacaoComponent},
  { path: 'salvar_usuario' , component : UsuarioSalvarComponent },
  { path : 'criar_votacao' , component : VotacaoSalvarComponent },
  { path : 'mostrar_usuarios' , component : UsuarioListarComponent },
  { path : 'salvar_cidade' , component : CidadeSalvarComponent },
  { path : 'redefinir_senha', component : UsuarioRedefinirComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
