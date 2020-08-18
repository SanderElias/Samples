import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdEditComponent } from './md-edit.component';

describe('MdEditComponent', () => {
  let component: MdEditComponent;
  let fixture: ComponentFixture<MdEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
