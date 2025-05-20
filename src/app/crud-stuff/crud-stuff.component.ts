import { Component, ElementRef, inject, linkedSignal, signal, viewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HighLightBodyComponent } from './high-light-body/high-light-body.component';
import { NotifyDialogComponent } from './notify-dialog/notify-dialog.component';
import { NotifyDialogService } from './notify-dialog/notify-dialog.service';
import { RelationForm } from './relation-form/relation-form.component';
import { RelationsService } from './relations.service';
import { SortHeaderComponent } from './sort-header/sort-header.component';
import { UserRowComponent } from './user-row/user-row.component';

@Component({
  selector: 'se-crud-stuff',
  imports: [RelationForm, UserRowComponent, HighLightBodyComponent, NotifyDialogComponent, HeaderComponent, SortHeaderComponent],
  template: `<h1>CRUD Stuff</h1>
    <crud-header />
    <table>
      <thead>
        <tr>
          <th>Actions</th>
          <th></th>
          <th sortOn="name">Name</th>
          <th sortOn="username">Username</th>
          <th sortOn="email">Email</th>
        </tr>
      </thead>
      <tbody [highLight]="filter()">
        @for (rel of relationIds(); track $index) {
          <tr [userId]="rel" (edit)="edit(rel)"></tr>
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
  providers: [RelationsService]
})
export class CrudStuffComponent {
  relationsService = inject(RelationsService);

  relationIds = linkedSignal({
    source: () => this.relationsService.list(),
    computation: (list, previous?: { source: string[]; value?: string[] }) => {
      const emptyRow = Array.from({ length: 10 }, () => '');
      const loading = this.relationsService.listIsLoading();
      if (list.length === 0 && loading) {
        console.log('using previous values');
        list.concat(previous?.value || []); // use the previous list when loading to prevent flicker.
      }
      return [...list, ...emptyRow].splice(0, 10); // make sure we have 10 rows
    }
  });

  editRec = signal<string | undefined>(undefined);
  dlgRef = viewChild.required<ElementRef<HTMLDialogElement>>('dlg');
  // convenience so I don't have to use the `relationsServive.*` everywhere.
  filter = this.relationsService.filter.asReadonly();

  async edit(rel: string) {
    const dialog = this.dlgRef().nativeElement;
    this.editRec.set(rel);
    dialog.showModal();
  }
}
