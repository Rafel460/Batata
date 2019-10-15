import { Component, OnInit, Input } from '@angular/core';
import {Votacao} from '../entidade/votacao';
import {AngularFireDatabase} from '@angular/fire/database';
import {ModalController} from '@ionic/angular';
import {NavController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-resultado-votacao',
  templateUrl: './resultado-votacao.component.html',
  styleUrls: ['./resultado-votacao.component.scss'],
})
export class ResultadoVotacaoComponent implements OnInit {
votacao : Votacao = new Votacao();
@Input() valor_1 : string;
@Input() valor_2 : string;
@Input() valor_3 : string;
  constructor(private banco : AngularFireDatabase, private modal : ModalController, private navParams : NavParams) {
    console.log(navParams.get(this.valor_1));
  }

  ngOnInit() {}
  sair(){
    this.modal.dismiss();
  }
}
