import { Component, OnInit } from '@angular/core';
import { Votacao } from '../entidade/votacao';
import {Opcao} from '../entidade/opcao';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import {AlertController} from '@ionic/angular';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-votacao-salvar',
  templateUrl: './votacao-salvar.component.html',
  styleUrls: ['./votacao-salvar.component.scss'],
})
export class VotacaoSalvarComponent  {
  votacao : Votacao = new Votacao();
 
  constructor(private banco : AngularFireDatabase, private router : Router, private alerta : AlertController, private modal : ModalController) {}

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
    if(this.votacao.key == null){
 
    this.banco.list('votacao').push(this.votacao);
    this.votacao = new Votacao();
    this.mostrarAlerta();
    this.router.navigate(['votacoes']);
  }else{
    this.banco.object('votacao'+this.votacao.key).update(this.votacao);
    this.modal.dismiss()
  }
}
  votacaoListar(){
    this.router.navigate(['votacoes']);
  }

}
