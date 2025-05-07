import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarCharlaEspecificaPage } from './editar-charla-especifica.page';

describe('EditarCharlaEspecificaPage', () => {
  let component: EditarCharlaEspecificaPage;
  let fixture: ComponentFixture<EditarCharlaEspecificaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCharlaEspecificaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
