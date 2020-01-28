import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPartialComponent } from './product-partial.component';

describe('ProductPartialComponent', () => {
  let component: ProductPartialComponent;
  let fixture: ComponentFixture<ProductPartialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPartialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPartialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
