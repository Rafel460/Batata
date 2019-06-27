import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Usuario} from '../entidade/usuario';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrls: ['./usuario-listar.component.scss'],
})
export class UsuarioListarComponent implements OnInit {
  listadeUsuarios : Observable<Usuario[]>;

  constructor(private banco : AngularFireDatabase) {
  this.listadeUsuarios = this.banco.list<Usuario>('usuario').snapshotChanges().pipe(
    map(lista => lista.map( linha => ({
      key : linha.payload.key, ... linha.payload.val()
    })))
  );


  }

  ngOnInit() {}

}
