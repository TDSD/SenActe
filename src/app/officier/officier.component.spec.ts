import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficierComponent } from './officier.component';

describe('OfficierComponent', () => {
  let component: OfficierComponent;
  let fixture: ComponentFixture<OfficierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
