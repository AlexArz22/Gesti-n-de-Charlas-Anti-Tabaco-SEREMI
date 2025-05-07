import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarAsistentesPage } from './registrar-asistentes.page';

describe('RegistrarAsistentesPage', () => {
  let component: RegistrarAsistentesPage;
  let fixture: ComponentFixture<RegistrarAsistentesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarAsistentesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
