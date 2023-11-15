import { ChangeDetectionStrategy, Component, ElementRef, HostListener, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageJsonService } from '../../../package.json.service';
import { map } from 'rxjs';
import { ControlContainer, FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'se-dependencies',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    @if (vm$ | async; as vm) {
      <input type="hidden" name="dependencies" [ngModel]="deps" />
      @for (name of deps; track name) {
        <button type="button" (click)="del(name)">🗑️ {{ name }}</button>
      }
      <dialog>
        <header>Click to pick!</header>
        <main>
          @for (name of vm.names; track name) {
            <button (click)="pick(name)">
              {{ name }}
            </button>
          }
        </main>
      </dialog>
    }
  `,
  styleUrls: ['./depedencies.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class DepedenciesComponent {
  /** injections */
  pjs = inject(PackageJsonService);
  elm = inject(ElementRef).nativeElement as HTMLElement;

  @Input() deps: string[] = [];
  @Input() current = '';

  vm$ = this.pjs.pjObject$.pipe(
    map(p => {
      const wireits = p.wireit ?? {};
      const names = Object.keys(wireits).filter(name => name !== this.current);
      return { names };
    })
  );

  del(name: string) {
    this.deps = this.deps.filter(n => n !== name);
  }

  pick(name: string) {
    this.deps ??= [];
    this.deps.push(name);
    const dlg = this.elm.querySelector('dialog') as HTMLDialogElement;
    dlg.close();
  }

  addOne() {
    const dlg = this.elm.querySelector('dialog') as HTMLDialogElement;
    dlg.showModal();
  }
}
