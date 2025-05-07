import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActividadIniciadaPage } from './actividad-iniciada.page';

describe('ActividadIniciadaPage', () => {
  let component: ActividadIniciadaPage;
  let fixture: ComponentFixture<ActividadIniciadaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadIniciadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
