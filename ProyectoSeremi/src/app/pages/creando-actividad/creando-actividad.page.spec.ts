import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreandoActividadPage } from './creando-actividad.page';

describe('CreandoActividadPage', () => {
  let component: CreandoActividadPage;
  let fixture: ComponentFixture<CreandoActividadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreandoActividadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
