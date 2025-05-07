import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditandoActividadPage } from './editando-actividad.page';

describe('EditandoActividadPage', () => {
  let component: EditandoActividadPage;
  let fixture: ComponentFixture<EditandoActividadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditandoActividadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
