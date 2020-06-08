import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableDeleteComponent } from './datatable-delete.component';

describe('DatatableDeleteComponent', () => {
  let component: DatatableDeleteComponent;
  let fixture: ComponentFixture<DatatableDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatableDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatableDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
