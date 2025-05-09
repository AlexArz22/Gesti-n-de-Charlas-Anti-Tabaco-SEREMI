import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarCharlaNuevaPage } from './registrar-charla-nueva.page';

describe('RegistrarCharlaNuevaPage', () => {
  let component: RegistrarCharlaNuevaPage;
  let fixture: ComponentFixture<RegistrarCharlaNuevaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarCharlaNuevaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
