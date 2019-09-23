import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Votacao} from '../entidade/votacao';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import {AlertController} from '@ionic/angular';
import { MenuController} from '@ionic/angular';
@Component({
  selector: 'app-votacao-listar',
  templateUrl: './votacao-listar.component.html',
  styleUrls: ['./votacao-listar.component.scss'],
})
export class VotacaoListarComponent implements OnInit {
  valor : string;
  listarFiltro : Votacao[];
  filtro  = {};
  votacoes : any;
  listadevotacoes : Observable<Votacao[]>;
  votacao : Votacao = new Votacao();

  constructor(private banco : AngularFireDatabase, private router : Router, private menu : MenuController, private alerta : AlertController) {
    this.listadevotacoes = this.banco.list<Votacao>('votacao').snapshotChanges().pipe(
      map( lista => lista.map( linha => ({
        key : linha.payload.key, ... linha.payload.val()
      })))
    );
   }


   async mostrarAlerta(votacao){
     const alert = await this.alerta.create({
       header : votacao.nome,
       subHeader : 'selecione uma das opções',
      buttons : [votacao.opcao_1, votacao.opcao_2, votacao.opcao_3],
     });
     await alert.present();
   }

   abrirMenu(){
     this.menu.open('start');
   }
  ngOnInit() {
    this.listadevotacoes.subscribe(
      votacao => {
        this.votacoes = votacao;
        this.listarFiltro = _.filter(this.votacoes, _.conforms(this.filtro));
      }
    )
  }
  filtrar(){
    this.filtro['nome'] = val => val.includes(this.valor);
    this.listarFiltro = _.filter(this.votacoes, _.conforms(this.filtro));
  }
  criarVotacao(){
    this.router.navigate(['criar_votacao']);
  }
  listarUsuarios(){
    this.router.navigate(['mostrar_usuarios']);
  }
  excluir(key : string){
    this.banco.list('votacao').remove(key);
  }

  }
