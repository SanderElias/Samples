import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ObservableUtilsComponent } from './observable-utils.component';

describe('ObservableUtilsComponent', () => {
  let component: ObservableUtilsComponent;
  let fixture: ComponentFixture<ObservableUtilsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ObservableUtilsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
