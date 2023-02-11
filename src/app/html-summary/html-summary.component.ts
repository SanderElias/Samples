import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'se-html-summary',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      html-summary works!
    </p>
  `,
  styleUrls: ['./html-summary.component.css']
})
export class HtmlSummaryComponent {

}
