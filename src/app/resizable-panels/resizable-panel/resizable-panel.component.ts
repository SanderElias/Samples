import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'se-resizable-panel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      resizable-panel works!
    </p>
  `,
  styleUrls: ['./resizable-panel.component.css']
})
export class ResizablePanelComponent {

}
