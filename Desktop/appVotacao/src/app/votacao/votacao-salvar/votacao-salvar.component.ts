import { Component, OnInit } from '@angular/core';
import { Votacao } from '../entidade/votacao';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-votacao-salvar',
  templateUrl: './votacao-salvar.component.html',
  styleUrls: ['./votacao-salvar.component.scss'],
})
export class VotacaoSalvarComponent  {
  votacao : Votacao = new Votacao();

  constructor(private banco : AngularFireDatabase) { }

  ngOnInit() {}

  salvar(){
    this.banco.list('votacao').push(this.votacao);
    this.votacao = new Votacao();
    alert("Pronto");
  }


}
