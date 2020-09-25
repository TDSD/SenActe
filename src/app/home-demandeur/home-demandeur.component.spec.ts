import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDemandeurComponent } from './home-demandeur.component';

describe('HomeDemandeurComponent', () => {
  let component: HomeDemandeurComponent;
  let fixture: ComponentFixture<HomeDemandeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDemandeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDemandeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
