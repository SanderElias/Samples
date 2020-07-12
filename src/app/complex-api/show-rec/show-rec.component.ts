import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface Record {
  name: string;
  url: string;
  [key: string]: any;
}

export type Entry = [string, any];
export type Selection = [string, string];

@Component({
  selector: 'app-show-rec',
  templateUrl: './show-rec.component.html',
  styles: [],
})
export class ShowRecComponent implements OnInit {
  entries: Entry[];
  @Input() set record(record: Record) {
    if (record) {
      this.entries = Object.entries(record);
    }
  }
  @Output() selected = new EventEmitter<Selection>();

  key = (e: Entry) => e[0];
  val = (e: Entry) => e[1];

  constructor() {}

  isRecArray(e: Entry) {
    const i = e[1];
    if (Array.isArray(i) && i.length > 0) {
      const firstEnt = i[0];
      return !Array.isArray(firstEnt) && typeof firstEnt === 'object';
    }
    return false;
  }

  /** returns false or an "record" */
  isRecord(x: any) {
    return x && !Array.isArray(x) && typeof x === 'object' && x;
  }

  ngOnInit() {}
}
