import { Component, OnInit, Input } from '@angular/core';

interface Record {
  name: string;
  url: string;
  [key: string]: any;
}

type Entry = [string, any];

@Component({
  selector: 'app-show-rec',
  templateUrl: './show-rec.component.html',
  styles: []
})
export class ShowRecComponent implements OnInit {
  entries: Entry[];
  @Input() set record(record: Record) {
    if (record) {
      this.entries = Object.entries(record);
    }
  }

  key = (e: Entry) => e[0];
  val = (e: Entry) => e[1];

  constructor() {}

  isRecArray(e:Entry) {
    const i = e[1];
    if (Array.isArray(i) && i.length>0) {
      const firstEnt = i[0];
      return (!Array.isArray(firstEnt)) && typeof firstEnt === 'object'
    }
    return false
  }

  ngOnInit() {}
}
