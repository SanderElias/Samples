import { Component, computed, inject, input, output } from '@angular/core';
import type { UserCard } from '../../generic-services/address.service';
import { ConfirmItComponent } from '../confirm-it/confirm-it.component';
import { HighLightTDComponent } from '../high-light-td/high-light-td.component';
import { RelationsService } from '../relations.service';

@Component({
  selector: 'tr [userId]',
  imports: [ConfirmItComponent, HighLightTDComponent],
  template: `
    <td ignoreHl>
      <button (click)="deleteRelation(rel())" [disabled]="unStable()">
        🗑️
        <confirm-it lightDismiss>
          <h3>Sure?</h3>
          Are you sure you want to delete {{ rel().name }}
        </confirm-it>
      </button>
      <button (click)="edit.emit(rel().id!)" [disabled]="unStable()">✏️</button>
    </td>
    <td ignoreHl>
      <img
        loading="eager"
        [src]="rel().avatar ?? 'https://avatars.githubusercontent.com/u/96109922'"
        alt="User Avatar"
        width="42"
        height="42"
      />
    </td>
    <td>{{ rel().name ?? '--' }}</td>
    <td>{{ rel().username ?? '--' }}</td>
    <td>{{ rel().email ?? '--' }}</td>
  `,
  styleUrl: './user-row.component.css'
})
export class UserRowComponent {
  rs = inject(RelationsService);
  userId = input.required<string>();
  edit = output<string>();
  lastUser: UserCard | undefined;

  deleteRelation(rel: Partial<UserCard>) {
    this.rs.delete(rel as UserCard).catch(e => {
      // do something better as just logging the error!
      console.error(e);
    });
  }

  relRef = this.rs.read(this.userId);
  unStable = computed(() => {
    // we consider the row unstable if:
    //  - the relation is loading
    //  - the list is loading
    //  - there is no relation.
    // this is used to disable the buttons.
    const rowLoading = this.relRef().isLoading();
    const listLoading = this.rs.listIsLoading();
    return rowLoading || listLoading || isEmptyRelation(this.relRef().value());
  });
  rel = computed(() => this.relRef().value());
}


const isEmptyRelation = (obj: Partial<UserCard>) => {
  const {id , ...rest} = obj; // a relation is empty if it has no other properties than id
  return Object.keys(rest).length === 0;
}
