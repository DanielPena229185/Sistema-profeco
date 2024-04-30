import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarketsPage } from './markets.page';

describe('MarketsPage', () => {
  let component: MarketsPage;
  let fixture: ComponentFixture<MarketsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
