import { Component, inject } from '@angular/core';
import { generateRelation } from '../generateRelation';
import { RelationsService } from '../relations.service';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'crud-header',
  imports: [SpinnerComponent],
  template: `
    <button (click)="addRelation()">Add relation</button>
    <label for="search">
      Search:
      <input id="search" type="search" placeholder="Search..." (input)="filter.set($any($event.target).value)" [value]="filter()" />
      @if (relationsService.listIsLoading()) {
        <se-spinner />
      }
    </label>
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  relationsService = inject(RelationsService);
  filter = this.relationsService.filter;

  async addRelation() {
    try {
      for (let i = 0; i < 10; i++) {
        const relation = await generateRelation();
        await this.relationsService.create(relation);
      }
    } catch (e) {
      // do something better as just logging the error!
      console.error(e);
    }
  }
}
