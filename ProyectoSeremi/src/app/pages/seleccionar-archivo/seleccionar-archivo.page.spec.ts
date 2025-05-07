import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeleccionarArchivoPage } from './seleccionar-archivo.page';

describe('SeleccionarArchivoPage', () => {
  let component: SeleccionarArchivoPage;
  let fixture: ComponentFixture<SeleccionarArchivoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionarArchivoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
