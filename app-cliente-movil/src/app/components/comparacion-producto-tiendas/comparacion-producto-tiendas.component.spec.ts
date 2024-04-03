import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComparacionProductoTiendasComponent } from './comparacion-producto-tiendas.component';

describe('ComparacionProductoTiendasComponent', () => {
  let component: ComparacionProductoTiendasComponent;
  let fixture: ComponentFixture<ComparacionProductoTiendasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparacionProductoTiendasComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComparacionProductoTiendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
