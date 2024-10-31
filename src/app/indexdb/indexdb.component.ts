import { Component, computed, inject, signal, viewChild, type ElementRef } from '@angular/core';
import { EditRecordComponent } from './edit-record/edit-record.component';
import { EvSourceDbService } from './ev-source-db.service';
import { createId, type UniqueId } from './unique-id-helpers';

@Component({
    selector: 'se-indexdb',
    imports: [EditRecordComponent],
    template: `
    <h2>Sample with event-source DB</h2>
    <div class="cmdRow">
      <button (click)="newRow()">New Row</button>
      <select (change)="currentTable.set($any($event.target).value)">
        @for (table of availableTables(); track $index) {
          <option [selected]="currentTable() === table">{{ table }}</option>
        }
      </select>
    </div>
    <table>
      <thead>
        <tr>
          <th></th>
          @for (col of state().cols; track $index) {
            <th>{{ col }}</th>
          }
        </tr>
      </thead>
      <tbody>
        @for (row of state().rows; track $index) {
          <tr>
            <td>
              <button (click)="edit(row().id)">✏️</button>
              <button (click)="del(row().id)">🗑️</button>
            </td>
            @for (col of state().cols; track $index) {
              <td>{{ row()[col] }}</td>
            }
          </tr>
        }
      </tbody>
    </table>
    <dialog #dlg>
      @if (state().activeId() !== undefined) {
        <se-edit-record [id]="state().activeId()!" [fields]="state().cols" (done)="dlg.close()" />
      }
    </dialog>
  `,
    styleUrl: './indexdb.component.css'
})
export class IndexdbComponent {
  #evsDb = inject(EvSourceDbService);
  dlg = viewChild<ElementRef<HTMLDialogElement>>('dlg');
  currentTable = signal('demo-1');
  availableTables = this.#evsDb.$availableTables;

  state = computed(() => {
    const rows = this.#evsDb.list(this.currentTable())();
    const cols = new Set<string>();
    for (const row of rows) {
      for (const col of Object.keys(row())) {
        cols.add(col);
      }
    }
    return {
      currentTable: this.currentTable(),
      rows,
      cols: Array.from(cols),
      activeId: signal<UniqueId | undefined>(undefined),
    };
  });

  edit = (id: UniqueId) => {
    this.state().activeId.set(id);
    const dlg = this.dlg()?.nativeElement as HTMLDialogElement;
    dlg?.showModal();
  };

  newRow = () => {
    const row = { id: createId(), table: this.currentTable(), tags: ['new'], date: new Date() };
    this.state().activeId.set(row.id);
    this.#evsDb.create(row);
  };

  del = this.#evsDb.delete;
}
