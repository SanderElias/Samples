import { Component, computed, ElementRef, inject, signal, viewChild } from '@angular/core';
import { userCard } from '../generic-services/address.service';
import { HighLightBodyComponent } from './high-light-body/high-light-body.component';
import { NotifyDialogComponent } from './notify-dialog/notify-dialog.component';
import { NotifyDialogService } from './notify-dialog/notify-dialog.service';
import { RelationForm } from './relation-form/relation-form.component';
import { RelationsService, type SortField } from './relations.service';
import { SpinnerComponent } from './spinner/spinner.component';
import { UserRowComponent } from './user-row/user-row.component';

@Component({
  selector: 'se-crud-stuff',
  imports: [RelationForm, UserRowComponent, HighLightBodyComponent, SpinnerComponent, NotifyDialogComponent],
  template: `<h1>CRUD Stuff</h1>
    <button (click)="addRelation()">Add relation</button>
    <label for="search">
      Search:
      <input id="search" type="search" placeholder="Search..." (input)="filter.set($any($event.target).value)" [value]="filter()" />
      @if (relationsService.listIsLoading()) {
        <se-spinner />
      }
    </label>
    <table>
      <thead>
        <tr>
          <th>Actions</th>
          <th></th>
          <th (click)="sortOn('name')">
            Name
            @if (sort() === 'name') {
              {{ order() === 'asc' ? '↓' : '↑' }}
            }
          </th>
          <th (click)="sortOn('username')">
            Username
            @if (sort() === 'username') {
              {{ order() === 'asc' ? '↓' : '↑' }}
            }
          </th>
          <th (click)="sortOn('email')">
            Email
            @if (sort() === 'email') {
              {{ order() === 'asc' ? '↓' : '↑' }}
            }
          </th>
        </tr>
      </thead>
      <tbody [highLight]="filter()">
        @for (rel of relationIds(); track $index) {
          <tr [userId]="rel" (edit)="edit(rel!)"></tr>
        }
      </tbody>
    </table>
    <dialog #dlg>
      @defer (on viewport) {
        <relation-form [id]="editRec()!" (done)="dlg.close()" />
      } @placeholder {
        <p>Loading...</p>
      }
    </dialog>
    <!--
      In a non-demo app, the se-notify-dialog should probably somewhere
      on a higher up component
    -->
    <se-notify-dialog /> `,
  styleUrl: './crud-stuff.component.css',
  providers: [RelationsService],
})
export class CrudStuffComponent {
  relationsService = inject(RelationsService);
  nds = inject(NotifyDialogService)
  relationIds = computed(() => {
    //make sure we allways have 10 rows
    const emptyRow = Array.from({ length: 10 }, () => '');
    return [...this.relationsService.list(), ...emptyRow].splice(0, 10); // make sure we have 10 rows
  });
  editRec = signal<string | undefined>(undefined);
  dlgRef = viewChild.required<ElementRef<HTMLDialogElement>>('dlg');
  // convenience so I don't have to use the `relationsServive.*` everywhere.
  filter = this.relationsService.filter;
  sort = this.relationsService.sort;
  order = this.relationsService.order;

  async edit(rel: string) {
    const dlg = this.dlgRef().nativeElement;
    this.editRec.set(rel);
    dlg.showModal();
  }

  async addRelation() {
    try {
      for (let i = 0; i < 10; i++) {
        const relation = await generateRelation();
        await this.relationsService.create(relation);
      }
    } catch (e) {
      // do something better as just logging the error!
      console.error(e);
    }
  }

  sortOn = (key: SortField) => {
    const currentSort = this.relationsService.sort();
    if (currentSort === key) {
      this.relationsService.order.update(currentOrder => (currentOrder === 'asc' ? 'desc' : 'asc'));
    } else {
      this.relationsService.sort.set(key);
      this.relationsService.order.set('asc');
    }
  };
}

async function generateRelation() {
  const fakerModule = import('@faker-js/faker');
  const module = await fakerModule;
  return userCard(module.faker);
}
