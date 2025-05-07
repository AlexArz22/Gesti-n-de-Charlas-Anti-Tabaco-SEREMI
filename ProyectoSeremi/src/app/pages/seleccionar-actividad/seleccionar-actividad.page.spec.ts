import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeleccionarActividadPage } from './seleccionar-actividad.page';

describe('SeleccionarActividadPage', () => {
  let component: SeleccionarActividadPage;
  let fixture: ComponentFixture<SeleccionarActividadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionarActividadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
