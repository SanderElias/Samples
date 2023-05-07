import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ResizablePanelComponent } from './resizable-panel/resizable-panel.component';

@Component({
  selector: 'se-resizable-panels',
  standalone: true,
  imports: [ResizablePanelComponent, NgFor],
  template: `
    <se-resizable-panel *ngFor="let n of panels">
      <h3>Panel {{n}}</h3>
    </se-resizable-panel>
  `,
  styleUrls: ['./resizable-panels.component.css']
})
export class ResizablePanelsComponent {
  panels = [
    "One",
    "Two",
    "Three",
    "Four",
  ];

}
