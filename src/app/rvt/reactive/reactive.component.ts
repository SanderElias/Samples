import { Component, inject, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Model, SampledataService } from '../sampledata.service';
import { Observable, shareReplay, startWith } from 'rxjs';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'se-reactive',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    @if (data$ | async; as data) {
      <main>
        <h1>Reactive</h1>
        <form [formGroup]="form" (ngSubmit)="save()">
          <label>
            <span>Name</span>
            <input name="name" type="text" placeholder="Name" formControlName="name" />
          </label>
          <label>
            <span>Date of birth</span>
            <input name="dob" type="date" placeholder="Date of birth" formControlName="dob" />
          </label>
          <label>
            <span>Email Address</span>
            <input name="email" type="email" placeholder="Email Address" formControlName="email" />
          </label>
          <label>
            <span>Favorite Number</span>
            <input name="favNumber" type="number" placeholder="Favorite Number" formControlName="favNumber" />
          </label>
          <label>
            <span><input name="admin" type="checkbox" formControlName="admin" /> Admin</span>
          </label>
          <label>
            <span>Level {{ level$ | async }}</span>
            <input name="level" type="range" min="1" max="5" formControlName="level" />
          </label>
          <button type="cancel" (click)="updateForm(data); $event.preventDefault()">Reset form</button>
          <button type="submit" [disabled]="!form.valid">Submit</button>
        </form>
      </main>
    }
  `,
  styleUrls: ['./reactive.component.css'],
})
export default class ReactiveComponent implements OnDestroy {
  ds = inject(SampledataService);
  data$ = this.ds.data$.pipe(shareReplay({ refCount: true, bufferSize: 1 }));

  form = new FormGroup(
    {} as {
      name: FormControl<string | null>;
      dob: FormControl<string | null>;
      email: FormControl<string | null>;
      favNumber: FormControl<number | null>;
      admin: FormControl<boolean | null>;
      level: FormControl<5 | 4 | 1 | 2 | 3 | null>;
    }
  );
  level$: Observable<5 | 4 | 1 | 2 | 3 | null> | undefined;

  sub = this.data$.subscribe(data => {
    this.updateForm(data);
    this.level$ = this.form.get('level')!.valueChanges.pipe(startWith(data.level));
  });

  updateForm(data: Model) {
    /**
     * this assigns a new formGroup on every update, which is not ideal
     */
    this.form = new FormGroup({
      name: new FormControl(data.name, Validators.required),
      dob: new FormControl(data.dob.toISOString().slice(0, 10)),
      email: new FormControl(data.email),
      favNumber: new FormControl(data.favNumber),
      admin: new FormControl(data.admin),
      level: new FormControl(data.level),
    });
  }

  save() {
    console.log(`saving reactive ${JSON.stringify(this.form.value, undefined, 2)}`);
    const dob = new Date(this.form.value.dob!);
    this.ds.save({ ...this.form.value, dob } as any);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
