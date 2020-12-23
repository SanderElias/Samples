import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'markdown-edit',
  template: `<a routerLink="/home"><h1>Edit</h1></a>
    <select-file (fileName)="loadFile($event)"></select-file>
    <md-edit [markdown]="markDown" (updates)="update($event)"></md-edit> `,
  styles: [],
})
export class EditComponent implements OnInit {
  fileName = '';
  markDown = '# Hello world';
  ngOnInit() {}
  async loadFile(name) {
    const data = await fetch(`http://localhost:8201/slides/${name}`)
      .then(r => r.text())
      .catch(() => undefined);
    if (data) {
      this.fileName = name;
      this.markDown = data;
    }
  }

  constructor(private http: HttpClient) {}

  update(newText) {
    this.http.put(`http://localhost:8201/slides/${this.fileName}`, newText).subscribe();
  }
}
