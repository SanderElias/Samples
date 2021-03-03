import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cell',
  template: `<ng-content></ng-content>`,
  styles: [`
  :host {
    display:grid;
    box-sizing: border-box;
    width:100%;
    height:100%;
    border-radius:15px;
    /* border: 10px solid blue; */
    align-items:center;
    justify-items:center;
    background-color: #00cc0020;
    overflow: none;
  }
  `
  ]
})
export class CellComponent implements OnInit {
  @Input() @HostBinding('style.grid-column-start') x:number
  @Input() @HostBinding('style.grid-row-start') y:number

  constructor() { }

  ngOnInit(): void {
  }

}
