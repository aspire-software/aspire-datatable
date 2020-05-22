import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AspireDatatableComponent } from './aspire-datatable.component';

describe('AspireDatatableComponent', () => {
  let component: AspireDatatableComponent;
  let fixture: ComponentFixture<AspireDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AspireDatatableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AspireDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
