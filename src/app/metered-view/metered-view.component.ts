import { Component } from '@angular/core';
import { GaugeComponent } from './gauge/gauge.component';
import { StackedPerComponent } from "./stacked-per/stacked-per.component";

@Component({
  selector: 'se-metered-view',
  imports: [GaugeComponent, StackedPerComponent],
  template: `
    <h1>Metered View</h1>

    <se-gauge />
    <se-stacked-per />
  `,
  styleUrl: './metered-view.component.css'
})
export class MeteredViewComponent {}
