import { Component, computed, inject, input, output } from '@angular/core';
import { RelationsService } from '../relations.service';
import { ConfirmItComponent } from '../confirm-it/confirm-it.component';
import { HighLightTDComponent } from '../high-light-td/high-light-td.component';

@Component({
  selector: 'tr [userId]',
  imports: [ConfirmItComponent, HighLightTDComponent],
  template: `
    @if (rel() === undefined) {
      <td>
        <button disabled>🗑️</button>
        <button disabled>✏️</button>
      </td>
      <td><img src="https://avatars.githubusercontent.com/u/74820931" alt="avatar placeholder" width="42" height="42" /></td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
    } @else {
      <td ignoreHl>
        <button (click)="deleteRelation(rel()!.id)">
          🗑️
          <confirm-it lightDismiss>
            <h3>Sure?</h3>
            Are you sure you want to delete {{ rel()!.name }}
          </confirm-it>
        </button>
        <button (click)="edit.emit(rel()!.id)">✏️</button>
      </td>
      <td><img [src]="rel()!.avatar" alt="User Avatar" width="42" height="42" /></td>
      <td>{{ rel()!.name }}</td>
      <td>{{ rel()!.username }}</td>
      <td>{{ rel()!.email }}</td>
    }
  `,
  styleUrl: './user-row.component.css'
})
export class UserRowComponent {
  rs = inject(RelationsService);
  userId = input.required<string>();
  edit = output<string>();

  deleteRelation(id: string) {
    this.rs.delete(this.rel()!).catch(e => {
      // do something better as just logging the error!
      console.error(e);
    });
    // rel = this.rs.read(this.userId);
  }

  relRef = this.rs.read(this.userId);
  rel = computed(() => this.relRef().value());
  // rel = computed(() => undefined as UserCard | undefined); // this.relRef().value() as UserCard | undefined);
}
