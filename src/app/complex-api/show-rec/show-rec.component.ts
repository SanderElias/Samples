import { Component, computed, EventEmitter, input, OnInit, Output } from '@angular/core';

interface Record {
  name: string;
  url: string;
  [key: string]: any;
}

export type Entry = [string, any];
export type Selection = [string, string];

const key = (e: Entry) => e[0];
const val = (e: Entry) => e[1];
@Component({
    selector: 'app-show-rec',
    templateUrl: './show-rec.component.html',
    styles: [],
    imports: []
})
export class ShowRecComponent implements OnInit {
  record = input.required<Record>();
  entries = computed(() => this.record() && Object.entries(this.record()));
  @Output() selected = new EventEmitter<Selection>();

  key = key;
  val = val;

  constructor() {}

  isRecArray(e: Entry) {
    const i = val(e);
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
