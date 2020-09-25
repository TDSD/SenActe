import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryRvComponent } from './history-rv.component';

describe('HistoryRvComponent', () => {
  let component: HistoryRvComponent;
  let fixture: ComponentFixture<HistoryRvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryRvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryRvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
