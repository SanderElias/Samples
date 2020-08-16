import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'markdown-edit',
  template: `<a routerLink="/home"><h1>Edit</h1></a>
    <md-edit [markdown]="test" (updates)="update($event)"></md-edit> `,
  styles: [],
})
export class EditComponent implements OnInit {
  private updates = new Subject<string>();
  updates$ = this.updates.asObservable();
  update = this.updates.next.bind(this.updates$);
  test = '# Hello world';
  ngOnInit() {
    this.updates$.subscribe(d => console.log(d));
    this.update('hello');
  }
}
