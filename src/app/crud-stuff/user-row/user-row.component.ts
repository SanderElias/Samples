import { Component, input, inject, output, ResourceStatus } from '@angular/core';
import { RelationsService } from '../relations.service';

@Component({
  selector: 'tr [userId]',
  imports: [],
  template: `
    @if (rel() === undefined) {
      <td colspan="4">
        <p>Loading...</p>
      </td>
    } @else {
      <td>
        <button (click)="deleteRelation(rel()!.id)">🗑️</button>
        <button (click)="edit.emit(rel()!.id)">✏️</button>
      </td>
      <td>{{ rel()!.name }}</td>
      <td>{{ rel()!.username }}</td>
      <td>{{ rel()!.email }}</td>
    }
  `,
  styleUrl: './user-row.component.css',
})
export class UserRowComponent {
  rs = inject(RelationsService);
  userId = input.required<string>();
  edit = output<string>();

  rel = this.rs.read(this.userId);

  deleteRelation(id: string) {
    this.rs.delete(id).catch(e => {
      // do something better as just logging the error!
      console.error(e);
    });
  }
}
