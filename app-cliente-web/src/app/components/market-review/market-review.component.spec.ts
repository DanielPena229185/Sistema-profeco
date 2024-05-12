import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketReviewComponent } from './market-review.component';

describe('MarketReviewComponent', () => {
  let component: MarketReviewComponent;
  let fixture: ComponentFixture<MarketReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketReviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarketReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
