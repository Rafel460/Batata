import { Component, OnInit } from '@angular/core';
import { Usuario } from '../entidade/usuario';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router'
@Component({
  selector: 'app-usuario-redefinir',
  templateUrl: './usuario-redefinir.component.html',
  styleUrls: ['./usuario-redefinir.component.scss'],
  providers : [AngularFireAuth],
})
export class UsuarioRedefinirComponent implements OnInit {
usuario : Usuario = new Usuario();
  constructor(private autenticacao : AngularFireAuth, private router : Router) { }

  ngOnInit() {}

  redefinirSenha(){
    this.autenticacao.auth.sendPasswordResetEmail(this.usuario.nome).then(
        () => { this.router.navigate(['home']); }).catch((erro) => alert('Ocorreu um erro'));

  }
}
