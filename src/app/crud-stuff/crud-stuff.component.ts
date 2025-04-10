import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { userCard } from '../generic-services/address.service';
import { RelationForm } from './relation-form/relation-form.component';
import { RelationsService } from './relations.service';
import { UserRowComponent } from './user-row/user-row.component';

@Component({
  selector: 'se-crud-stuff',
  imports: [RelationForm, UserRowComponent],
  template: `<h1>CRUD Stuff</h1>
    <button (click)="addRelation()">Add relation</button>
    <table>
      <thead>
        <tr>
          <th>Actions</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        @for (rel of relationIds(); track rel) {
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
    </dialog> `,
  styleUrl: './crud-stuff.component.css',
  providers: [RelationsService],
})
export class CrudStuffComponent {
  rs = inject(RelationsService);
  relationIds = this.rs.list;
  editRec = signal<string | undefined>(undefined);
  dlgRef = viewChild.required<ElementRef<HTMLDialogElement>>('dlg');

  async edit(rel: string) {
    const dlg = this.dlgRef().nativeElement;
    this.editRec.set(rel);
    dlg.showModal();
  }

  async addRelation() {
    const relation = await generateRelation();
    try {
      this.rs.create(relation);
    } catch (e) {
      // do something better as just logging the error!
      console.error(e);
    }
  }
}

async function generateRelation() {
  const fakerModule = import('@faker-js/faker');
  const module = await fakerModule;
  return userCard(module.faker);
}
