import { Component, computed, inject, input, linkedSignal, output, signal } from '@angular/core';
import type { UserCard } from '../../generic-services/address.service';
import { ConfirmItComponent } from '@se-ng/headless-ui';
import { HighLightTDComponent } from '../high-light-td/high-light-td.component';
import { RelationsService } from '../relations.service';
import { isEmptyRelation } from '../utils/is-empty-relation';
import { httpResource } from '@angular/common/http';
import { sign } from 'crypto';

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
  relationService = inject(RelationsService);
  userId = input.required<string>();
  edit = output<string>();

  deleteRelation(rel: Partial<UserCard>) {
    this.relationService.delete(rel as UserCard).catch(e => {
      // do something better as just logging the error!
      console.error(e);
    });
  }

  // this is wrong, because it will trigger listing reactivity on every change
  strangeId = signal<string | undefined>(undefined, { equal: () => false });

  relRef = this.relationService.read(this.userId);
  unStable = computed(() => {
    // we consider the row unstable if:
    //  - the relation is loading
    //  - the list is loading
    //  - there is no relation.
    // this is used to disable the buttons.
    const rowLoading = this.relRef().isLoading();
    const listLoading = this.relationService.listIsLoading();
    return rowLoading || listLoading || isEmptyRelation(this.relRef().value());
  });
  rel = computed(() => this.relRef().value());
  rel1 = linkedSignal({
    source: this.relRef().value(),
    computation: (value, prev) => {
      if (value === undefined && prev.value) return prev.value;
      return value;
    }

  })
}
