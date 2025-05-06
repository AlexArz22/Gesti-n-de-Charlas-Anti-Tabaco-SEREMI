import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearActividadPage } from './crear-actividad.page';

describe('CrearActividadPage', () => {
  let component: CrearActividadPage;
  let fixture: ComponentFixture<CrearActividadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearActividadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
