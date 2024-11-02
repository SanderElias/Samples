import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'se-shadow',
  standalone: true,
  imports: [],
  templateUrl: '../shared.html',
  styleUrl: './shadow.component.css',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ShadowComponent {

}
