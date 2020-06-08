import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaatatableEditComponent } from './daatatable-edit.component';

describe('DaatatableEditComponent', () => {
  let component: DaatatableEditComponent;
  let fixture: ComponentFixture<DaatatableEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaatatableEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaatatableEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
