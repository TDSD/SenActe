import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryDemandeComponent } from './history-demande.component';

describe('HistoryDemandeComponent', () => {
  let component: HistoryDemandeComponent;
  let fixture: ComponentFixture<HistoryDemandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryDemandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
