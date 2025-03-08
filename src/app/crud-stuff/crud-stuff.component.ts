import { httpResource } from '@angular/common/http';
import { asNativeElements, Component, computed, contentChild, ElementRef, inject, signal, viewChild } from '@angular/core';
import { HttpActionClient } from '@se-ng/signal-utils';
import { UserCard, userCard } from '../generic-services/address.service';
import { RelationForm } from './relation-form.component';

const fakerModule = import('@faker-js/faker');

@Component({
  selector: 'se-crud-stuff',
  imports: [RelationForm],
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
      @for (rel of relations(); track rel.id) {
        <tr>
          <!-- <td>{{ rel.id }}</td> -->
          <td>
            <button (click)="deleteRelation(rel.id)">🗑️</button>
            <button (click)="edit(rel)">✏️</button>
          </td>
          <td>{{ rel.name }}</td>
          <td>{{ rel.username }}</td>
          <td>{{ rel.email }}</td>
        </tr>
      }
    </table>
    <dialog #dlg>
      @defer (on viewport()) {
        <relation-form [id]="editRec()!" />
      } @placeholder {
        <p>Loading...</p>
      }
    </dialog> `,
  styleUrl: './crud-stuff.component.css',
})
export class CrudStuffComponent {
  http = inject(HttpActionClient);
  relationsResource = httpResource<UserCard[]>('http://localhost:3003/relations')!;
  relations = computed(() => this.relationsResource.value() ?? []);
  editRec = signal<string | undefined>(undefined);
  dlg = viewChild.required<ElementRef<HTMLDialogElement>>('dlg');

  async deleteRelation(id: string) {
    try {
      await this.http.delete(`http://localhost:3003/relations/${id}`);
      this.relationsResource.value.update(relations => relations!.filter(rel => rel.id !== id));
    } catch (e) {
      // do something better as just logging the error!
      console.error(e);
    }
  }

  async edit(rel: UserCard) {
    const dlg = this.dlg().nativeElement;
    this.editRec.set(rel.id);
    dlg.showModal();
  }

  async addRelation() {
    const relation = await generateRelation();
    try {
      const result = await this.http.post('http://localhost:3003/relations', relation);
      this.relationsResource.value.update(relations => [...(relations ?? []), relation]);
    } catch (e) {
      // do something better as just logging the error!
      console.error(e);
    }
  }
}

async function generateRelation() {
  const m = await fakerModule;
  return userCard(m.faker);
}
