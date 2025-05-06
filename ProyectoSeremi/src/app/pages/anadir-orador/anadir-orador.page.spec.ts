import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnadirOradorPage } from './anadir-orador.page';

describe('AnadirOradorPage', () => {
  let component: AnadirOradorPage;
  let fixture: ComponentFixture<AnadirOradorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirOradorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
