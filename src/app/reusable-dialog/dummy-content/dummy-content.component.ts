import { Component, computed, input } from '@angular/core';
import { DemoUserService } from '../../demo-users.service';

@Component({
  selector: 'se-dummy-content',
  imports: [],
  template: `
    <p>
      dummy-content works!
    </p>
  `,
  styleUrl: './dummy-content.component.css'
})
export class DummyContentComponent {

}

