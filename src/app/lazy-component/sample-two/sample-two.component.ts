import { Component, NgModule, OnInit } from '@angular/core';

@Component({
    selector: 'app-sample-two',
    templateUrl: './sample-two.component.html',
    styles: [],
    standalone: true
})
export default class SampleTwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@NgModule({
    imports: [SampleTwoComponent],
    exports: [],
    providers: []
})
class Step1Module { }
