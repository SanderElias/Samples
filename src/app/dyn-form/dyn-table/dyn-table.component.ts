import { AsyncPipe } from '@angular/common';
import type { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dyn-table',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <div class="tableHolder">
      <!--
      THIS IS NOT THE WAY TO SHOW TABLES!
      it is slow and not scalable.
      But this is a sample, and I'm lazy ;)
     -->
      <table>
        <thead>
          @for (name of vm.names; track name) {
            <th>{{ name }}</th>
          }
        </thead>
        @for (row of vm.addresses; track row) {
          <tr (click)="openWith(row.id)">
            @for (name of vm.names; track name) {
              <td>{{ row[name] }}</td>
            }
          </tr>
        }
      </table>
    </div>
  `,
  styles: []
})
export class DynTableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
