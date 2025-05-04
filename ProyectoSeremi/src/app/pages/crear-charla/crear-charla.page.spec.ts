import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearCharlaPage } from './crear-charla.page';

describe('CrearCharlaPage', () => {
  let component: CrearCharlaPage;
  let fixture: ComponentFixture<CrearCharlaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCharlaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
