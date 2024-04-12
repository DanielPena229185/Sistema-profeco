import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemProductComponent } from './item-product.component';

describe('ItemProductComponent', () => {
  let component: ItemProductComponent;
  let fixture: ComponentFixture<ItemProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
