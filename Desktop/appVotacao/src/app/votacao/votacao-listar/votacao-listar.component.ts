import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Votacao} from '../entidade/votacao';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-votacao-listar',
  templateUrl: './votacao-listar.component.html',
  styleUrls: ['./votacao-listar.component.scss'],
})
export class VotacaoListarComponent implements OnInit {
  listadevotacoes : Observable<Votacao[]>;
  constructor(private banco : AngularFireDatabase) {
    this.listadevotacoes = this.banco.list<Votacao>('votacao').snapshotChanges().pipe(
      map( lista => lista.map( linha => ({
        key : linha.payload.key, ... linha.payload.val()
      })))
    );
   }

  ngOnInit() {}

}
