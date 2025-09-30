import { afterRenderEffect, Component, ElementRef, linkedSignal, signal, inject } from '@angular/core';
import {
  CdkDrag,
  CdkDragPlaceholder,
  CdkDragPreview,
  CdkDropList,
  CdkDropListGroup,
  type CdkDragDrop,
  type CdkDragEnter,
  type CdkDragExit
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'se-toh-cdk',
  imports: [CdkDrag, CdkDropList, CdkDropListGroup, CdkDragPlaceholder],
  template: `
    <div class="colGroup" cdkDropListGroup>
      @for (col of data(); let colNum = $index; track $index) {
        <div
          cdkDropList
          [cdkDropListData]="col"
          (cdkDropListDropped)="drop($event)"
          (cdkDropListEntered)="enter($event)"
          (cdkDropListExited)="leave($event)"
          cdkDropListSortingDisabled
          class="stack"
        >
          @for (puck of col; track $index) {
            <div cdkDrag [cdkDragData]="puck" [attr.data-weight]="puck" class="puck" [cdkDragDisabled]="$index !== 0">
              <div *cdkDragPlaceholder class="puck placeholder" [attr.data-weight]="puck"></div>
            </div>
          }
        </div>
      }
      @for (col of data(); let colNum = $index; track $index) {
        <div class="colLabel">stack {{ colNum + 1 }}</div>
      }
      <label class="row">
        <span>Number of pucks: {{ pucksNumber() }}</span>
        <input type="range" [value]="pucksNumber()" (input)="pucksNumber.set($any($event.target).valueAsNumber)" min="3" max="10" />
      </label>
      <label class="row">
        <span>Number of stacks: {{ colsNumber() }}</span>
        <input type="range" [value]="colsNumber()" (input)="colsNumber.set($any($event.target).valueAsNumber)" min="3" max="5" />
      </label>
    </div>
  `,
  styleUrl: './toh-cdk.component.css'
})
export class TohCdkComponent {
  #elm: HTMLDivElement = inject(ElementRef).nativeElement;

  colsNumber = signal(3);
  pucksNumber = signal(5);
  data = linkedSignal({
    source: () => ({ colNumber: this.colsNumber(), puckNumber: this.pucksNumber() }),
    computation: ({ colNumber, puckNumber }) => {
      const pucks = Array.from({ length: puckNumber }, (_, i) => i + 1);
      const data: number[][] = Array.from({ length: colNumber }, () => []);
      data[0] = pucks;
      return data;
    }
  });

  enter(ev: CdkDragEnter<number[]>) {
    const elm = ev.container.element.nativeElement;
    const colData = ev.container.data;
    const puck = ev.item.data as unknown as number;
    if (colData[0] === puck) {
      // don't highlight if its the originating stack
      return;
    }
    if (this.#canDrop(puck, colData)) {
      elm.classList.add('dragover');
    } else {
      elm.classList.add('cantdrop');
    }
  }

  leave(ev: CdkDragExit<any>) {
    this.#removeClasses(ev.container.element.nativeElement);
  }

  drop({ item, previousContainer, container }: CdkDragDrop<number[]>) {
    const puckNumber = item.data as unknown as number;
    const originalColumn = previousContainer.data;
    const targetColumn = container.data;
    this.#removeClasses(container.element.nativeElement);
    if (this.#canDrop(puckNumber, targetColumn)) {
      this.data.update(data => {
        for (let col of data) {
          if (col === originalColumn) {
            col.splice(col.indexOf(puckNumber), 1);
          }
          if (col === targetColumn) {
            col.unshift(puckNumber);
          }
        }
        return data;
      });
      console.log('dropped', puckNumber, 'on column', container.data);
    }
  }

  // remove drag-highlight classes
  #removeClasses = (el: Element) => {
    el.classList.remove('dragover');
    el.classList.remove('cantdrop');
  };
  // logic to determine if a puck can be dropped on a target stack
  #canDrop = (puckNumber, target: number[]) => puckNumber < (target[0] || Number.MAX_VALUE);

  _1 = afterRenderEffect(() => {
    this.#elm.style.setProperty('--cols', this.colsNumber().toString());
    this.#elm.style.setProperty('--pucks', this.pucksNumber().toString());
  });
}
