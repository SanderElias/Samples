import { Component } from '@angular/core';

@Component({
  selector: 'se-table-hover',
  imports: [],
  template: `
    <h1>Table Hover</h1>
    <table style="--coll:3">
      <tr>
        <th></th>
        @for (i of table[0]; track i) {
          <th>{{ $index + 1 }}</th>
        }
      </tr>
      @for (row of table; track row) {
        <tr>
          <th>{{ $index + 1 }}</th>
          @for (cell of row; track cell) {
            <td title="{{ cell }}">{{ cell }}</td>
          }
        </tr>
      }
    </table>
  `,
  styleUrl: './table-hover.component.css',
})
export class TableHoverComponent {
  table = Array.from({ length: 10 }, (_, i) => Array.from({ length: 10 }, (_, j) => `${i + 1} x ${j + 1} = ${(i + 1) * (j + 1)}`));
}


// td:has(~ td:hover), /* previous sibling cells */
// table:has(td:nth-of-type(3):hover) /* column cells */
// tr:not(:first-of-type):has(~ tr:hover)
// td:nth-of-type(3) {
//   background: var(--highlighted);
// }
