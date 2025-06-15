import { Component } from '@angular/core';
import { GaugeComponent } from './gauge/gauge.component';

@Component({
  selector: 'se-metered-view',
  imports: [GaugeComponent],
  template: `
    <h1>Metered View</h1>

    <se-gauge />
  `,
  styleUrl: './metered-view.component.css'
})
export class MeteredViewComponent {}
