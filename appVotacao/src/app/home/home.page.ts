import { Component } from '@angular/core';
import { Usuario } from '../usuario/entidade/usuario';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import {ModalController} from '@ionic/angular';
import{NavController} from '@ionic/angular';
import { VotacaoListarComponent } from '../votacao/votacao-listar/votacao-listar.component';
import { ResultadoVotacaoComponent } from '../votacao/resultado-votacao/resultado-votacao.component';
import { Votacao } from '../votacao/entidade/votacao';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  usuario: Usuario = new Usuario();
  constructor(private router: Router, private autenticacao: AngularFireAuth, private navCtrol : NavController) {

  }



  fazerLogin(email) {
    this.autenticacao.auth.signInWithEmailAndPassword(this.usuario.nome, this.usuario.senha).then(
      () => { this.router.navigate(['votacoes'])}).catch((erro) => alert('Ocorreu um erro de autenticação'));

  }
  
}
