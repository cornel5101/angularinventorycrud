import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandproductComponent } from './brandproduct.component';

describe('BrandproductComponent', () => {
  let component: BrandproductComponent;
  let fixture: ComponentFixture<BrandproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
