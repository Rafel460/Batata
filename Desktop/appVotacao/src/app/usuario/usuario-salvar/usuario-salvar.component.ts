import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Usuario} from '../entidade/usuario';
@Component({
  selector: 'app-usuario-salvar',
  templateUrl: './usuario-salvar.component.html',
  styleUrls: ['./usuario-salvar.component.scss'],
})
export class UsuarioSalvarComponent implements OnInit {

  usuario : Usuario = new Usuario();
confirmar_senha : string;
  constructor(private banco: AngularFireDatabase) { }

  ngOnInit() {}

  salvar(){
    this.banco.list('usuario').push(this.usuario);
    this.usuario = new Usuario();
  }

}
