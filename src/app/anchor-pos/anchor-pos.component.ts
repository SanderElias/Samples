import { Component, computed, signal } from '@angular/core';
import { set } from 'idb-keyval';

@Component({
  selector: 'se-anchor-pos',
  standalone: true,
  imports: [],
  template: `
    <h1>Anchor Position</h1>

    <label>
      <span>move the slider to select the position<br /></span>
      <input
        type="range"
        min="0"
        [max]="posOptions.length - 1"
        step="1"
        (input)="currentPos.set($any($event.target).value)"
        [value]="currentPos()"
      />

      <section>
        <div class="anchored" [style]="pos()"><p>⚓︎ The anchored content</p></div>

        <div class="infobox">
          <p>this is the box we are going to anchor to</p>
          <p>Current Position: {{ posOptions[currentPos()] }}</p>
        </div>
      </section>
    </label>
  `,
  styleUrl: './anchor-pos.component.css',
})
export class AnchorPosComponent {
  posOptions = ['start start', 'start center', 'start end', 'center end', 'end end', 'end center', 'end start', 'center start'];
  currentPos = signal(0);

  pos = computed(() => {
    const p = `inset-area: ${this.posOptions[this.currentPos()]}`;
    console.log(p);
    return p;
  });

}
