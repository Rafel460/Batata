import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
nome : String;
senha : String;

  fazerLogin():void{
      alert("Cadastro Efetuado com sucesso!");

  }

}
