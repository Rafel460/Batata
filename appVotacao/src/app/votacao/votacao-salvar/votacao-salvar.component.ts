import { Component, OnInit } from '@angular/core';
import { Votacao } from '../entidade/votacao';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-votacao-salvar',
  templateUrl: './votacao-salvar.component.html',
  styleUrls: ['./votacao-salvar.component.scss'],
})
export class VotacaoSalvarComponent  {
  votacao : Votacao = new Votacao();

  constructor(private banco : AngularFireDatabase, private router : Router, private mensagem : ToastController) { }

  ngOnInit() {}
  async mostrarMensagem(){
    const mensagem = await this.mensagem.create({
      message : 'Votação criada com sucesso!',
      duration : 2500
    });
  }
  salvar(){
    this.banco.list('votacao').push(this.votacao);
    this.votacao = new Votacao();
    mostrarMensagem();
  }
  votacaoListar(){
    this.router.navigate(['votacoes']);
  }

}
