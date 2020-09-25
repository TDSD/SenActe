import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelivrerActeComponent } from './delivrer-acte.component';

describe('DelivrerActeComponent', () => {
  let component: DelivrerActeComponent;
  let fixture: ComponentFixture<DelivrerActeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelivrerActeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelivrerActeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
