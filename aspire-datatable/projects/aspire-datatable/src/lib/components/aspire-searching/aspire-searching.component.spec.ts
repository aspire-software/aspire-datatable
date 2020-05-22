import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AspireSearchingComponent } from './aspire-searching.component';

describe('AspirePaginationComponent', () => {
  let component: AspireSearchingComponent;
  let fixture: ComponentFixture<AspireSearchingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AspireSearchingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AspireSearchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
