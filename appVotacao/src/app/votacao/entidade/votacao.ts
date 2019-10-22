import{ Opcao } from './opcao';
export class Votacao {
  nome : string;
  id : number;
  opcao_1 : Opcao = new Opcao();
  opcao_2 : Opcao = new Opcao();
  opcao_3 : Opcao = new Opcao();
  senha : string;
  key : any;
}
