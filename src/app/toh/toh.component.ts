import { afterNextRender, Component, ElementRef, inject, signal, computed, afterRenderEffect } from '@angular/core';
import { persistentLinkedSignal, persistentSignal } from '../mqtt/util/idbstorage';

@Component({
  selector: 'se-toh',
  imports: [],
  template: `
    @for (col of colNums(); track $index) {
      <div attr.dropzone="{{ col }}" class="stack">
        @if (col === 1) {
          @for (puck of puckList(); track $index) {
            <div draggable="true" [attr.data-weight]="puck" class="puck"></div>
          }
        }
      </div>
    }
    @for (col of colNums(); track $index) {
      <div class="label">Stack {{ col }}</div>
    }
    <label class="row">
      <span>Number of pucks: {{ pucks() }}</span>
      <input type="range" [value]="pucks()" (input)="pucks.set($any($event.target).valueAsNumber)" min="3" max="10" />
    </label>
    <label class="row">
      <span>Number of stacks: {{ cols() }}</span>
      <input type="range" [value]="cols()" (input)="cols.set($any($event.target).valueAsNumber)" min="3" max="5" />
    </label>
  `,
  styleUrl: './toh.component.css'
})
export class TohComponent {
  #elm: HTMLDivElement = inject(ElementRef).nativeElement;
  pucks = persistentSignal('toh-pucks', 4);
  cols = persistentSignal('toh-cols', 3);
  puckList = computed(() => Array.from({ length: this.pucks() }, (_, i) => i + 1));
  colNums = computed(() => Array.from({ length: this.cols() }, (_, i) => i + 1));

  _ = afterRenderEffect(() => {
    const e = this.#elm;

    const stacks = Array.from(e.querySelectorAll('.stack'));
    const draggables = Array.from(e.querySelectorAll('[draggable]')) as HTMLDivElement[];
    if (draggables.length !== this.pucks()) {
      throw new Error('Mismatch in draggables');
    }
    let current: HTMLDivElement | undefined;
    const firstDraggable = (elm: Element): HTMLDivElement | undefined => {
      const children = Array.from(elm.children) as HTMLDivElement[];
      for (const child of children) {
        if (child.classList.contains('puck')) {
          return child;
        }
      }
      return undefined;
    };

    for (const d of draggables) {
      d.addEventListener('dragstart', ev => {
        const first = firstDraggable(d.parentElement!);
        console.log('dragstart', d, first, d === first);
        if (d !== first) {
          ev.preventDefault();
          return;
        }

        d.classList.add('dragging');
        current = d;
      });
      d.addEventListener('dragend', () => {
        d.classList.remove('dragging');
      });
    }

    const canDrop = (s: Element) => {
      const first = s.children[0] as HTMLElement;
      const puckWeight = +(current?.dataset?.weight || 0);
      const firstWeight = +(first?.dataset?.weight || 0);

      // console.log({ puckWeight, firstWeight, current });

      if (!current) {
        return false;
      }
      if (firstWeight === 0) {
        return true;
      }

      if (firstWeight > puckWeight) {
        return true;
      }
      return false;
    };

    for (const s of stacks) {
      s.addEventListener('dragover', ev => {
        if (current?.parentElement === s) {
          return;
        }
        if (canDrop(s)) {
          s.classList.add('dragover');
        } else {
          s.classList.add('cantdrop');
        }
        ev.preventDefault();
      });
      s.addEventListener('dragleave', ev => {
        s.classList.remove('dragover');
        s.classList.remove('cantdrop');
        ev.preventDefault();
      });
      s.addEventListener('drop', ev => {
        ev.preventDefault();
        s.classList.remove('dragover');
        s.classList.remove('cantdrop');
        if (canDrop(s) && current) {
          if (s.children.length > 0) {
            const first = s.children[0];
            s.insertBefore(current, first);
          } else {
            s.appendChild(current);
          }
          current = undefined;
        }
      });
    }
  });

  _1 = afterRenderEffect(() => {
    this.#elm.style.setProperty('--cols', this.cols().toString());
    this.#elm.style.setProperty('--pucks', this.pucks().toString());
  });
}
