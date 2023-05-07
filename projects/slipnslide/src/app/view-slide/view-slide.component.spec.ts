import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSlideComponent } from './view-slide.component';

describe('ViewSlideComponent', () => {
  let component: ViewSlideComponent;
  let fixture: ComponentFixture<ViewSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [ViewSlideComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
