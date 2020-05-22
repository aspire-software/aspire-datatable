import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AspireRecordsPerpageComponent } from './aspire-records-perpage.component';

describe('AspireRecordsPerpageComponent', () => {
  let component: AspireRecordsPerpageComponent;
  let fixture: ComponentFixture<AspireRecordsPerpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AspireRecordsPerpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AspireRecordsPerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
