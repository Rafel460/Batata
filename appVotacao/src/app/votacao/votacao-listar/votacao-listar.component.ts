import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Votacao} from '../entidade/votacao';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-votacao-listar',
  templateUrl: './votacao-listar.component.html',
  styleUrls: ['./votacao-listar.component.scss'],
})
export class VotacaoListarComponent implements OnInit {
  listadevotacoes : Observable<Votacao[]>;
  constructor(private banco : AngularFireDatabase, private router : Router) {
    this.listadevotacoes = this.banco.list<Votacao>('votacao').snapshotChanges().pipe(
      map( lista => lista.map( linha => ({
        key : linha.payload.key, ... linha.payload.val()
      })))
    );
   }

  ngOnInit() {}
  criarVotacao(){
    this.router.navigate(['criar_votacao']);
  }
  listarUsuarios(){
    this.router.navigate(['mostrar_usuarios']);
  }

}
