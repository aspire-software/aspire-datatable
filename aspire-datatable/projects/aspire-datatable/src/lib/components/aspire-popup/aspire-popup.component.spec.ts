import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AspirePopupComponent } from './aspire-popup.component';

describe('AspirePopupComponent', () => {
  let component: AspirePopupComponent;
  let fixture: ComponentFixture<AspirePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AspirePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AspirePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
