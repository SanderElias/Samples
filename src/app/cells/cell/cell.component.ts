import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  Injector,
  Input,
  NgZone,
  Signal,
  computed,
  inject,
} from '@angular/core';
import { Cell } from '../cells.component';

const clampedRandom = (min: number, max: number) =>
  Math.round(Math.random() * (max - min)) + min;

@Component({
  selector: 'se-cell',
  standalone: true,
  imports: [CommonModule],
  template: ``,
  styleUrls: ['./cell.component.css'],
})
export class CellComponent {
  @Input() cellData: Signal<Cell>;
  elm = inject(ElementRef).nativeElement as HTMLDivElement;
  zone = inject(NgZone);
  inj = inject(Injector);

  aliveColor = `oklch(${clampedRandom(55, 95)}% 75% 173`;
  deadColor = `oklch(${clampedRandom(10, 55)}% 50% 280`;

  id = computed(() => this.cellData().id);
  alive = computed(() => this.cellData().alive);

  ngOnInit() {
    const elm = this.elm;
    elm.style.setProperty(
      '--cellBg',
      this.alive() ? this.aliveColor : this.deadColor,
    );
    //   this.zone.runOutsideAngular(() => {
    //     runInInjectionContext(this.inj, () => {
    //       effect(() => {
    //         const id = this.id();
    //         if (id !== undefined) {
    //           this.elm.dataset.id = String(id);
    //         }
    //       });
    //       effect(() =>
    //         elm.style.setProperty(
    //           '--cellBg',
    //           this.alive() ? this.aliveColor : this.deadColor,
    //         ),
    //       );
    //     });
    //   });
  }
}
