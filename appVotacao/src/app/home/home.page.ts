import { Component } from '@angular/core';
import { Usuario } from '../usuario/entidade/usuario';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import {ModalController} from '@ionic/angular';
import{NavController} from '@ionic/angular';
import { VotacaoListarComponent } from '../votacao/votacao-listar/votacao-listar.component';
import { ResultadoVotacaoComponent } from '../votacao/resultado-votacao/resultado-votacao.component';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  usuario: Usuario = new Usuario();
  constructor(private router: Router, private autenticacao: AngularFireAuth, private verLista : ModalController) {

  }

  async mostrarLista(valor){
   
    const tela = await this.verLista.create({
      component : VotacaoListarComponent, componentProps : {
        'email' : this.usuario.nome
      }
    });
    await tela.present()
  }

  fazerLogin(email) {
  
    this.autenticacao.auth.signInWithEmailAndPassword(this.usuario.nome, this.usuario.senha).then(
      () => { this.mostrarLista(email) }).catch((erro) => alert('Ocorreu um erro de autenticação'));

  }
  
}
