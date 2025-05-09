import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnadirArchivoACharlaPage } from './anadir-archivo-a-charla.page';

describe('AnadirArchivoACharlaPage', () => {
  let component: AnadirArchivoACharlaPage;
  let fixture: ComponentFixture<AnadirArchivoACharlaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirArchivoACharlaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
