import { Component, ElementRef, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'se-show-error',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
  styleUrls: ['./show-error.component.css'],
  providers: [
    {provide:FormGroup, useExisting: NgForm}
  ]
})
export class ShowErrorComponent {
  @Input({ required: true }) name: string;
  #form = inject(FormGroup); // use the injector to find the nearest form group, usually the form itself
  #elm = inject(ElementRef).nativeElement as HTMLDivElement;

  #sub = this.#form.statusChanges.subscribe({
    next: () => {
      const form = this.#form;
      const field = form.get(this.name);
      if (field === undefined) {
        throw new Error(`Field with name: "${this.name}" not found`);
      }
      if (field?.errors !== undefined) {
        this.#elm.style.display = 'block';
      } else {
        this.#elm.style.display = 'none';
      }
    },
  });

  ngOnDestroy() {
    this.#sub.unsubscribe()
  }
}
