import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCompComponent } from './show-comp.component';

describe('ShowCompComponent', () => {
  let component: ShowCompComponent;
  let fixture: ComponentFixture<ShowCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
