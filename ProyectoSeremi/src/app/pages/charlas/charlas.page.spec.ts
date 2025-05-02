import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharlasPage } from './charlas.page';

describe('CharlasPage', () => {
  let component: CharlasPage;
  let fixture: ComponentFixture<CharlasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CharlasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
