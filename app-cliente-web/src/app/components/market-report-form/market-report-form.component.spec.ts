import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketReportFormComponent } from './market-report-form.component';

describe('MarketReportFormComponent', () => {
  let component: MarketReportFormComponent;
  let fixture: ComponentFixture<MarketReportFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketReportFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarketReportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
