import { Component, NgModule, OnInit } from '@angular/core';

@Component({
    selector: 'app-sample-three',
    templateUrl: './sample-three.component.html',
    styles: [],
    standalone: true
})
export default class SampleThreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


@NgModule({
    imports: [SampleThreeComponent],
    exports: [],
    providers: []
})
class Step1Module { }
