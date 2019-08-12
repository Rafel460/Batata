import { Component, OnInit } from '@angular/core';
import {Usuario} from '../entidade/usuario';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';
import {AngularFireDatabase} from '@angular/fire/database';
import { Cidade } from '../../cidade/entidade/cidade';
import { Estado } from '../../estado/entidade/estado';
@Component({
  selector: 'app-usuario-salvar',
  templateUrl: './usuario-salvar.component.html',
  styleUrls: ['./usuario-salvar.component.scss'],
  providers : [AngularFireAuth],
})
export class UsuarioSalvarComponent implements OnInit {

  usuario : Usuario = new Usuario();
  cidade : Cidade = new Cidade();
  confirmar_senha : string;

  constructor(private autenticacao : AngularFireAuth, private router : Router, private banco : AngularFireDatabase) { }

  ngOnInit() {}

  salvar(){

  
    this.banco.list('cidade').push(this.cidade);
    this.banco.list('usuario').push(this.usuario);
    this.autenticacao.auth.createUserWithEmailAndPassword(this.usuario.nome, this.usuario.senha).then(
    () => {this.router.navigate(['home']);}).catch((erro) => alert('erro'))
  }

}
