import { Component, OnInit } from '@angular/core';
import { Estado } from '../entidade/estado';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {AngularFireDatabase} from '@angular/fire/database';
import { Cidade } from '../../cidade/entidade/cidade';
@Component({
  selector: 'app-listar-estado',
  templateUrl: './listar-estado.component.html',
  styleUrls: ['./listar-estado.component.scss'],
})
export class ListarEstadoComponent implements OnInit {
  listaEstado: Observable<Estado[]>;
  cidade: Cidade = new Cidade();
  constructor(private banco : AngularFireDatabase) {
    this.listaEstado = this.banco.list<Estado>('estado').snapshotChanges().pipe(
      map(
        lista => lista.map( linha => ({key : linha.payload.key, ... linha.payload.val()})))
      );}

  ngOnInit() {}

}
