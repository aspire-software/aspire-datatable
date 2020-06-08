import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkRefComponent } from './link-ref.component';

describe('LinkRefComponent', () => {
  let component: LinkRefComponent;
  let fixture: ComponentFixture<LinkRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
