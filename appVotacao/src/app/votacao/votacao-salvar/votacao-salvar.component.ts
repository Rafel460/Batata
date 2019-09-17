import { Component, OnInit } from '@angular/core';
import { Votacao } from '../entidade/votacao';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import {AlertController} from '@ionic/angular';
@Component({
  selector: 'app-votacao-salvar',
  templateUrl: './votacao-salvar.component.html',
  styleUrls: ['./votacao-salvar.component.scss'],
})
export class VotacaoSalvarComponent  {
  votacao : Votacao = new Votacao();

  constructor(private banco : AngularFireDatabase, private router : Router, private alerta : AlertController) { }

  ngOnInit() {}
  async mostrarAlerta(){
    const alertar = await this.alerta.create({
      header : 'Alerta',
      message : 'Votação criada com sucesso!',
      buttons : ['Ok']
    });
    await alertar.present();
  }
  salvar(){
    this.banco.list('votacao').push(this.votacao);
    this.votacao = new Votacao();
    this.mostrarAlerta();
    this.router.navigate(['votacoes']);
  }
  votacaoListar(){
    this.router.navigate(['votacoes']);
  }

}
