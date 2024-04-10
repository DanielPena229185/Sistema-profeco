import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoresPage } from './stores.page';

describe('StoresPage', () => {
  let component: StoresPage;
  let fixture: ComponentFixture<StoresPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
