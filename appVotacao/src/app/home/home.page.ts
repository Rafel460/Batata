import { Component } from '@angular/core';
import { Usuario } from '../usuario/entidade/usuario';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import {ModalController} from '@ionic/angular';
import{NavController} from '@ionic/angular';
import { VotacaoListarComponent } from '../votacao/votacao-listar/votacao-listar.component';
import { ResultadoVotacaoComponent } from '../votacao/resultado-votacao/resultado-votacao.component';
import { Votacao } from '../votacao/entidade/votacao';
import {AlertController} from '@ionic/angular';
import {ToastController} from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  usuario: Usuario = new Usuario();
  constructor(private router: Router, private autenticacao: AngularFireAuth, private navCtrol : NavController, private alerta : AlertController, private toast : ToastController) {

  }
cont = 0;


async senhaIncorreta(){
  this.cont = this.cont + 1;
  console.log(this.cont);
  if(this.cont == 5){
    this.mostrarAlerta()
  }
  const puts = await this.toast.create({
    header : 'Nome de usuario ou senha incorretos... Tente novamente',
    duration : 2000,
    buttons : ['Ok']
  })
  await puts.present()
}
  async mostrarAlerta(){
    const alert = await this.alerta.create({
      header : 'Está tudo bem?',
      subHeader : 'Parece que você digitou a senha incorreta muitas vezes, deseja trocar a senha?',
      buttons : [{
        text : 'Sim',
        handler : () => {
          this.router.navigate(['redefinir_senha']);
        }
      },{
        text : 'Não, obrigado'
      }]
    });
    await alert.present()
  }
  

  fazerLogin(email) {
    this.autenticacao.auth.signInWithEmailAndPassword(this.usuario.nome, this.usuario.senha).then(
      () => { this.router.navigate(['votacoes'])}).catch((erro) => this.senhaIncorreta());


  }
  
}
