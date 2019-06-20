import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotacaoListarComponent } from './votacao-listar.component';

describe('VotacaoListarComponent', () => {
  let component: VotacaoListarComponent;
  let fixture: ComponentFixture<VotacaoListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotacaoListarComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotacaoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
