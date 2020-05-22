import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AspireRecordsCountComponent } from './aspire-records-count.component';

describe('AspirePaginationComponent', () => {
  let component: AspireRecordsCountComponent;
  let fixture: ComponentFixture<AspireRecordsCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AspireRecordsCountComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AspireRecordsCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
