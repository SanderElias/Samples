import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SwapiComponent } from './swapi.component';

describe('SwapiComponent', () => {
  let component: SwapiComponent;
  let fixture: ComponentFixture<SwapiComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SwapiComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
