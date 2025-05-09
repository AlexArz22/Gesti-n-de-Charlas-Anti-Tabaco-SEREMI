import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnadirActividadACharlaPage } from './anadir-actividad-a-charla.page';

describe('AnadirActividadACharlaPage', () => {
  let component: AnadirActividadACharlaPage;
  let fixture: ComponentFixture<AnadirActividadACharlaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirActividadACharlaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
