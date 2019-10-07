import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoVotacaoComponent } from './resultado-votacao.component';

describe('ResultadoVotacaoComponent', () => {
  let component: ResultadoVotacaoComponent;
  let fixture: ComponentFixture<ResultadoVotacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadoVotacaoComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoVotacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
