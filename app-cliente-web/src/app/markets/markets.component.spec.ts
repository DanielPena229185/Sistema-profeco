import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketsComponent } from './markets.component';

describe('MarketsComponent', () => {
  let component: MarketsComponent;
  let fixture: ComponentFixture<MarketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
