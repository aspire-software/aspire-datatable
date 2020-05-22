import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AspirePaginationComponent } from './aspire-pagination.component';

describe('AspirePaginationComponent', () => {
  let component: AspirePaginationComponent;
  let fixture: ComponentFixture<AspirePaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AspirePaginationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AspirePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
