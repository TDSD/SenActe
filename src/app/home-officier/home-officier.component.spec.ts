import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOfficierComponent } from './home-officier.component';

describe('HomeOfficierComponent', () => {
  let component: HomeOfficierComponent;
  let fixture: ComponentFixture<HomeOfficierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeOfficierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeOfficierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
