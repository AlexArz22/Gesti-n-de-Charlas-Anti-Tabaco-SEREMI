import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActividadEspecificaPage } from './actividad-especifica.page';

describe('ActividadEspecificaPage', () => {
  let component: ActividadEspecificaPage;
  let fixture: ComponentFixture<ActividadEspecificaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadEspecificaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
