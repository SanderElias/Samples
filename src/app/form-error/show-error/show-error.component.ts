import { Component, ElementRef, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'se-show-error',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
  styleUrls: ['./show-error.component.css'],
})
export class ShowErrorComponent {
  #form = inject(NgForm); // use the injector to find the nearest form group, usually the form itself
  #elm = inject(ElementRef).nativeElement as HTMLDivElement;

  #sub = this.#form.form.statusChanges.subscribe({
    next: () => {
      const form = this.#form.form;
      const inp = this.#elm.parentElement?.querySelector('[name]') as HTMLInputElement;
      const name = inp?.name;
      const field = form.get(name);

      if (field == undefined) {
        // only warn when the form is touched, otherwise its probably a false positive
        form.touched && console.warn(`Field with name: "${name}" not found`);
        return;
      }
      if (field?.pristine) return; // never show errors on pristine, might want to change this
      if (field?.errors != undefined) {
        this.#elm.style.display = 'block';
      } else {
        this.#elm.style.display = 'none';
      }
    },
  });

  ngOnDestroy() {
    this.#sub.unsubscribe();
  }
}
