import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Votacao } from '../entidade/votacao';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { Usuario } from 'src/app/usuario/entidade/usuario';
import {AngularFireAuth} from 'angularfire2/auth';
import {ModalController} from '@ionic/angular';
import {VotacaoSalvarComponent} from '../votacao-salvar/votacao-salvar.component';
import { ResultadoVotacaoComponent } from '../resultado-votacao/resultado-votacao.component';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-votacao-listar',
  templateUrl: './votacao-listar.component.html',
  styleUrls: ['./votacao-listar.component.scss'],
})
export class VotacaoListarComponent implements OnInit {
  valor: string;
  listarFiltro: Votacao[];
  filtro = {};
  votacoes: any;
  listadevotacoes: Observable<Votacao[]>;
  votacao: Votacao = new Votacao();
  usuario : Usuario = new Usuario();
  user: any;
  botoes = [];
  @Input() email : string;
  constructor(private banco: AngularFireDatabase, private router: Router, private menu: MenuController, private alerta: AlertController, private autenticacao : AngularFireAuth, private modal : ModalController) {
    this.listadevotacoes = this.banco.list<Votacao>('votacao').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({
        key: linha.payload.key, ...linha.payload.val()
      })))
    );
  this.user =  this.autenticacao.auth.currentUser.displayName
  }

  async mostrarAlerta(votacao) {
    this.botoes[0] = votacao.opcao_1;
    this.botoes[1] = votacao.opcao_2;
    this.botoes[2] = votacao.opcao_3; 
    const alert = await this.alerta.create({
      header: votacao.nome,
      subHeader: 'selecione uma das opções',
      buttons: [this.botoes[0], this.botoes[1], this.botoes[2], 'Fechar'/*, {
        handler : data => {
          if(this.botoes[0]){ // se desse pra usar um switch seria melhor
            //tem que achar um método que verifique que o botão foi clicado
          }
        }
      }*/
    ],
    });
    await alert.present();
  }

async alterarVotacao(votacao){
  const tela = await this.modal.create({
    component : VotacaoSalvarComponent, componentProps : {votacao : votacao}
  });
  tela.present();
}

async verResultado(votacao){
  const resultado = await this.modal.create({
    component : ResultadoVotacaoComponent, componentProps : {
      'valor_1' : votacao.opcao_1,
      'valor_2' : votacao.opcao_2,
      'valor_3' : votacao.opcao_3
    }
  });
 resultado.present();
}
  abrirMenu() {
    this.menu.open();
  }
  ngOnInit() {
    this.listadevotacoes.subscribe(
      votacao => {
        this.votacoes = votacao;
        this.listarFiltro = _.filter(this.votacoes, _.conforms(this.filtro));
      }
    )
  }
  filtrar() {
    this.filtro['nome'] = val => val.includes(this.valor);
    this.listarFiltro = _.filter(this.votacoes, _.conforms(this.filtro));
  }
  logout(){
    this.autenticacao.auth.signOut();
    this.router.navigate(['home']);
  }

  criarVotacao() {
    this.router.navigate(['criar_votacao']);
  }

  listarUsuarios() {
    this.router.navigate(['mostrar_usuarios']);
  }
  excluir(key: string) {
    this.banco.list('votacao').remove(key);
  }

}
