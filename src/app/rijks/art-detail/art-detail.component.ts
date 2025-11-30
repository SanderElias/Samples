import { Component, Input } from '@angular/core';

import type { RakiObject } from '../rakiCollection';
@Component({
  selector: 'app-art-detail',
  templateUrl: './art-detail.component.html',
  styleUrls: ['./art-detail.component.css']
})
export class ArtDetailComponent {
  @Input() artDetail: RakiObject.ArtDetailObject;
}
