import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleProductComponent } from './dele-product.component';

describe('DeleProductComponent', () => {
  let component: DeleProductComponent;
  let fixture: ComponentFixture<DeleProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
