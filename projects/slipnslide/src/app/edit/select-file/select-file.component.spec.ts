import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SelectFileComponent } from './select-file.component';

describe('SelectFileComponent', () => {
  let component: SelectFileComponent;
  let fixture: ComponentFixture<SelectFileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SelectFileComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
