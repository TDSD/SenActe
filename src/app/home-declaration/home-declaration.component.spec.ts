import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDeclarationComponent } from './home-declaration.component';

describe('HomeDeclarationComponent', () => {
  let component: HomeDeclarationComponent;
  let fixture: ComponentFixture<HomeDeclarationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDeclarationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
