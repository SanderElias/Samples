import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dyn-table',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="tableHolder">
    <!--
      THIS IS NOT THE WAY TO SHOW TABLES!
      it is slow and not scalable.
      But this is a sample, and I'm lazy ;)
     -->
    <table>
      <thead>
        <th *ngFor="let name of vm.names">{{name}}</th>
      </thead>
      <tr *ngFor="let row of vm.addresses" (click)="openWith(row.id)">
        <td *ngFor="let name of vm.names">{{row[name]}}</td>
      </tr>
    </table>
  </div>

  `,
  styles: [
  ]
})
export class DynTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
