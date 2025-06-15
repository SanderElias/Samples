import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MqttComponent } from './mqtt.component';

describe('MqttComponent', () => {
  let component: MqttComponent;
  let fixture: ComponentFixture<MqttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MqttComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MqttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
