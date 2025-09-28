import { afterNextRender, Component, ElementRef, inject, signal, computed, afterRenderEffect } from '@angular/core';
import { persistentLinkedSignal, persistentSignal } from '../mqtt/util/idbstorage';
import { th } from '@faker-js/faker';

// --- Utility Functions ---
export function getFirstDraggable(elm: Element): HTMLDivElement | undefined {
  return Array.from(elm.children).find(child => child.classList.contains('puck')) as HTMLDivElement | undefined;
}

export function canDrop(targetStack: Element, currentDragged: HTMLDivElement | undefined): boolean {
  const first = targetStack.children[0] as HTMLElement;
  const draggedWeight = +(currentDragged?.dataset?.weight || 0);
  const firstWeight = +(first?.dataset?.weight || 0);
  if (!currentDragged) return false;
  if (firstWeight === 0) return true;
  return firstWeight > draggedWeight;
}
let currentDragged: HTMLDivElement | undefined;

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
    // --- DOM Queries ---
    const rootElm = this.#elm;
    const stacks = Array.from(rootElm.querySelectorAll('.stack'));
    const draggables = Array.from(rootElm.querySelectorAll('[draggable]')) as HTMLDivElement[];

    if (stacks.length !== this.cols()) {
      throw new Error('Mismatch in number of stacks');
    }
    if (draggables.length !== this.pucks()) {
      throw new Error('Mismatch in number of draggables');
    }
    // --- Drag State ---

    // --- Attach/Detach Event Listeners ---
    for (const draggable of draggables) {
      draggable.removeEventListener('dragstart', handleDragStart);
      draggable.removeEventListener('dragend', handleDragEnd);
      draggable.addEventListener('dragstart', handleDragStart);
      draggable.addEventListener('dragend', handleDragEnd);
    }

    for (const stack of stacks) {
      stack.removeEventListener('dragover', handleDragOver);
      stack.removeEventListener('dragleave', handleDragLeave);
      stack.removeEventListener('drop', handleDrop);
      stack.addEventListener('dragover', handleDragOver);
      stack.addEventListener('dragleave', handleDragLeave);
      stack.addEventListener('drop', handleDrop);
    }
  });

  _1 = afterRenderEffect(() => {
    this.#elm.style.setProperty('--cols', this.cols().toString());
    this.#elm.style.setProperty('--pucks', this.pucks().toString());
  });
}

function handleDragLeave(ev: Event) {
  const el = ev.currentTarget as Element;
  el.classList.remove('dragover');
  el.classList.remove('cantdrop');
  ev.preventDefault();
}

const handleDrop = (ev: Event) => {
  const el = ev.currentTarget as Element;
  ev.preventDefault();
  el.classList.remove('dragover');
  el.classList.remove('cantdrop');
  if (canDrop(el, currentDragged) && currentDragged) {
    if (el.children.length > 0) {
      el.insertBefore(currentDragged, el.children[0]);
    } else {
      el.appendChild(currentDragged);
    }
    currentDragged = undefined;
  }
};

// --- Drag Event Handlers ---
function handleDragStart(ev: Event) {
  const el = ev.currentTarget as HTMLDivElement;
  const first = getFirstDraggable(el.parentElement!);
  // Only allow dragging the top puck
  if (el !== first) {
    ev.preventDefault();
    return;
  }
  el.classList.add('dragging');
  currentDragged = el;
}

function handleDragEnd(ev: Event) {
  const el = ev.currentTarget as HTMLDivElement;
  el.classList.remove('dragging');
}

function handleDragOver(ev: Event) {
  const el = ev.currentTarget as Element;
  if (currentDragged?.parentElement === el) return;
  if (canDrop(el, currentDragged)) {
    el.classList.add('dragover');
  } else {
    el.classList.add('cantdrop');
  }
  ev.preventDefault();
}
