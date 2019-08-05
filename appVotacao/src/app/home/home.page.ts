import { Component } from '@angular/core';
import { Usuario } from '../usuario/entidade/usuario';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  usuario: Usuario = new Usuario();
  constructor(private router: Router, private autenticacao: AngularFireAuth) {

  }


  fazerLogin() {
    this.autenticacao.auth.signInWithEmailAndPassword(this.usuario.nome, this.usuario.senha).then(
      () => { this.router.navigate(['votacoes']); }).catch((erro) => alert('Ocorreu um erro de autenticação'));
  }

}
