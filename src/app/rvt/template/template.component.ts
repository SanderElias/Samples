import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { BehaviorSubject, switchMap } from 'rxjs';

import { Model, SampledataService } from '../sampledata.service';

@Component({
  selector: 'se-template',
  imports: [CommonModule, FormsModule],
  template: `
    @if (data$ | async; as data) {
      <main>
        <h1>Template</h1>
        <form #form="ngForm" (ngSubmit)="save(data)">
          <label>
            <span>Name</span>
            <input name="name" type="text" placeholder="Name" [(ngModel)]="data.name" required />
          </label>
          <label>
            <span>Date of birth</span>
            <input
              name="dob"
              type="date"
              placeholder="Date of birth"
              [ngModel]="data.dob | date: 'yyyy-MM-dd'"
              (ngModel)="data.dob = $any($event).target.valueAsDate"
            />
          </label>
          <label>
            <span>Email Address</span>
            <input name="email" type="email" placeholder="Email Address" [(ngModel)]="data.email" />
          </label>
          <label>
            <span>Favorite Number</span>
            <input name="favNumber" type="number" placeholder="Favorite Number" [(ngModel)]="data.favNumber" />
          </label>
          <label>
            <span><input name="admin" type="checkbox" [(ngModel)]="data.admin" /> Admin</span>
          </label>
          <label>
            <span>Level {{ data.level }}</span>
            <input name="level" type="range" min="1" max="5" [(ngModel)]="data.level" />
          </label>
          <button type="cancel" (click)="reset$.next(undefined); $event.preventDefault()">Reset form</button>
          <button type="submit" [disabled]="!form.valid" (click)="reveal(form)">Submit</button>
        </form>
      </main>
    }
  `,
  styleUrls: ['./template.component.css']
})
export default class TemplateComponent {
  reset$ = new BehaviorSubject(undefined);
  ds = inject(SampledataService);
  data$ = this.reset$.pipe(switchMap(() => this.ds.data$));

  save(data: Model) {
    console.log(`saving template ${JSON.stringify(data, undefined, 2)}`);
    this.ds.save(data);
  }

  reveal(form: NgForm) {
    // @ts-ignore
    window.templateForm = form;
  }
}
