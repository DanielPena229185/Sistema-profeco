import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteStoresListComponent } from './favorite-stores-list.component';

describe('FavoriteStoresListComponent', () => {
  let component: FavoriteStoresListComponent;
  let fixture: ComponentFixture<FavoriteStoresListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteStoresListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavoriteStoresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
