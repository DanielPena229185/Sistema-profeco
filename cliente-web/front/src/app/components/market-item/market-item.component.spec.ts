import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketItemComponent } from './market-item.component';

describe('MarketItemComponent', () => {
  let component: MarketItemComponent;
  let fixture: ComponentFixture<MarketItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarketItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
