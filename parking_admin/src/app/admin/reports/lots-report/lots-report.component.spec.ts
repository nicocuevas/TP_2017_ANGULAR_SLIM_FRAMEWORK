import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotsReportComponent } from './lots-report.component';

describe('LotsReportComponent', () => {
  let component: LotsReportComponent;
  let fixture: ComponentFixture<LotsReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotsReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
