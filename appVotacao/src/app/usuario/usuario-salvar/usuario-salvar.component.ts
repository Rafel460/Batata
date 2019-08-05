import { Component, OnInit } from '@angular/core';
import {Usuario} from '../entidade/usuario';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';
@Component({
  selector: 'app-usuario-salvar',
  templateUrl: './usuario-salvar.component.html',
  styleUrls: ['./usuario-salvar.component.scss'],
  providers : [AngularFireAuth],
})
export class UsuarioSalvarComponent implements OnInit {

  usuario : Usuario = new Usuario();
confirmar_senha : string;
  constructor(private autenticacao : AngularFireAuth, private router : Router) { }

  ngOnInit() {}

  salvar(){

  this.autenticacao.auth.createUserWithEmailAndPassword(this.usuario.nome, this.usuario.senha).then(
    () => {this.router.navigate(['home']);}).catch((erro) => alert('erro'))
  }

}
