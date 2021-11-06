import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-three',
  templateUrl: './sample-three.component.html',
  styles: [
  ]
})
export default class SampleThreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


@NgModule({
  imports: [],
  exports: [],
  declarations: [SampleThreeComponent],
  providers: [],
})
class Step1Module { }
