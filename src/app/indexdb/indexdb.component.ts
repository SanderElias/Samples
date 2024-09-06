import { Component, computed, inject, signal, viewChild, type ElementRef } from '@angular/core';
import { createId, EvSourceDbService } from './ev-source-db.service';
import { EditRecordComponent } from './edit-record/edit-record.component';

@Component({
  selector: 'se-indexdb',
  standalone: true,
  imports: [EditRecordComponent],
  template: `
    <h2>Sample with event-source DB</h2>
    <div class="cmdRow">
      <button (click)="newRow()">New Row</button>
      <select [(value)]="currentTable">
        @for (table of availableTables(); track $index) {
          <option [selected]="currentTable() === table">{{ table }}</option>
        }
      </select>
    </div>
    <table>
      <thead>
        <tr>
          <th></th>
          @for (col of availableCols(); track $index) {
            <th>{{ col }}</th>
          }
        </tr>
      </thead>
      <tbody>
        @for (row of rows(); track $index) {
          <tr>
            <td>
              <button (click)="edit(row().id)">✏️</button>
              <button (click)="del(row().id)">🗑️</button>
            </td>
            @for (col of availableCols(); track $index) {
              <td>{{ row()[col] }}</td>
            }
          </tr>
        }
      </tbody>
    </table>
    <dialog #dlg>
      @if (activeId() !== '') {
        <se-edit-record [id]="activeId()" [fields]="availableCols()" (done)="dlg.close()" />
      }
    </dialog>
  `,
  styleUrl: './indexdb.component.css',
})
export class IndexdbComponent {
  #evsDb = inject(EvSourceDbService);
  dlg = viewChild<ElementRef<HTMLDialogElement>>('dlg');
  currentTable = signal('demo-1');
  activeId = signal('');
  availableTables = () => Array.from(new Set<string>([this.currentTable(), ...this.#evsDb.availableTables()]));

  rows = computed(() => this.#evsDb.list(this.currentTable())());
  availableCols = computed(() => {
    const data = this.rows();
    const cols = new Set<string>();
    for (const row of data) {
      for (const col of Object.keys(row())) {
        cols.add(col);
      }
    }
    return Array.from(cols);
  });

  edit = (id: string) => {
    this.activeId.set(id);
    console.log('edit', id, this.dlg())
    const dlg = this.dlg()?.nativeElement as HTMLDialogElement;
    dlg?.showModal();
  };


  newRow = () => {
    const row = { id: createId(), table: this.currentTable(), tags: ['new'], date: new Date() };
    this.activeId.set(row.id);
    this.#evsDb.create(row);
  };

  del = this.#evsDb.delete;
}
