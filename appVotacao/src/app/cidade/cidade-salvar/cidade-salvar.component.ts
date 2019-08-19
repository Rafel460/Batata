import { Component, OnInit } from '@angular/core';
import { Cidade } from '../entidade/cidade';
import { Estado } from '../../estado/entidade/estado';
import { Usuario } from '../../usuario/entidade/usuario';
import{ AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cidade-salvar',
  templateUrl: './cidade-salvar.component.html',
  styleUrls: ['./cidade-salvar.component.scss'],
})
export class CidadeSalvarComponent implements OnInit {
  cidade:Cidade = new Cidade();
  listadeEstados: Observable<Estado[]>;
  constructor(private banco : AngularFireDatabase, private router : Router) {
    this.listadeEstados = this.banco.list<Estado>("estado").snapshotChanges().pipe(
      map(lista => lista.map(linha =>({key: linha.payload.key, ... linha.payload.val()})))

    );
  }

  ngOnInit() {}
  salvar(){
    this.banco.list("cidade").push(this.cidade);
    this.cidade = new Cidade();
    this.router.navigate(['cadastrar'])

}
}
