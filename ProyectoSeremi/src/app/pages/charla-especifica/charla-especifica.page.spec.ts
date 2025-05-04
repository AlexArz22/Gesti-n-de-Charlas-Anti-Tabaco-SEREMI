import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharlaEspecificaPage } from './charla-especifica.page';

describe('CharlaEspecificaPage', () => {
  let component: CharlaEspecificaPage;
  let fixture: ComponentFixture<CharlaEspecificaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CharlaEspecificaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
